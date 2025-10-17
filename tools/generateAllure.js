const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const cwd = process.cwd();
const results = path.join(cwd, 'allure-results');
const out = path.join(cwd, 'allure-report');

const cmd = 'npx';
// Use relative paths and quote them to avoid issues with spaces in cwd path
const command = `${cmd} allure generate "./allure-results" --clean -o "./allure-report"`;

console.log('Running command:', command);

// Run as a single shell command string so Windows quoting behaves correctly
const p = spawn(command, { stdio: 'inherit', shell: true });

p.on('close', (code) => {
  if (code === 0) {
    console.log('Allure report generated at', out);

    // list generated files (short)
    try {
      const files = fs.readdirSync(out);
      console.log('Files in allure-report:', files.slice(0, 20));
    } catch (e) {
      // ignore
    }
  } else {
    console.error('Allure generation failed with code', code);
  }
  process.exit(code);
});
