# Security Web Project

> An Angular 2 web project created by [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter)

> [README](https://github.com/AngularClass/angular2-webpack-starter) of Angular2 Webpack Starter

### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**
> Clone/Download the repo then edit `app.component.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone https://github.com/meloncocoo/security

# change directory to our repo
cd angular2-webpack-starter

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Frequently asked questions](#frequently-asked-questions)
* [Appendix](#appendix)

## File Structure
Reference from: [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter)
```
angular2-webpack-starter/
 ├──config/                        * our configuration
 |   ├──helpers.js                 * helper functions for our configuration files
 |   ├──spec-bundle.js             * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js              * karma config for our unit tests
 |   ├──protractor.conf.js         * protractor config for our end-to-end tests
 │   ├──webpack.dev.js             * our development webpack config
 │   ├──webpack.prod.js            * our production webpack config
 │   └──webpack.test.js            * our testing webpack config
 │
 ├──src/                           * our source files that will be compiled to javascript
 |   ├──main.browser.ts            * our entry file for our browser environment
 │   │
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts               * our polyfills file
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 │   │   └──app.component.ts       * a simple version of our App component components
 │   │
 │   └──assets/                    * static assets are served here
 │       ├──icon/                  * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js      * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt             * for search engines to crawl your website
 │       └──humans.txt             * for humans to know who the developers are
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage it's dependencies
 └──webpack.config.js              * webpack main configuration file

```

# Frequently asked questions
* How to use Bootstrap 3 and Sass and ng2 bootstrap?
  * See also: [wiki](https://github.com/AngularClass/angular2-webpack-starter/wiki/How-to-use-Bootstrap-3-and-Sass-and-ng2-bootstrap) of AngularClass.
  * If Error "...node_modules\url\url.js' is not a loader (must have normal or pitch function)":
    * loader: `'url?limit=10000'` => loader: `'url-loader?limit=10000'` in `webpack.common.js`
## Appendix
* Reference: 
  * [ThreatBook](https://x.threatbook.cn/)
  * [安全联盟](jubao.anquan.org)
  * [Singapore Exchange Ltd | SGX](www.sgx.com)