import './FrontChannelStart.css';
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

const NAMES = [
    "Attractive Cat", 
    "Stormy Snail",
    "Glamorous Rabbit",
    "Elegant Dinosaur",
    "Adaptable Bear",
    "Canny Porcupine"
]

const COLORS = [
    "#3EEAAC",
    "#EABA3E",
    "#EA3EA5",
    "#D2EA3E"
]

const NameBall = (props) => {
    return (
        <Link to="/frontchannel/state" className="name-ball absolute rounded-full font-medium text-2xl flex items-center justify-center text-center" style={props.ballStyle}>
            {props.userName}
        </Link>
    );
}

const NameSuggestion = () => {
    const style1 = {
        backgroundColor: COLORS[0],
        left: 84,
        top: 156,
        animationDelay: "0s"
    };

    const style2 = {
        backgroundColor: COLORS[1],
        left: 326,
        top: 192,
        animationDelay: "0.8s"
    };

    const style3 = {
        backgroundColor: COLORS[2],
        left: 556,
        top: 31,
        animationDelay: "0.3s"
    };

    const style4 = {
        backgroundColor: COLORS[3],
        left: 636,
        top: 226,
        animationDelay: "1.2s"
    };

    return (
        <div className='w-full h-full'>
            <NameBall ballStyle={style1} userName={randomPick(NAMES)} />
            <NameBall ballStyle={style2} userName={randomPick(NAMES)} />
            <NameBall ballStyle={style3} userName={randomPick(NAMES)} />
            <NameBall ballStyle={style4} userName={randomPick(NAMES)} />
        </div>
    );
}

const Question = () => {
    return (
        <div className="w-full h-full absolute left-0 top-0 flex justify-start items-end">
            <div className="question-box absolute font-bold text-white text-4xl text-bold m-8">What is your name?</div>
        </div>
    );
}

function FrontChannelStart() {
    return (
        <>
            <div className="main h-screen w-screen bg-black">
                <Question />
                <NameSuggestion />
                <AlexaBar />
            </div>
        </>
    );
}

export default FrontChannelStart;