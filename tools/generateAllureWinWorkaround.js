const fs = require('fs-extra');
const path = require('path');
const { spawn } = require('child_process');

(async () => {
  try {
    const src = path.join(process.cwd(), 'allure-results');
    const destRoot = 'C:\\allure_temp';
    const dest = path.join(destRoot, 'allure-results');
    const out = path.join(destRoot, 'allure-report');

    console.log('Copying results from', src, 'to', dest);
    await fs.remove(destRoot);
    await fs.mkdirp(dest);
    await fs.copy(src, dest);
    console.log('Copied. Generating report in', destRoot);

    const command = `npx allure generate "${dest}" --clean -o "${out}"`;
    console.log('Running:', command);
    const p = spawn(command, { shell: true, stdio: 'inherit' });
    p.on('close', (code) => {
      if (code === 0) {
        console.log('Generated report at', out);
        try { console.log('Files:', fs.readdirSync(out).slice(0,20)); } catch(e){}
      } else {
        console.error('Failed with', code);
      }
      process.exit(code);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
