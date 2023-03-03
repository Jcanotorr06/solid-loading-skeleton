import { Accessor, createContext } from "solid-js"
import type { SkeletonStyleProps } from "./types"

const SkeletonThemeContext = createContext<any>()

export default SkeletonThemeContext
export { SkeletonThemeContext }
