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

# panda.css

```sh
$ pnpm install -D @pandacss/dev
$ pnpm panda init --postcss
```

```json@package.json
{
  "scripts":{
+    "prepare": "panda codegen",
  }
}
```

```ts
-  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
+  include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

```

```src/index.css
@layer reset, base, tokens, recipes, utilities;
```

# update the postcss config

```postcss.config.js
module.exports = {
-  plugins: { '@pandacss/dev/postcss': {}, },
+  plugins: [require("@pandacss/dev/postcss")()],
}
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