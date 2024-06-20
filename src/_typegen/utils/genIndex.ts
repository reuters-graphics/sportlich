import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';

function toPascalCase(str: string) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const pattern = '**/*.ts';

export function generateIndex(typeRoot: string) {
  try {
    // Use glob.sync to find all .ts files
    const files = globSync(pattern, { cwd: typeRoot });

    // Filter out index.ts from the list
    const tsFiles = files.filter((file) => !file.endsWith('index.ts'));

    // Prepare the export lines
    const exportLines = tsFiles.map((file) => {
      const relativePath = file.replace(/\.ts$/, '');
      return `export * as ${toPascalCase(
        relativePath
      )} from './${relativePath}';`;
    });

    // Join export lines with newline characters
    const indexContent = exportLines.join('\n');

    // Write to index.ts
    fs.writeFileSync(path.join(typeRoot, 'index.ts'), indexContent, 'utf8');
    console.log('✅ index.ts');
  } catch (error) {
    console.error('Error:', error);
  }
}
