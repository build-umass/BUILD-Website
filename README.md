# Official BUILD UMass Website

This is the GitHub repository for the official BUILD UMass Website. It contains the current and all previous versions of the website and its assets. The development of the current version is done using [Next.js](https://nextjs.org/) and hosted using [SquareSpace](https://squarespace.com).

## Links

- Live- [buildumass.com](buildumass.com)

## Quick Start

| Title      | Command             | Description                                   |
| ---------- | ------------------- | --------------------------------------------- |
| Install    | `yarn full-install` | Installs all the dependencies for the project |
| Dev Server | `yarn dev`          | Starts website on a local dev server          |
| Build      | `yarn build`        | Builds the website into static content        |

## Instructions for BUILD Website Team

If you are an authorized developer of this website, please clone (git clone git@github.com:build-umass/BUILD-Website.git) this repository to your local computer. Deployments of live version of the website are from the "master" branch. To implement new features or make changes, please make a new branch (git checkout -b newBranchName) and implement changes there. Once complete, stage your local changes, commit locally, and push remotely (git push origin newBranchName). You may then navigate to the BUILD UMass Website GitHub page and initiate a "pull request." Please have the team review your code before approving the "pull request," which effectively merges your code into "master."

## Note on Applications Page (apply.js)

In src/pages/apply.js, change APPLICATIONS_OPEN (true or false) for the apply.js page depending on if applications are open or not.
