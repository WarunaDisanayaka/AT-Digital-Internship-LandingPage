import React from 'react';
import { imageOne, imageTwo } from '../../assets';
import CustomButton from '../Button/Button';
import "./WebAndMobileSection.css"


function WebAndMobileSection() {
  return (
    <div className="WebAndMobileSection">
      <div className="row">
        <div className="col-md-6">
          <div className='WebAndMobileSection-image'>
            <img src={imageTwo}/>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className='WebAndMobileSection-content'>
            <div className='heading'>
                <h4>Web & Mobile App Development</h4>
            </div>
            <div className='content'>
                <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to 
                    respond to different intents shown by your potential customers who interact with your business online.</p>
            </div>
            <div className='button'>
                <CustomButton>LEARN MORE</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebAndMobileSection;
