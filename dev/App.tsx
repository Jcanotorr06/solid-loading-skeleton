import type { Component } from "solid-js"
import Skeleton from "../src/Skeleton"
import SkeletonTheme, { useSkeletonTheme } from "../src/SkeletonTheme"
import "../src/skeleton.css"

const App: Component = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#F44" direction="alternate">
      <div>
        <Skeleton count={3} />
      </div>
      <div>
        <Skeleton height="150px" width="150px" />
      </div>
    </SkeletonTheme>
  )
}

export default App
