import {
  InputData,
  jsonInputForTargetLanguage,
  quicktype,
} from 'quicktype-core';

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const TYPE_ROOT = path.join(__dirname, '../../apis/@types');

export async function generateTypes(
  samples: unknown[],
  typeMethod: string,
  sport: string,
  opts = {}
) {
  const jsonInput = jsonInputForTargetLanguage('typescript');
  await jsonInput.addSource({
    name: 'Data',
    samples: samples.map((sample) => JSON.stringify(sample)),
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  const result = await quicktype({
    inputData,
    lang: 'typescript',
    inferEnums: false,
    combineClasses: false,
    rendererOptions: {
      'just-types': true,
      'runtime-typecheck': true,
    },
    ...opts,
  });

  const OUTPUT = path.join(TYPE_ROOT, path.join(sport, `${typeMethod}.ts`));
  const OUTPUT_DIR = path.dirname(OUTPUT);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const typeModule = result.lines.join('\n');

  fs.writeFileSync(OUTPUT, typeModule);
  console.log(`✅ ${typeMethod}`);
}
