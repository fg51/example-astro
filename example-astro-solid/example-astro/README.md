# create astro

```sh
$ pnpm create astro@latest
```

# solid.js

```sh
$ pnpm astro add solid
```

## useage

```html
<Counter client:only="solid-js" />
```

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```