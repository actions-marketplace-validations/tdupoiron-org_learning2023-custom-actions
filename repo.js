const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "mypersonalaccesstoken123",
});


async function run() {
    try {
        const token = core.getInput('token');
        const octokit = github.getOctokit(token);
    
        const repo = await octokit.repos.createInOrg({
        org: 'octokit',
        name: 'hello-world',
        private: true
        });
    
        console.log(repo);
    } catch (error) {
        core.setFailed(error.message);
    }
    }

run();
