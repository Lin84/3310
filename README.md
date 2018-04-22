# T9 generator
Simple all combinations generator app created by using React, Redux, Express and tested by Jest and Enzyme

## Getting started
### Preparations
1. This development stack uses [Node](https://nodejs.org), so make sure you have it installed.
2. Install [Webpack](https://webpack.js.org/) globally:

```bash
npm install -g webpack

or

yarn global add webpack
```
### Setup
1. To clone the repository run in terminal:

```sh
git clone https://git@github.com:Lin84/3310.git ./PROJECT_NAME
```

2. Under the root of your `PROJECT_NAME` folder install package dependencies by running in terminal:

 ```sh
npm install

or

yarn install
```

3. **Configure the project**. Do not forget to change the respective keys in `package.json` according to your project’s info, and setup **a unique listening port** in `./webpack.config.js`.

## Workflow
### Development
To start your development process, in the terminal run:

```sh
npm run dev

or

yarn dev
```

### Remove built targets
If you want to revert back to a fresh state without built files, in the terminal run:

```sh
npm run clean

or

yarn clean
```

### Production build
To prepare production-ready files, grab built assets from `dist` folder after running in the terminal:

```sh
npm run build

or

yarn build
```
## Testing with Jest
### Run basic test
in the terminal run:

```sh
npm run test

or

yarn test
```

### Run test in watch mode
in the terminal run:

```sh
npm run test:watch

or

yarn test:watch
```
### Run test in coverage mode
in the terminal run:

```sh
npm run test:coverage

or

yarn test:coverage
```
### Run test in watch mode and coverage mode
in the terminal run:

```sh
npm run test:watch:coverage

or

yarn test:watch:coverage
```
