const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const isWindows = process.platform === 'win32';
const isMac = process.platform === 'darwin';

const killOnMac = async (name) => {
  const psCommand = `pkill -f ${name}`;
  try {
    await execPromise(psCommand);
  } catch (err) {
    if (err.code === 1) {
      console.log(`恭喜你没有运行 ${name} 🎉`);
      return;
    }

    throw err;
  }
  console.log(`Good Job 🔫 !`);
}

/**
 * 终止所有名称包含 name 的进程和它的子进程
 * @param {string} name 进程包含的名称
 */
async function killAll(name = 'wechatdevtools') {
  if (isMac) {
    return killOnMac(name);
  }
  if (isWindows) {
    console.log('欢迎贡献 windows 平台代码');
  }
}

module.exports = killAll;

