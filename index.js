#!/usr/bin/env node

const path = require('path')
const {exec} = require('child_process')
const {writeFileSync} = require('fs')
const uuid = require('uuid/v1')

const {TMPDIR} = process.env

const getClipboard = () => new Promise((resolve, reject) => exec('pbpaste', (err, stdout, stderr) => {
  if (err || stderr) reject(new Error(err || stderr))
  resolve(stdout)
}))

const writeAndOpen = (s, ext) => {
  const filepath = path.join(TMPDIR, `${uuid()}.${ext}`)
  writeFileSync(filepath, s, 'utf8')
  exec(`open -a "Google Chrome" ${filepath}`)
}

;(async function main() {
  try {
    const paste = await getClipboard()
    const json = JSON.stringify(JSON.parse(paste))
    writeAndOpen(json, 'json')
    process.exit(0)
  } catch (err) {
    writeAndOpen(err.stack, 'log')
    process.exit(1)
  }
})()
