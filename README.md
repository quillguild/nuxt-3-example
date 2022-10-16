# Nuxt 3 Example
The basic example of the application based on Nuxt 3, Tailwind CSS, i18n with multi-domains, and persistent state.

## Installation

To test Nuxt 3 by using this example project, follow the steps:
```bash
$ git clone git@github.com:quillguild/nuxt-3-example.git
$ cd nuxt-3-example
$ yarn install
```

Add these two entries to your file `/etc/hosts` (Linux/OS X):

```bash
127.0.0.1	dev.example.pl
127.0.0.1	dev.example.com
```

## Run a demo
To run the website in the development mode, run the command:

```bash
yarn dev
```

And open two pages:
- In English: \
http://dev.example.com:3000/
- In Polish:\
http://dev.example.pl:3000/


## Features

This project has a couple of useful features.

### i18n based on multiple domains

Check the files: `.env`:

```
DOMAIN_EN: dev.example.com:3000
DOMAIN_PL: dev.example.pl:3000
```

The file `nuxt.config.ts`:

```json
publicRuntimeConfig: {
    DOMAIN_EN: process.env.DOMAIN_EN,
    DOMAIN_PL: process.env.DOMAIN_PL
}
```

And the file `app.vue` to check how the i18n is managed:

```js
import { useI18n } from "vue-i18n";

const i18n = useI18n();

if (domain.value === config.DOMAIN_PL) {
    i18n.locale.value = 'pl_PL';
} else {
    i18n.locale.value = 'en_US';
}
```

### Persistent state

It's helpful if you want to keep users logged in even if they open a new tab or refresh the page in the browser. Thanks to the plugin `pinia-plugin-persistedstate-2` it's easily done.

## Working website

This example was used to create a website The Quill Guild:
- https://www.quillguild.com/

And it's Polish version: https://www.gildiapiora.pl/