<<<<<<< HEAD
Airline Interface Prototype
=====================

A prototype for an Airline ticket list interface, using React, ES2015, ESLint and other stuff.

### Usage

```
npm install
npm start
open http://localhost:3000
```

## Code quality

### Linting

This project includes React-friendly ESLint configuration.

```
npm run lint
```

### Pre-Commit
A pre-commit hook checking for linting errors should have been created when running `npm install` (thanks to Max's [`captain-git-hook`](https://github.com/maxhoffmann/captain-git-hook)). If you notice the hook isn't in place, you can run `npm i captain-git-hook` and see if there's any errors being thrown.
to check the currently staged files, you can run:
```
npm run pre-commit
```

## Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
