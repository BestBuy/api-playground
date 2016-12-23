# Contributing Guidelines

Contributions welcome!

**Before spending lots of time on something, ask for feedback on your idea first!**

Please search issues and pull requests before adding something new to avoid duplicating efforts and conversations.

In addition to improving the project by refactoring code and implementing relevant features, this project welcomes the following types of contributions:

- **Ideas**: participate in an issue thread or start your own to have your voice heard.
- **Writing**: contribute your expertise in an area by helping expand the included content.
- **Copy editing**: fix typos, clarify language, and generally improve the quality of the content.
- **Formatting**: help keep content easy to read with consistent formatting.

## Installing

Fork and clone the repo, then `npm install` to install all dependencies.

## Testing

Tests are run with `npm test`. Unless you're creating a failing test to increase test coverage or show a problem, please make sure all tests are passing before submitting a pull request.

## Code Style

[![semistandard][semistandard-image]][semistandard-url]

This repository uses [`semistandard`][semistandard-url] to maintain code style and consistency and avoid style arguments. `npm test` runs `semistandard` so you don't have to!

[semistandard-image]: https://cdn.rawgit.com/Flet/semistandard/master/badge.svg
[semistandard-url]: https://github.com/Flet/semistandard
[semisemistandard-image]: https://cdn.rawgit.com/Flet/semisemistandard/master/badge.svg
[semisemistandard-url]: https://github.com/Flet/semisemistandard

---

# Collaborating Guidelines

**This is an OPEN Open Source Project.**

## What?

Individuals making significant and valuable contributions are given commit access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

## Rules

There are a few basic ground rules for collaborators:

1. **No `--force` pushes** or modifying the Git history in any way.
1. **Non-master branches** ought to be used for ongoing work.
1. **External API changes and significant modifications** ought to be subject to an **internal pull request** to solicit feedback from other collaborators.
1. Internal pull requests to solicit feedback are *encouraged* for any other non-trivial contribution but left to the discretion of the contributor.
1. Contributors should attempt to adhere to the prevailing code style.

## Releases

Declaring formal releases remains the prerogative of the project maintainer. Please avoid incrementing the version in package.json in pull requests.

The person who merged the PR or another maintainer should follow these steps to increment the version:

1. Ensure all reviewed/approved PRs are merged to `master` (this can be one or many PRs)
1. pull down master locally.
1. run `npm version patch|minor|major` (following the guidelines of [Semantic Versioning](http://semver.org/)).
1. push the tag to Github: `git push --tags`

Note that we do not currently publish to `npm`.

## Changes to this arrangement

This is an experiment and feedback is welcome! This document may also be subject to pull requests or changes by collaborators where you believe you have something valuable to add or change.
