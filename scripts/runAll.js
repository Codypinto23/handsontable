const [ /* node bin */, /* path to this script */, command] = process.argv;
const { spawnSync } = require('child_process');
const order = [
  'handsontable',
  'angular-handsontable',
  'react-handsontable',
  'vue-handsontable'
];
let hasErrors = false;

order.forEach((project) => {
  if (hasErrors) {
    return;
  }
  const spawnedCommand = spawnSync('npm', [
    'run',
    'in',
    project,
    command
  ], {
    stdio: 'inherit'
  });

  if (spawnedCommand.status) {
    hasErrors = true;
  }
});

if (hasErrors) {
  process.exitCode = 1;
}

