<h1 align="center">
    <img alt="Lumen" title="Lumen" src="https://assets.gitlab-static.net/uploads/-/system/project/avatar/13083/logo-extra-whitespace.png?width=140" width="140"> </br>
    Frontend Technical Assessment
</h1>

<h4 align="center">
  An onboarding buddy generator to help new GitLab team members ramp up quickly.
</h4>

## Quick Start

#### System Requirements

- NodeJS >= 16.10.0
- Yarn

#### Start Developing

Clone this project and run

```sh
yarn install

# Start webpack server -> this allows hot module reloading
yarn dev
```

This project is now running at [`http://localhost:8128`](http://localhost:8128)!

#### Run the tests

We use [jest](https://jestjs.io/) as a test runner.

To run the tests, simply run:

```sh
# Run the tests once
yarn test
# Run the tests continuously
yarn test:watch
```

#### Architecture

At GitLab, we use Ruby on Rails on the backend, `SASS` for our CSS, and `webpack` to break out our JavaScript modules
into smaller chunks. We use HAML templating for HTML, and use that as an entry point to mount our Vue applications.

**This application diverges from our setup to make it easier to setup the development env**.
