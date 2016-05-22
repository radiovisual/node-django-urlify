# node-django-urlify 

> Django's urlify.js for the node environment.

[![Build Status](https://travis-ci.org/radiovisual/node-django-urlify.svg?branch=master)](https://travis-ci.org/radiovisual/node-django-urlify) [![Coverage Status](https://coveralls.io/repos/github/radiovisual/node-django-urlify/badge.svg?branch=master)](https://coveralls.io/github/radiovisual/node-django-urlify?branch=master)

This module is a port of [Django's urlify.js](https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js), for use in the node environment. This module will attempt to normalize a string of non url-friendly characters into a url-friendly slug.
	
For example: `ÂËÎØŰý αβ!` → `'aeiouy-ab'`

This module will attempt to recognize and normalize any non url-friendly characters from the following languages: Latin, Greek, Turkish, Romanian, Russian, Ukrainian, Czech, Polish, Latvian, Arabic, Lithuanian, Serbian and Azerbaijani.
	
## Install

```
$ npm install --save node-django-urlify
```


## Usage

```js
const urlify = require('node-django-urlify');

urlify('Étonnamment Beau Générateur de Limace');
//=> 'etonnamment-beau-generateur-limace'
```


## API

### `urlify(string, numChars, allowUnicode)`

#### input

Type: `string`

The string of characters you want to urlify/slugify.

#### numChars

Type: `number`<br/>
Default: *no truncating by default*

Set this number to truncate the return string to a specific length.

```js
urlify('Hello World!', 7)
//=> 'hello-w'
```

#### allowUnicode

Type: `boolean`<br>
Default: `false`

You can set the allowUnicode parameter to `true`, if you want to allow Unicode characters:

```js
urlify('你好 World', -1, true)
//=> '你好-world'
```

## Related

- [python-urlify](https://github.com/dreikanter/python-urlify) Django's urlify.js ported to Python

## Licenses

- [node-django-urlify](https://github.com/radiovisual/node-django-urlify) MIT © [Michael Wuergler](http://numetriclabs.com)
- [Django License](https://github.com/django/django/blob/master/LICENSE) Copyright (c) Django Software Foundation and individual contributors.


