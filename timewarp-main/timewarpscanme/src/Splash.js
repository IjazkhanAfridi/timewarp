import React from "react"

const Splash = () => {
  window.setTimeout(function () {
    window.location.href = `/home`
  }, 3000)

  return (
    <div>
      <div className="splash">
        <div className="splashlogo">
          <img src="./logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Splash
