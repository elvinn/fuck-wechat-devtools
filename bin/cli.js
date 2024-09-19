#!/usr/bin/env node

const { version } = require('../package.json')
const { Command } = require('commander');
const killAll = require('../src/index.js');
const open = require('../src/open.js');

const program = new Command();

program
  .version(version)
  .name('kill-wechat-devtools')
  .description('Kill all wechat devtools')
  .option('-r, --reopen', 'reopen wechat devtools');

program.parse(process.argv);
const options = program.opts();

killAll().then(async () => {
  if (options.reopen) {
    open();
  }
});

