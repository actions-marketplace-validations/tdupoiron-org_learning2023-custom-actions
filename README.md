# learning2023-custom-actions

This repository can be used for training purpose from zero to hero on designing custom actions.

This repository is public. It means that the compute usage, and the security scanners are free to use.

## Step 1: Preparation

1. Create a copy of this repository by clicking on "Use this template" button.

<img width="284" alt="image" src="https://github.com/tdupoiron/learning2023-custom-actions/assets/7711190/ef07eee1-1d10-440a-b824-7f5e9341ac5a">

## Use Case

In this series of exercies, we will create an IssueOps process.
By creating an issue in this repository, we will trigger the creation of a repository and apply security policies such as the main branch protection.

## Step 2: Create the main workflow

As a reminder from a previous training, we will create a simple workflow to listen to the event and trigger a job.

1. Create a .github/workflows/wf_create_repo.yml file

