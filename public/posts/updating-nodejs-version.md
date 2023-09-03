---
id: 10
title: Updating Node.js version
href: /blog
category: [1,3,5,6]
excerpt: Expo is a framework and a platform for universal React applications.
keywords: javascript,testing,js,jest
imgs: [43,43]
date: '2020-03-30'
datetime: null
imageUrl: null
readingTime: 15 min
tags: [1,3,4]
author: [1]
relatedPosts: [1,2,3,4,5]
draft: false
---
### Option 3: Update Node.js with Binary Packages
go to https://nodejs.org/en/ and download the most updated version

follow instructions agree on terms and conditions, ... few second you are sorted.

### Option 2: Update Node.js with NPM (Node Package Manager)
As an alternative, you can use Node’s official package manager to update Node.js. NPM is a tool for installing and managing package dependencies.

If you have Node on your system, you have NPM, as well. With the npm command, you can check running Node.js versions and install the latest release.

By adding the n module, you can interactively manage Node.js versions.

1. First, clear the npm cache:
```bash
$ npm cache clean -f
```
2. Install n, Node’s version manager:

```bash
$ npm install -g n
```
3. With the n module installed, you can use it to:

  Install the latest stable version:

  ```bash
  $ sudo n stable
  ```

Install the latest release:

```
$ sudo n latest
```

Install a specific version..:

```
$ sudo n [version.number]
```
