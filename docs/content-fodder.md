# Content Fodder

Lightweight headless CMS for modern sites. Adapter should work with any modern framework as long as you use the `@rhyme/content-fodder` package.

The Content Fodder API is used to create and manage content. This can be used directly instead of the adapter if you so wish.

Auth should be managed by a provider, we should allow for Google & github auth. Once authenticated, we will call the apis `/login` endpoint to get a token and user.

## Content Fodder Adapter

Adapter should let user create a `.fodderrc.js` file, run `bunx content-fodder connect` to connect to their Content Fodder site and then query data from their Content Fodder site directly.

`bun add @rhyme/content-fodder`

`npm i @rhyme/content-fodder`

`yarn add @rhyme/content-fodder`

`pnpm add @rhyme/content-fodder`

---

`.fodderrc.js`

Create a `fodderrc.js` file that exports an object with the following properties:

```js
module.exports = {
  host: 'https://api.contentfodder.com',
  siteId: '[YOUR_SITE_ID]',
  authToken: '[YOUR_AUTH_TOKEN]
}
```

---

`content-fodder connect`

Run 

`bunx content-fodder connect` 

`npx content-fodder connect`

to connect your project to Content Fodder. 

This will allow you to query data directly from your Content Fodder site.

## Content Fodder API

Content Fodder API is used by the adapter, but can be used by itself if you wish to not use the adapter. If you don't want to use the adapter you don't need to install `@rhyme/content-fodder`.

The API allows you to read and write data to your Content Fodder site. Most of the setup will be handled in the Content Fodder admin dashboard, but for developers the API can be used freely. Although, mainly for reading data.

## Content Fodder Admin

The Admin Dashboard is where you can create and manage your content. You can also create and manage your site settings and users.

---