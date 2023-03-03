import { createContext } from "solid-js"
import type { SkeletonStyleProps } from "./types"

const SkeletonThemeContext = createContext<SkeletonStyleProps>()

export default SkeletonThemeContext
export { SkeletonThemeContext }
