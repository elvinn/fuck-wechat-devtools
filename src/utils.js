async function sleep(millseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millseconds);
  });
}

async function isProcessRunning(name) {
  const { exec } = require('child_process');
  const util = require('util');
  const execPromise = util.promisify(exec);

  const psCommand = `ps -ef | grep ${name} | grep -v grep`;
  try {
    await execPromise(psCommand);
  } catch (err) {
    if (err.code === 1) {
      return false;
    }
  }

  return !!psCommand;
}

/**
 * 等待进程被杀死
 * @param {string} name 进程名
 */
async function waitUntilKilled(name) {
  const maxSleepTimes = 10;
  let sleepTime = 0;
  while (await isProcessRunning(name)) {
    await sleep(500);

    sleepTime++;
    if (sleepTime > maxSleepTimes) {
      console.log('等待进程被杀死超时 ⚠️');
    }
  }
}

module.exports = {
  waitUntilKilled,
}
