import { JSXElement, type Component, Show, For, splitProps } from "solid-js"
import type { SkeletonProps } from "./types"
import { styleOptionsToCSS } from "./helpers"
import { useSkeletonTheme } from "./SkeletonTheme"

const defaultEnableAnimation = true

const Skeleton: Component<SkeletonProps> = (props): JSXElement => {
  const [local, others] = splitProps(props, [
    "count",
    "wrapper",
    "className",
    "containerClassName",
    "circle",
    "style",
  ])

  const contextStyleOptions = useSkeletonTheme()
  const propsStyleOptions = others

  Object.entries(others).forEach(([key, value]) => {
    if (value === undefined) {
      delete propsStyleOptions[key as keyof typeof propsStyleOptions]
    }
  })

  const styleOptions = {
    ...contextStyleOptions,
    ...propsStyleOptions,
    circle: local.circle,
  }

  const style = {
    ...local.style,
    ...styleOptionsToCSS(styleOptions),
  }

  const className = `solid-loading-skeleton ${local.className || ""}`.trim()

  const inline = styleOptions.inline ?? false

  const elements: JSXElement[] = []
  const count = local.count ?? 1
  const countCeiling = Math.ceil(local.count ?? 1)

  for (let i = 0; i < countCeiling; i++) {
    const thisStyle = { ...style }

    if (countCeiling > count && i === countCeiling - 1) {
      const width = thisStyle.width ?? "100%"

      const fractionalPart = count % 1

      const fractionalWidth =
        typeof width === "number" ? width : `calc(${width} * ${fractionalPart})`

      thisStyle.width = fractionalWidth
    }

    const skeletonSpan = (
      <span class={className} style={thisStyle}>
        &zwnj;
      </span>
    )

    if (inline) {
      elements.push(skeletonSpan)
    } else {
      elements.push(
        <>
          {skeletonSpan} <br />
        </>,
      )
    }
  }

  const Wrapper = local.wrapper

  return (
    <span
      class={local.containerClassName}
      aria-live="polite"
      aria-busy={styleOptions.enableAnimation ?? defaultEnableAnimation}
    >
      <Show when={Wrapper !== undefined} fallback={elements}>
        <For each={elements}>
          {element => (Wrapper !== undefined ? <Wrapper>{element}</Wrapper> : null)}
        </For>
      </Show>
    </span>
  )
}

export default Skeleton

export { Skeleton }
