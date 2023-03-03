import type { Component } from "solid-js"
import Skeleton, { SkeletonTheme } from "../src"
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
