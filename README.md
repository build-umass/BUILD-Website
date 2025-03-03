# Official BUILD UMass Website

This is the GitHub repository for the official BUILD UMass Website. It contains the current and all previous versions of the website and its assets. The development of the current version is done using [Next.js](https://nextjs.org/).

## Links

- Live- [buildumass.com](buildumass.com)
- (deprecated) Dev- [build-website-test.herokuapp.com](https://build-website-test.herokuapp.com/)

## Quick Start

| Title             | Command             | Description                                               |
| ----------------- | ------------------- | --------------------------------------------------------- |
| Install           | `yarn full-install` | Installs all the dependencies for the project             |
| Dev Server        | `yarn dev`          | Starts the backend and frontend on a dev server           |
| Build             | `yarn build`        | Builds the website into static content                    |
| Firebase Emulator | `yarn serve`        | Starts running the website locally on a firebase emulator |

## Applications (IMPORTANT)

In src/pages/apply.js, there's a constant named APPLICATIONS_OPEN. As of right now, we gotta remember to just manually change it to true and false based on if the applications are open or not

## Note

Deployments of the live and dev version of the website are done automatically from the `master` and `dev` branches respectively. To add features or make edits, create a new branch based on `dev` and once you're done working merge it into `dev`. Once a significant amount of changes have been made, `dev` will be merged into `master`. Please avoid making changes to `master` directly.
