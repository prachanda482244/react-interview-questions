import { useState } from "react"

const Checkboxes = () => {
      const [status, setStatus] = useState({
            check1: false,
            check2: false,
            check3: false
      })

      const handleCheck = () => {
            setStatus({
                  ...status,
                  check1: true,
                  check2: true,
                  check3: true,
            })
      }
      return (
            <div>
                  <div>
                        select all <input type="checkbox" className='checkboxes' onChange={() => { }} checked={status.check1 && status.check2 && status.check3} onClick={handleCheck} />
                  </div>
                  <div className='container'>
                        <input type="checkbox" checked={status.check1} onChange={() => setStatus({
                              ...status,
                              check1: !status.check1
                        })} />
                        <input type="checkbox" checked={status.check2} onChange={() => setStatus({
                              ...status,
                              check2: !status.check2
                        })} />
                        <input type="checkbox" checked={status.check3} onChange={() => setStatus({
                              ...status,
                              check3: !status.check3
                        })} />
                  </div>

            </div>
      )
}

export default Checkboxes
