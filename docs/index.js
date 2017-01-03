/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';
import TouchEmulator from 'hammer-touchemulator';
import logoSrc from './logo.png';

import 'purecss/build/pure.css';
import './main.css';
import '../style.css';

import { Loaders, PullToRefresh } from '../src/index';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = { PullToRefresh, Loaders };
const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef
const pages = [
  {
    path: '/',
    title: 'Home',
    component: require('./pages/home.md')
  },
  {
    path: '/api',
    title: 'Api',
    component: require('./pages/api.md')
  },
  {
    path: '/demo',
    title: 'Demo',
    component: require('./pages/demo.md')
  }
];

TouchEmulator()

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href={`https://github.com/${project}`}
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      logoSrc={logoSrc}
      imports={documentationImports}
      pages={pages}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        react: props => <ReactSpecimen {...props} />,
      }}
      title={title}
    />
  </div>,
  document.getElementById('app')
);
