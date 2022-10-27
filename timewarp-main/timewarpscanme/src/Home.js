import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
            <div className="homebody">
               <h2> Home </h2>
               <br />
               <Link to={"/main"} style={{textDecoration:"none"}}>
                <button className='btn playbtn' >PLAY</button>
                </Link>
            </div>
        </div>
  )
}

export default Home