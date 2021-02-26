<h1>Material Icons List</h1>

- [About](#about)
- [Features And Props](#features-and-props)
- [Installation](#installation)
- [Usage](#usage)
  - [Get All](#get-all)
  - [Get Icons Count/Length](#get-icons-countlength)
  - [Get Icons List (Names Only)](#get-icons-list-names-only)
  - [Get Icons List By Category (Names Only)](#get-icons-list-by-category-names-only)
  - [Get Icons List By Tag (Names Only)](#get-icons-list-by-tag-names-only)
  - [Get Icons List By Popularity (Names Only)](#get-icons-list-by-popularity-names-only)
- [Changelog](#changelog)
- [License](#license)

## About

A simple script to get all icons name from [material-icons official website](https://material.io/resources/icons/)

## Features And Props

- iconsList
- iconsLength
- iconsListByCategory()
- iconsListByTag()
- iconsListByPopularity()

**Note**: learm how to use it in [Usage](#usage)

## Installation

**Note**: You can use _yarn_ or _npm_ as a package manager, here i'm using _yarn_

```bash
yarn add material-icons-list
```

## Usage

### Get All

```js
// the whole list without any filtering
const { all } = require("material-icons-list");
console.log(all); // array of objects contains the icons informations
```

### Get Icons Count/Length

```js
// the icons count
const { iconsLength } = require("material-icons-list");
console.log(iconsLength); // icons count
```

### Get Icons List (Names Only)

```js
// the full list (names only)
const { iconsList } = require("material-icons-list");
console.log(iconsList); // get array of strings contains icons name
```

### Get Icons List By Category (Names Only)

```js
// the full list by category (names only)
const { iconsListByCategory } = require("material-icons-list");
console.log(iconsListByCategory("home")); // get all icons under 'home' category
```

### Get Icons List By Tag (Names Only)

```js
// the full list by tags (names only)
const { iconsListByTag } = require("material-icons-list");
console.log(iconsListByTag("view")); // get all icons under 'view' tag
```

### Get Icons List By Popularity (Names Only)

```js
// the full list by popularity (names only)
const { iconsListByPopularity } = require("material-icons-list");
console.log(iconsListByPopularity()); // get all icons sorted by the popularity prop
console.log(iconsListByPopularity(10)); // get 10 of icons sorted by the popularity prop
```

## Changelog

[read from here](./CHANGELOG)

## License

[MIT](./LICENSE)
