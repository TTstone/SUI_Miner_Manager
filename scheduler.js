const { exec } = require("child_process");
const cron = require("node-cron");

// Function to run the merge script with specific parameters
function runMergeScript(fomo, chain, phrase) {
  const command = `node merge.js ${fomo ? "--fomo" : ""} --chain=${chain} --phrase="${phrase}"`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  });
}

// Schedule scripts to run every hour
cron.schedule('0 * * * *', () => {
  runMergeScript(true, 'mainnet', 'put your phrase here');
});

// Add more schedules as needed with different parameters
cron.schedule('0 * * * *', () => {
  runMergeScript(false, 'testnet', 'put another phrase here');
});