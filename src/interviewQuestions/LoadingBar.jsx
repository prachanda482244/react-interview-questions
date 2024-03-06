import { useState } from "react"

const LoadingBar = () => {
      const [loadingProgress, setLoadingProgress] = useState(0)
      return (
            <div style={{ display: "flex", alignItems: 'center', justifyItems: 'center', flexDirection: 'column' }}>
                  <h1 className="text-center">Loading Bar</h1>
                  <div className="main-loading">
                        <div className="loading-bar" ></div>
                  </div>
            </div>
      )
}

export default LoadingBar
