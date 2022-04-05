import './FrontChannelState.css';
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { randomPick } from './utils';

const AlexaBar = () => {
    return (
        <>
            <div className="alexa-bar w-full fixed bottom-0 left-0 w-full"> </div>
        </>
    );
}

const Map = () => {
    return (
        <Link to="/frontchannel/start" className='w-full h-full absolute left-0 top-0 flex justify-center'>
            <img className='my-7' src='assets/images/map.png' alt="United States" />
        </Link>
    );
}

const Question = () => {
    return (
        <div className="w-full h-full flex left-0 top-0 justify-end items-end">
            <div className="question-box font-bold text-white text-4xl text-bold text-right m-8">What state do you live in?</div>
        </div>
    );
}

function FrontChannelState() {
    return (
        <>
            <div className="main h-screen w-screen bg-black">
                <Question />
                <Map />
                <AlexaBar />
            </div>
        </>
    );
}

export default FrontChannelState;