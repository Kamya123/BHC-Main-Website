import React from 'react';

import './commCard.css';
import bt_img from '../../assets/images/img_main_cropped.png';
import appStore from '../../assets/images/img_maskgroup11.png';
import googleStore from '../../assets/images/img_maskgroup1.png';
import { Line } from '../line/Line';


const CommCard = () => {
    return (
        <div className='bottom_container'>
            <div className="container">
                <div className="readyComm_container flex">
                    <Line className='side_line' />
                    <div className="readyComm_text">
                        <h3 className='font-bold text-4xl'>Ready to join the community?</h3>
                        <p className='text-lg'> It is a long established fact that a reader will be distracted <br /> by the readable content.</p>
                    </div>
                    <button className='get_btn text-lg font-bold'>Get Started</button>
                </div>
            </div>
            <div className='container bottom_ready'>
                <div className='bottom_content'>
                    <h2 className='get_app_heading text-4xl font-bold tracking-wide pb-10'>Get The <span className='border-b-4 pb-2 app_text'>App</span> </h2>
                    <p className='get_app_text mb-8'>
                        It is a long established fact that a reader will be <br /> distracted by the readable content of a page when <br /> looking at its layout. The point of using Lorem Ipsum is <br /> that it has a more-or-less normal distribution.</p>
                    <div className="store_img flex justify-end">
                        <img className='App_store_img mr-4' src={appStore} alt='App Store image' />
                        <img className='play_store_img' src={googleStore} alt='Play Store image' />
                    </div>
                </div>
                <div className='bottom_img'>
                    <img src={bt_img} alt='bottom image' />
                </div>
            </div>
        </div>
    )
}

export default CommCard;
