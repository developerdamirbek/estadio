// scripts/check-caret.js

const fs = require('fs')

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
const dependencies = packageJson.dependencies || {}
const devDependencies = packageJson.devDependencies || {}

const checkCaret = (deps) => Object.entries(deps).some(([key, value]) => value.startsWith('^'))

if (checkCaret(dependencies) || checkCaret(devDependencies)) {
  console.error('Error: ^ character found in package version.')
  process.exit(1)
} else {
  console.log('No ^ characters found in package versions.')
}
