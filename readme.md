# node-django-urlify 

> Django's urlify.js for the node environment.

[![Build Status](https://travis-ci.org/radiovisual/node-django-urlify.svg?branch=master)](https://travis-ci.org/radiovisual/node-django-urlify) [![Coverage Status](https://coveralls.io/repos/github/radiovisual/node-django-urlify/badge.svg?branch=master)](https://coveralls.io/github/radiovisual/node-django-urlify?branch=master)

This module is a direct translation of [Django's urlify.js](https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js), 
allowing you to urlify (slugify) strings just like Django, only in the node environment. 
 
## Install

```
$ npm install --save node-django-urlify
```


## Usage

```js
const urlify = require('node-django-urlify');

urlify('Étonnamment Beau Générateur de Limace');
//=> 'etonnamment-beau-generateur-de-limace'
```


## API

### `urlify(string, num_chars, allowUnicode)`

#### input

Type: `string`

The string of characters you want to urlify/slugify.

#### num_chars

Type: `number`

The number of characters.

#### allowUnicode

Type: `boolean`<br>
Default: `false`

Allow or disable unicode support.

## Related

- [python-urlify](https://github.com/dreikanter/python-urlify) Django's urlify.js ported to Python

## Licenses

- [node-django-urlify](https://github.com/radiovisual/node-django-urlify) MIT © [Michael Wuergler](http://numetriclabs.com)
- [Django License](https://github.com/django/django/blob/master/LICENSE) Copyright (c) Django Software Foundation and individual contributors.


