import React from 'react'
import netflix_tv from './netflix_tv.png';
import vid from './vid.mp4'
// import 'vid.mp4/dist/style.css';
import VideoPLayer from "react-video-js-player";
function NetflixAnimi() {
  return (
    <>
 <div  className='containerStyleImg'>
    <img src={netflix_tv} alt="" >
     
    </img>
    {/* <VideoPLayer src={vid} width="300px" height="300px"  /> */}
    </div>
    </>
  )
}

export default NetflixAnimi