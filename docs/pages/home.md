[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![npm version](https://img.shields.io/npm/v/react-ptr.svg)](https://www.npmjs.org/package/react-ptr)

One mobile pull to refresh React component for all. Plug and play, highly customizable with many loaders provided!

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

