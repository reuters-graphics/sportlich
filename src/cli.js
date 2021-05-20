import Sportlich from '@reuters-graphics/sportlich';
import pkg from '../package.json';
import sade from 'sade';

const prog = sade('sportlich');

prog
  .version(pkg.version);

prog
  .command('greet <name>')
  .option('-h, --happy', 'Happy to see them?')
  .action((name, opts) => {
    const sportlich = new Sportlich();
    sportlich.greet(name, opts.happy);
  });

prog.parse(process.argv);
