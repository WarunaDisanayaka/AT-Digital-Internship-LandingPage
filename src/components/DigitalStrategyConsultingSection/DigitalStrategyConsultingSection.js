import React from 'react'
import { imageOne, imageTwo } from '../../assets';
import CustomButton from '../Button/Button';
import "./DigitalStrategyConsultingSection.css"


function DigitalStrategyConsultingSection() {
  return (
    <div className="DigitalStrategyConsultingSection">
    <div className="row">
      <div className="col-md-6 ">
        <div className='DigitalStrategyConsultingSection-content'>
          <div className='heading'>
              <h4>Digital Strategy Consulting</h4>
          </div>
          <div className='content'>
              <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. 
                We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          </div>
          <div className='button'>
              <CustomButton>LEARN MORE</CustomButton>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className='DigitalStrategyConsultingSection-image'>
          <img src={imageOne}/>
        </div>
      </div>
    </div>
  </div>  )
}

export default DigitalStrategyConsultingSection