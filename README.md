# npm package template

Template repository for npm package

- typescript
- 👁️public npm package
- auto publish with github workflow
- rollup
- (optional) for react

# setup

- exec `npm init`
- set `NPM_TOKEN` in your github repository (in Github, `Settings/Secrets/Actions/New repository secret`)
- rewrite `LibraryName` to your library-name in `rollup.config.js`.

## Optional

- if you develop react library, please uncomment some `external: ['react']`,`globals: { react: 'react' }` in `rollup.config.js`
- replace `LICENSE`

# how to publish

1. click `Create a new release`
1. click `Choose a tag` and create new tag for your release
1. write `Release title`
1. write `Describe this release`
1. click `Publish release`
1. 🚀 auto start workflow and publish!!
