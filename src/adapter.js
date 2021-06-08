import pkg from './../package.json';
import sade from 'sade';

// Adapter to help abstract sub-programs for each sport
export function commandAdapter(commandName, sportClass, commands) {
  const sportName = commandName.split(' ')[0];
  return [
    sportName,
    (optionWrapper) => {
      const prog = sade(commandName, false);
      // Hacky way of making subcommand programs
      prog.bin = `sportlich ${sportName}`;
      prog.single = false;
      prog.version(pkg.version);

      commands.forEach(([command, description, action]) => {
        optionWrapper(
          prog
            .command(command)
            .describe(description)
            .action((...args) => {
              const opts = args.length == 0 ? {} : args[args.length - 1];
              opts.cmdline = true; // enable logging
              const instance = new sportClass(opts);
              action(instance).bind(instance)(...args.slice(0, -1));
            })
        );
      });

      return prog;
    },
  ];
}
