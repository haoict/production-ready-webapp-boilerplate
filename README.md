# production-ready-webapp-boilerplate

[![CircleCI](https://circleci.com/gh/haoict/production-ready-webapp-boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/haoict/production-ready-webapp-boilerplate/tree/master)
[![CodeFactor](https://www.codefactor.io/repository/github/haoict/production-ready-webapp-boilerplate/badge)](https://www.codefactor.io/repository/github/haoict/production-ready-webapp-boilerplate)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/haoict/production-ready-webapp-boilerplate/blob/master/LICENSE)
[![Greenkeeper badge](https://badges.greenkeeper.io/haoict/production-ready-webapp-boilerplate.svg)](https://greenkeeper.io/)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- vscode-markdown-toc -->
* [About](#About)
* [Motivation](#Motivation)
* [Features](#Features)
* [Setup & Documentation](#SetupDocumentation)
* [Deploying on Production](#DeployingonProduction)
	* [Directly run](#Directlyrun)
	* [Docker support](#Dockersupport)
* [Advance](#Advance)
	* [Storybook](#Storybook)
	* [VR-testing (visual regression testing)](#VR-testingvisualregressiontesting)
		* [Debug visual regression test](#Debugvisualregressiontest)
* [License](#License)
* [Contributors ✨](#Contributors)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='About'></a>About

🚀 A well-structured production ready modern web application boilerplate (Single Page Application with Server Side Render to boost SEO). With Next.js, React, Redux, Express.js, Less, Axios, Request Caching, EnvConfig, Storybook and more 🚀

Demo: https://pokemon.nless.pro

## <a name='Motivation'></a>Motivation

When Create React App first launched in July of 2016, it was considered the best way for beginners to get started with React.
I find that it is too restrictive, and I find the ejection process to be painful, with resulting configuration being far to complex to easily tinker.
Also, Create React App and almost boilerplate you find in Github is just Client-side rendering.

Next.js is a minimalistic React framework that runs on the browser and the server. It offers developers an easy way to get started, and as it uses React.js for templating, it's also a straightforward way for developers with React experience to get productive quickly.

The advantage of this approach is to be able to create rich user experiences in a uniform way, without compromising SEO (Search Engine Optimisation) factors that are key to good ranking on Google and other search engines.

This boilerplate makes it easier to get up and running with a well-structured Next.js.

Happy coding!

## <a name='Features'></a>Features

This project provides a lot of features out of the box. Here's an overview of the included components and tools.

- **Next.js** - Minimalistic framework for single page with server-rendered React applications.
- **React** - Awesom library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
- **Redux** - A predictable state container for JavaScript apps.
- **Express.js**- A minimal and flexible Node.js web application framework that handles server-side rendering and integrates with Next.js.
- **Less** - CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.
- **Axios** - Promise based HTTP client. Integrated with axios-cache-adapter to cache the reponse to improve performance
- **Docker** - A tool designed to make it easier to create, deploy, and run applications by using containers.
- **Jest** - Javascript testing framework , created by developers who created React.
- **Storybook** - An open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient
- **Babel** - The compiler for next generation JavaScript.
- **ESLint** - The pluggable linting utility.
- **Bundler Analyzer** - Visualize the size of webpack output files with an interactive zoomable treemap.
- **Jest** - Javascript testing framework , created by developers who created React.
- **dotenv** - Expose environment variables to the runtime config

<br/>

## <a name='SetupDocumentation'></a>Setup & Documentation

1. Clone the repository:

```
git clone https://github.com/haoict/production-ready-webapp-boilerplate.git
```

2. Checkout master branch for complete simplest working version:

```
git checkout master
```

3. Install the dependencies:

```
yarn install (or npm install if you prefer npm, remember to remove yarn.lock first)
```

4. Start the development server:

```
yarn dev
```

Launch http://localhost:3001

(Change .env file for customize host and port)

## <a name='DeployingonProduction'></a>Deploying on Production

### <a name='Directlyrun'></a>Directly run

1. Build with production optimization

```
yarn build
```

2. Just Start

```
yarn start
```

### <a name='Dockersupport'></a>Docker support

You can build and run production with docker

1. Build docker image

```
docker build . -t production-ready-webapp-boilerplate
```

2. Run it with your prefer port

```
docker run -d -p 3001:3001 production-ready-webapp-boilerplate
```

## <a name='Advance'></a>Advance

### <a name='Storybook'></a>Storybook

2. Checkout develop branch for latest, full features code:

```
git checkout develop
```

1. Start the storybook:

```
yarn storybook
```

Launch http://localhost:9090

### <a name='VR-testingvisualregressiontesting'></a>VR-testing (visual regression testing)

0. Start storybook

Follow above step

1. Start Selenium of web drivers

```bash
docker run --name storybook-wdio-chrome -d -p 4444:4444 -p 5900:5900 selenium/standalone-chrome-debug
```

if error `Bind for 0.0.0.0:5900 failed: port is already allocated` comes, you can change that port to other number, like 5901 (`docker run --name storybook-wdio-chrome -d -p 4444:4444 -p 5901:5900 selenium/standalone-chrome-debug`)

2. Run test

**Desktop**

```bash
yarn vr-test:chrome src/components/<component-name>/stories/vr-test/index.spec.ts
```

**Smartphone**

```bash
yarn vr-test:chrome:sp src/components/<component-name>/stories/vr-test/index.spec.ts
```

**Both Desktop and Smartphone**

```bash
yarn vr-test src/components/<component-name>/stories/vr-test/index.spec.ts
```

**Run all tests**

```bash
yarn vr-test
```

#### <a name='Debugvisualregressiontest'></a>Debug visual regression test

##### Mac

**Screen Sharing**

To debug visual regression testing

1. Open the `Screen Sharing`
```bash
Hostname: YOUR_MACHINE_IP:5900 (normally 127.0.0.1)
Password: secret
```
2. Run test
3. Navigate to `Screen Sharing` to see the step by step for running the test


Big thank to [davidnguyen179](https://github.com/davidnguyen179), you can check his work about React + Storybook + Visual Regression Testing at: [storybook-wdio](https://github.com/davidnguyen179/storybook-wdio)

## <a name='License'></a>License

Licensed under the MIT License, Copyright © 2020-present Hao Nguyen <hao.ict56@gmail.com>

## <a name='Contributors'></a>Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://haoict.github.io"><img src="https://avatars1.githubusercontent.com/u/7247750?v=4" width="100px;" alt=""/><br /><sub><b>Nguyen Van Hao</b></sub></a><br /><a href="https://github.com/haoict/production-ready-webapp-boilerplate/commits?author=haoict" title="Documentation">📖</a> <a href="https://github.com/haoict/production-ready-webapp-boilerplate/commits?author=haoict" title="Code">💻</a> <a href="https://github.com/haoict/production-ready-webapp-boilerplate/issues?q=author%3Ahaoict" title="Bug reports">🐛</a> <a href="#ideas-haoict" title="Ideas, Planning, & Feedback">🤔</a> <a href="#design-haoict" title="Design">🎨</a> <a href="#translation-haoict" title="Translation">🌍</a> <a href="https://github.com/haoict/production-ready-webapp-boilerplate/pulls?q=is%3Apr+reviewed-by%3Ahaoict" title="Reviewed Pull Requests">👀</a> <a href="#plugin-haoict" title="Plugin/utility libraries">🔌</a> <a href="#infra-haoict" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://www.dzungnguyen.dev"><img src="https://avatars3.githubusercontent.com/u/6290720?v=4" width="100px;" alt=""/><br /><sub><b>David Nguyen</b></sub></a><br /><a href="https://github.com/haoict/production-ready-webapp-boilerplate/commits?author=davidnguyen179" title="Code">💻</a> <a href="https://github.com/haoict/production-ready-webapp-boilerplate/issues?q=author%3Adavidnguyen179" title="Bug reports">🐛</a> <a href="#ideas-davidnguyen179" title="Ideas, Planning, & Feedback">🤔</a> <a href="#plugin-davidnguyen179" title="Plugin/utility libraries">🔌</a></td>
    <td align="center"><a href="https://github.com/duongkimngoc"><img src="https://avatars2.githubusercontent.com/u/6060927?v=4" width="100px;" alt=""/><br /><sub><b>NGOC Duong Kim</b></sub></a><br /><a href="https://github.com/haoict/production-ready-webapp-boilerplate/commits?author=duongkimngoc" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/3BenLee"><img src="https://avatars2.githubusercontent.com/u/35267414?v=4" width="100px;" alt=""/><br /><sub><b>Ben Lee</b></sub></a><br /><a href="https://github.com/haoict/production-ready-webapp-boilerplate/commits?author=3BenLee" title="Code">💻</a> <a href="#plugin-3BenLee" title="Plugin/utility libraries">🔌</a></td>
    <td align="center"><a href="https://github.com/pranabmitra"><img src="https://avatars2.githubusercontent.com/u/1366712?v=4" width="100px;" alt=""/><br /><sub><b>Pranab Mitra</b></sub></a><br /><a href="https://github.com/haoict/production-ready-webapp-boilerplate/commits?author=pranabmitra" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Nhomltm03"><img src="https://avatars0.githubusercontent.com/u/45044050?v=4" width="100px;" alt=""/><br /><sub><b>NguyenThanhDat</b></sub></a><br /><a href="https://github.com/haoict/production-ready-webapp-boilerplate/commits?author=Nhomltm03" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
