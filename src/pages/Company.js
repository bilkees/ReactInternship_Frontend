import React from 'react'
import '../styles/Company.css'
const Company = () => {
  return (
    <div >
       <br></br>
        <br></br>
        <br></br>
        <br></br>
        
           
        <div className='comp_home'>
        
        
        <div className='comp_img'>
        <img src="https://ictkerala.org/assets/images/PHOTO_ICTAK-Reception.jpg" alt="ICT reception" height={300} width ={618}/>
        </div>
       
       
        <div className='comp_para'>
            <h1>ICTAK</h1>
            <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improving their employability opportunities in the Industry. The Company is supported by Govt. of India, partnered by Govt. of Kerala and the IT industry..</p>
        </div>
    </div>
        <div className='comp_home'>

        <div className='comp_para'>
                <h1>Vision & Values</h1>
                <p>"To emerge as the single-point establishment for all the ICT related capability building in the state.".</p>
            </div>
        
            <div className='comp_img'>
            <img src="https://ictkerala.org/assets/images/PHOTO_ICTAK-Vision.jpg" alt="ICT reception" height={300} width ={618}/>
            </div>
           
           
            
        </div>
        <div className='comp_home'>
        
        
        <div className='comp_img' width ={618} >
        <img src="https://ictkerala.org/assets/images/DP_BoD01%20(Tony%20Thomas).png" alt="ICT reception" height={300} width ={300}/>
        </div>
       
       
        <div className='comp_para'>
            <h1 id='imgHeading'>Meet our Chairman</h1>
            <p>"The ICT Academy of Kerala has emerged as a strategic partner for the industry, academia,
                 and government in bridging the skills gap in the field of Information Communication Technology. Over the years, ICT Academy has successfully supported the industry and academia in talent needs and skills supply and has touched youths and professionals alike in fulfilling their career aspirations. We will continue to invest in building capabilities in the latest technology and business domains to help our beneficiaries.
                 We shall work with the Government of Kerala in its mission for talent development and employment."</p>
        </div>
    </div>
    <div className='teamHeaderclass'>
    <h3 id='team_header'>Board of Members
</h3>
    </div>
    </div>
  )
}

export default Company