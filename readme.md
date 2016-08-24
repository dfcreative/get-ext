# get-ext [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Get extension from a path/filename string. Because `path` is too massive, and other extname-like libs are too big or wrong.

[![npm install get-ext](https://nodei.co/npm/get-ext.png?mini=true)](https://npmjs.org/package/get-ext/)

```js
const extname = require('get-ext');

let ext = extname('./my/path/to.my/file.svg');

//ext === '.svg'
```