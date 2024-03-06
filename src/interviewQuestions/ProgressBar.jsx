import { useEffect, useState } from "react"

const ProgressBar = () => {
      const [value, setValue] = useState(0)

      const num = 10
      useEffect(() => {
            const timer = setInterval(() => {
                  setValue((prev) => Math.min(100, Math.max(0, prev + 1)))
            }, 100);

            return () => {
                  clearInterval(timer)
            }
      }, [])
      return (
            <div className="flex flex-col items-center p-2">
                  <h1 className="text-center">Progress Bar</h1>
                  <div className=" bg-progress" >
                        <span>{value.toFixed()}%</span>
                        <div style={{ width: `${value}%` }} className="progress-effect"></div>
                  </div>
            </div>
      )
}

export default ProgressBar
