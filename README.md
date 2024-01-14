# Redux with Redux Toolkit

Global state management library; allows you to have global state that is accessible by all components in your application.

Mostly used with React and React Native but has bindings for Angular and Vue.

## Docs

<https://redux-toolkit.js.org>

## Installation

```bash
npm install @reduxjs/toolkit

```

```bash
npm install react-redux
```

## Using TypeScript with React

<https://create-react-app.dev/docs/adding-typescript/>

### New Project

```bash
npx create-react-app my-app --template typescript

```

* or

```bash
yarn create react-app my-app --template typescript
```

### Existing Project

* first install it

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

** or

```bash
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

* Next, rename any file to be a TypeScript file (e.g. src/index.js to src/index.tsx) and restart your development server!

Type errors will show up in the same console as the build one. You'll have to fix these type errors before you continue development or build your project.

## Key Concepts

### Store

* Made up of multiple 'slices' of the state that all together form the cake that is the global state

* Each slice defines a certain domain of the application e.g. UserState

### Actions

* Used to tell redux what to do with the state

* Has a type and an optonal Payload

* May be sychronous(go in reducers key) or asynchronous(go in extraReducers)

### Reducers

* Based on the type and payload, if available, will carry out the action.

* Never directly mutate the state in the store; make a copy of the state and change that copy then overwrite the state all together keeping what hasn't changed intact.
