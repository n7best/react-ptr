# React PTR - Pull To Refresh

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![npm version](https://img.shields.io/npm/v/react-ptr.svg)](https://www.npmjs.org/package/react-ptr)

One mobile pull to refresh React component for all. Plug and play, highly customizable with many loaders provided!

![default](https://raw.githubusercontent.com/n7best/react-ptr/gh-pages/default.gif)
![material](https://raw.githubusercontent.com/n7best/react-ptr/gh-pages/material.gif)
![modern](https://raw.githubusercontent.com/n7best/react-ptr/gh-pages/modern.gif)
![rocket](https://raw.githubusercontent.com/n7best/react-ptr/gh-pages/rocket.gif)

### Installation

With NPM

```
npm i react-ptr --save-dev
```

Import to your app

```js
import { PullToRefresh, Loaders } from 'react-ptr';
import 'react-ptr/style.min.css';
```

Use with react

```js
const App = () => (
    <PullToRefresh loaders={Loaders.Material}>
        <p> Your content here ... </p>
    </PullToRefresh>
)
```


### Properties

* `height : string` height for the container, use string like '10px', default for '100%'

* `onRefresh : func` callback when refresh is request, pass resolve function as first parameters, default 2000ms auto resolve

* `loader : shape` (optional) loader configuration shape consists of following properties
    * `mode : string` (optional) the method to display the loader container, chocie of using `marginTop` or `absolute`

    * `loaderHeight : number` (optional) the height of loader in px, applied to the container when user pull the container

    * `loaderLoadingHeight : number` (optional) the height of loader in px while in its loading state, default to equal to loaderHeight

    * `loaderDefaultIcon : func` (optional) a function that return an react element, pass in progress(1-100) as it's first parameter

    * `loaderLoadingIcon : element` (optional) a react element that display while loader in it's loading state