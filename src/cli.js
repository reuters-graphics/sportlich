import pkg from "../package.json";
import sade from "sade";
import sports from "./clis/sports";
require("dotenv").config();

const prog = sade("sportlich", false);
prog.version(pkg.version);

// Common options
const wrap = (x) =>
  x
    .option("-s, --skeleton", "Show only one value for each array")
    .option(
      "-r, --raw",
      "Show full json value without Node's default formatting"
    );

function subcommand(command, name, opts) {
  if (opts._.length == 0) {
    // List commands by requesting help from sub-command
    command(wrap).help();
  } else {
    const cmd = ["sportlich", name, ...opts._];
    Object.entries(opts).forEach(([key, value]) => {
      // Skip default key
      if (key == "_") return;
      // Append other options to cmd
      cmd.push(`--${key}=${value}`);
    });
    command(wrap).parse(cmd);
  }
}

sports.forEach(([name, action]) => {
  prog
    .command(name)
    .describe(`Run ${name} commands`)
    .action((opts) => {
      subcommand(action, name, opts);
    });
});

// Wrap subcommands
const oldParse = prog.parse;
prog.parse = function (...args) {
  // See if matches a subcommand
  if (args[0].length > 3 && sports.map((x) => x[0]).includes(args[0][2])) {
    // Could make this a tad cleaner
    // We just run the subcommand with its arguments, which solves wrong help text
    const matchingSubcommand = sports.filter((x) => x[0] == args[0][2])[0];
    return matchingSubcommand[1](wrap).parse([
      args[0][0],
      `${args[0][1]} ${args[0][2]}`,
      args[0][3],
      ...args[0].slice(4),
    ]);
  }
  // Otherwise parse as normal
  return oldParse.bind(this)(...args);
};

prog.parse(process.argv);