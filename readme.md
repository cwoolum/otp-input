# OTP Input

This is a Web Component built with StencilJS that allows you to render a nice OTP Input for your users. I built this because a lot of the examples I found either were locked to one framework or only fit specific use cases. THe goal of this component is to work with any Frameworks such as Angular, React, View, or just plain ol' Javascript.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

## Developing

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Using this component

### Node Modules

- Run `npm install @cwoolum/otp-component --save`
- Put a script tag similar to this `<script src='node_modules/@cwoolum/otp-component/dist/otp-component.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc
