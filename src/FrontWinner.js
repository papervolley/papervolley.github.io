import './FrontWinner.css';
import React, {useState, useEffect, useRef, Fragment} from "react";
import ReactDOM from "react-dom";
import { useLongPress } from 'use-long-press';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { randomPick, mouseXY } from "./utils.js";
import cheeringAudio from './Assets/Audio/cheering2.mp3';
import confettiJSON from './Assets/Animations/confetti_from_top.json';
import cheeringJSON from './Assets/Animations/cheering.json';
import { Player } from '@lottiefiles/react-lottie-player';

function FrontWinner() {
    const confettiRef = useRef(null);

    useEffect(() => {
        new Audio(cheeringAudio).play();
        setTimeout(() => {
            confettiRef.current.play();
        }, 500);
    });

    return (
        <>
            <div className="main w-screen h-screen grid grid-rows-12 grid-cols-8">
                <div className="row-start-1 row-span-7 bg-transparent col-span-3 flex items-center justify-center">
                    <video autoPlay={true} muted={true} loop={true} className="w-[256px] rounded-lg h-auto">
                        <source src="assets/videos/sample.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="row-start-1 row-span-7 col-start3 col-span-5 flex flex-row items-center justify-center">
                    <div className="laurel-left"></div>
                    <div className="winner-box flex flex-col items-center justify-center">
                        <div className="subheadline">Congratulation!</div>
                        <div className="title">Terrie</div>
                    </div>
                    <div className="laurel-right"></div>
                </div>
            </div>
            <div className="absolute w-full h-auto flex items-bottom justify-center left-0 bottom-0">
                <Player
                    autoplay={true}
                    loop={true}
                    src={cheeringJSON}
                    style={{height: '320px', width: '960px', pointerEvents: 'none'}}
                ></Player>
            </div>
            <div className="absolute w-full h-auto flex items-top justify-center left-0 bottom-0">
                <Player
                    ref={confettiRef}
                    autoplay={false}
                    loop={false}
                    src={confettiJSON}
                    style={{height: 'auto', width: '960px', pointerEvents: 'none'}}
                ></Player>
            </div>
        </>
    );
}

export default FrontWinner;