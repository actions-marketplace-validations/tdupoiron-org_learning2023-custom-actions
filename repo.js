const core = require('@actions/core');
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: core.getInput('token'),
});

async function createRepository(repoOwner, repoName, repoVisibility) {

    octokit.rest.repos.createInOrg({
        org: repoOwner,
        name: repoName,
        visibility: repoVisibility
    }).then(({ data }) => {
        core.setOutput("repo_full_name", data.full_name);
        core.setOutput("repo_url", data.html_url);
        core.setOutput("repo_id", data.id);
    }
    ).catch((error) => {
        core.setFailed(error.response.data.message);
    }
    );
}

// Get Input Parameters
const repoOwner = core.getInput('repo_owner');
const repoName = core.getInput('repo_name');
const repoVisibility = core.getInput('repo_visibility');

console.log(`Creating repository ${repoOwner}/${repoName} with visibility ${repoVisibility}`);

createRepository(repoOwner, repoName, repoVisibility);