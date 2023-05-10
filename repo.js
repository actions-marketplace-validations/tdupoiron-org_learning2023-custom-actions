const core = require('@actions/core');
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.REPO_OPS_TOKEN,
});

async function createRepository(repoName, isPrivate) {

    octokit.rest.repos.createForAuthenticatedUser({
        name: repoName,
        private: isPrivate,
    }).then(({ data }) => {
        core.setOutput("repo_full_name", data.full_name);
        core.setOutput("repo_id", data.id);
    }
    ).catch((error) => {
        core.setFailed(error.response.data.message);
    }
    );
}

// Get Input Parameters
const repoName = core.getInput('repo_name');
const isPrivate = core.getInput('repo_is_private');

createRepository(repoName, isPrivate);
