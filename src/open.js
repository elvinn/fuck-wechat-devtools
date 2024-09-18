const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const { isWindows, isMac } = require('./const');

async function openOnMac(name) {
  const psCommand = `open -a ${name}`;
  try {
    await execPromise(psCommand);
  } catch (err) {
    if (err.code === 1) {
      console.error(`打开 ${name} 失败.`);
      return;
    }

    throw err;
  }
}

/**
 * 打开所有名称包含 name 的进程
 * @param {string} name 进程包含的名称
 */
async function open(name = 'wechatwebdevtools') {
  if (isMac) {
    return openOnMac(name);
  }
  if (isWindows) {
    console.log('欢迎贡献 windows 平台代码');
  }
}

module.exports = open;
