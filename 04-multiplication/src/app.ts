import fs from 'fs';

let outputMessage = '';
const base = 5;
const welcomeMessage = `
=======================================
          Table of ${base}
=======================================
`;

for (let i = 1; i <= 10; i += 1) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = welcomeMessage + outputMessage;
console.log(outputMessage);

const outputPath = 'outputs';

try {
  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);
  console.log('File created !');
} catch (error) {
  console.log('Error creating the file');
}
