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

## ark-ui, park-ui

```sh
$ pnpm install @ark-ui/solid
$ pnpm install -D @ark-ui/panda-preset
$ pnpm @park-ui/cli components add button
$ pnpm @park-ui/cli components add slider  # if error occured.
```

```sh
$ pnpm prepare
```

# storybook with solid.js, panda.css

## for pandacss

```sh
$ pnpm dlx storybook@latest init
```

@panda.config.ts

```typescript
include: ["./stories/**/*.{js,jsx,ts,tsx}"];
```

@.storybook/preview.ts

```typescript
import "../src/index.css";
```

## for solid

```sh
$ pnpm i --save-dev @storybook/builder-vite
```

at /storybook/main.ts

```typescript
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
+  core: {
+    builder: "@storybook/builder-vite",
+  },
  framework: {
    name: "storybook-solidjs-vite",
    options: {},
  },
};
export default config;
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