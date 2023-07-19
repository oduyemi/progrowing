# Contributing to ProGrowing

Want to contribute to ProGrowing? There are a few things you need to know.  

## Proposing a Change
If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend filing an issue. This lets us reach an agreement on your proposal before you put significant effort into it.

If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.

## Your First Pull Request
Working on your first Pull Request? You can learn how from this free video series:

### How to Contribute to an Open Source Project on GitHub

To help you get your feet wet and get you familiar with our contribution process, we have a list of good first issues that contain bugs that have a relatively limited scope. This is a great place to get started.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take it over but you should still leave a comment.

### Sending a Pull Request
The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. For API changes we may need to fix our internal uses at Facebook.com, which could cause some delay. We’ll do our best to provide updates and feedback throughout the process.

Before submitting a pull request, please make sure the following is done:

### Fork the repository and create your branch from main.
Run yarn in the repository root.
If you’ve fixed a bug or added code that should be tested, add tests!
Ensure the test suite passes (yarn test). Tip: yarn test --watch TestName is helpful in development.
Run yarn test --prod to test in the production environment.
If you need a debugger, run yarn test --debug --watch TestName, open chrome://inspect, and press “Inspect”.
Format your code with prettier (yarn prettier).
Make sure your code lints (yarn lint). Tip: yarn linc to only check changed files.
Run the Flow typechecks (yarn flow).
If you haven’t already, complete the CLA.
Contributor License Agreement (CLA)
In order to accept your pull request, we need you to submit a CLA. You only need to do this once, so if you’ve done this for another Facebook open source project, you’re good to go. If you are submitting a pull request for the first time, just let us know that you have completed the CLA and we can cross-check with your GitHub username.

### Complete your CLA here.

Contribution Prerequisites
You have Node installed at LTS and Yarn at v1.2.0+.
You have JDK installed.
You have gcc installed or are comfortable installing a compiler if needed. Some of our dependencies may require a compilation step. On OS X, the Xcode Command Line Tools will cover this. On Ubuntu, apt-get install build-essential will install the required packages. Similar commands should work on other Linux distros. Windows will require some additional steps, see the node-gyp installation instructions for details.
You are familiar with Git.
Development Workflow

We recommend running yarn test (or its variations above) to make sure you don’t introduce any regressions as you work on your change. However, it can be handy to try your build of ProGrowing in a real project.

First, run yarn build. This will produce pre-built bundles in build folder, as well as prepare npm packages inside build/packages.

We still require that your pull request contains unit tests for any new functionality. This way we can ensure that we don’t break your code in the future.

### Style Guide
We use an automatic code formatter called Prettier. Run yarn prettier after making any changes to the code.

### Request for Comments (RFC)
Many changes, including bug fixes and documentation improvements can be implemented and reviewed via the normal GitHub pull request workflow.

Some changes though are “substantial”, and we ask that these be put through a bit of a design process and produce a consensus among the ProGrowing core team.

The “RFC” (request for comments) process is intended to provide a consistent and controlled path for new features to enter the project. You can contribute by visiting the rfcs repository.

## License
By contributing to ProGrowing, you agree that your contributions will be licensed under its MIT license.

