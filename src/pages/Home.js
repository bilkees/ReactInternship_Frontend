import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Homestyle.css'


const Home = () => {
  return (


<div>

    <section className=' overlaydesign'>
     
      <div className='container row'>
    <div className='section-one-left col-md-6'>
    <h1>Build your Career with ICT</h1>
      <div className='para'>
      <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June,
        2014. The organization had a humble beginning providing skill training programs to selected
        academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT
        and innovation-related training and capacity-building programs in the state.</p>
      </div>
      <div>
        <Link to="/company"><button>Know More</button></Link>
      </div>
    </div>
    <div className='section-one-right col-md-6'>
      <div>
      <img src='https://ictkerala.org/assets/images/GRA_Home-Header-Overlay.png' alt='homeImage' className='img-responsive'></img>
      </div>
        
    </div>
   
    </div>
    
    </section>
    {/* section everlay design ends */}
    {/* section two begins */}
    <section className='section-two'>
      <div className='section-two-body' >
      <div className='row'>
      <div className='col-md-4'>
        <div className='para'>
      <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June,
        2014. The organization had a humble beginning providing skill training programs to selected
        academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT
        and innovation-related training and capacity-building programs in the state.</p>
      </div>
        </div>
        <div className='col-md-8'>
        <div className='para'>
      <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June,
        2014. The organization had a humble beginning providing skill training programs to selected
        academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT
        and innovation-related training and capacity-building programs in the state.</p>
      </div>
        </div>
      </div>
      </div>

    </section>
    
    </div>
  )
}

export default Home
