import React from 'react'

const Hero = () => {
  return (
    <div id='home' className='container-fluid text-center text-white mb-5'>
        
        <h1 className=' fw-bolder pt-5' style={{fontSize:"80px"}}>Turning code into</h1>
        <h1 className='fw-bolder text-primary pb-4' style={{fontSize:"80px"}}>Innovation</h1>
        <h3>Full stack developer by title, problem solver by nature</h3>
        <a href="#projects" className="btn btn-outline-light btn-lg mt-3 mb-3">View My Work</a>
    
    </div>
  )
}

export default Hero