import "./App.css"
import Intro from "./Intro"
import Warper from "./Warper"

import { useCookies } from "react-cookie"

function Main() {
  const [cookies, setCookie, removeCookie] = useCookies(["seen"])

  function setSeen() {
    setCookie("seen", true)
  }

  function resetSeen() {
    removeCookie("seen")
  }

  function showContent() {
    if (cookies.seen) {
      return <Warper resetSeen={resetSeen} />
    } else {
      return <Intro exploreClick={setSeen} />
    }
  }

  return (
    <>
      <div className="site">{showContent()}</div>
    </>
  )
}

export default Main
