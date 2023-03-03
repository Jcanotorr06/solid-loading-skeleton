![solidjs card](https://assets.solidjs.com/banner?type=solid-loading-skeleton&background=tiles&project=%20)

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
![NPM](https://img.shields.io/npm/l/solid-loading-skeleton?style=for-the-badge)
![package bundle size](https://img.shields.io/bundlephobia/minzip/solid-loading-skeleton?label=Size&style=for-the-badge)
![package version](https://img.shields.io/npm/v/solid-loading-skeleton?label=version&style=for-the-badge)
![npm downloads](https://img.shields.io/npm/dw/solid-loading-skeleton?style=for-the-badge)

Light and customizable Solid component to create skeleton screens that automatically adapt to your app!

## Quick start

Install it:

```bash
npm i solid-loading-skeleton
# or
yarn add solid-loading-skeleton
# or
pnpm add solid-loading-skeleton
```

## Usage

```tsx
import Skeleton from "solid-loading-skeleton"
import "solid-loading-skeleton/dist/skeleton.css"

const App = () => {
  return (
    <Skeleton /> // A simple, single-line loading skeleton
    <Skeleton count={5} /> // Fie-line loading skeleton
  )
}
```

## Principles

### 1. Adapts to the styles you have defined

The `Skeleton` component should be used directly in your components in place of content that is loading. While other libraries require you to meticulously craft a skeleton screen that matches the font size, line height, and margins of your content, the `Skeleton` component is automatically sized to the correct dimensions.

For example:

```jsx
const BlogPost = (props) => {
  return(
    <div>
      <h1>{props.title || <Skeleton />}</h1>
      {props.body || <Skeleton count={10} />}
    </div>
  )
}
```

...will produce correctly-sized skeletons for the heading and body without any further configuration.

This ensures the loading state remains up-to-date with any changes to your layout or typography.

### 2. Don't make dedicated skeleton screens

Instead, make components with built-in skeleton states.

This approach is beneficial because:

  1. It keeps styles in sync.
  2. Components should represent all possible states — loading included.
  3. It allows for more flexible loading patterns. In the blog post example above, it's possible to have the title load before the body, while having both pieces of content show loading skeletons at the right time.

## Theming

Customize individual skeletons with props, or render a SkeletonTheme to style all skeletons below it in the React hierarchy:

```jsx
import Skeleton, { SkeletonTheme } from "solid-loading-skeleton";

return (
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <p>
      <Skeleton count={3} />
    </p>
  </SkeletonTheme>
);
```

## Props Reference


### `Skeleton` only

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>count?: number</code></td>
            <td>
                The number of lines of skeletons to render. If 
                <code>count</code> is a decimal number like 3.5,
                three full skeletons and one half-width skeleton will be
                rendered.
            </td>
            <td><code>1</code></td>
        </tr>
        <tr>
            <td><code>wrapper?: (props: any) => JSXElement</code></td>
            <td>
                A custom wrapper component that goes around the individual skeleton
                elements.
            </td>
            <td></td>
        </tr>
        <tr>
            <td><code>circle?: boolean</code></td>
            <td>
                Makes the skeleton circular by setting <code>border-radius</code> to
                <code>50%</code>.
            </td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td><code>className?: string</code></td>
            <td>
                A custom class name for the individual skeleton elements which is used
                alongside the default class, <code>solid-loading-skeleton</code>.
            </td>
            <td></td>
        </tr>
        <tr>
            <td><code>containerClassName?: string</code></td>
            <td>
                A custom class name for the <code>&lt;span&gt;</code> that wraps the
                individual skeleton elements.
            </td>
            <td></td>
        </tr>
        <tr>
            <td><code>style?: JSX.CSSProperties</code></td>
            <td>
                This is an escape hatch for advanced use cases and is not the preferred
                way to style the skeleton. Props (e.g. <code>width</code>,
                <code>borderRadius</code>) take priority over this style object.
            </td>
            <td></td>
        </tr>
    </tbody>
</table>

### `Skeleton` and `SkeletonTheme`

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>baseColor?: string</code></td>
            <td>The background color of the skeleton.</td>
            <td><code>#ebebeb</code></td>
        </tr>
        <tr>
            <td><code>highlightColor?: string</code></td>
            <td>The highlight color in the skeleton animation.</td>
            <td><code>#f5f5f5</code></td>
        </tr>
        <tr>
            <td><code>width?: string | number</code></td>
            <td>The width of the skeleton.</td>
            <td><code>100%</code></td>
        </tr>
        <tr>
            <td><code>height?: string | number</code></td>
            <td>The height of each skeleton line.</td>
            <td>The font size</td>
        </tr>
        <tr>
            <td><code>borderRadius?: string | number</code></td>
            <td>The border radius of the skeleton.</td>
            <td><code>0.25rem</code></td>
        </tr>
        <tr>
            <td><code>inline?: boolean</code></td>
            <td>
                By default, a <code>&lt;br /&gt;</code> is inserted after each skeleton so
                that each skeleton gets its own line. When <code>inline</code> is true, no
                line breaks are inserted.
            </td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td><code>duration?: number</code></td>
            <td>The length of the animation in seconds.</td>
            <td><code>1.5</code></td>
        </tr>
        <tr>
            <td><code>direction?: "base" | "alternate" | "reverse" | "alternate-reverse"</code></td>
            <td>
                The direction of the animation, either left-to-right or right-to-left.
            </td>
            <td><code>"base"</code></td>
        </tr>
        <tr>
            <td><code>enableAnimation?: boolean</code></td>
            <td>
                Whether the animation should play. The skeleton will be a solid color when
                this is <code>false</code>. You could use this prop to stop the animation
                if an error occurs.
            </td>
            <td><code>true</code></td>
        </tr>
    </tbody>
</table>

## Contributors

[![contributors](https://contrib.rocks/image?repo=jcanotorr06/solid-loading-skeleton)](https://github.com/jcanotorr06/solid-loading-skeleton/graphs/contributors)

## Licence

[MIT](LICENSE)