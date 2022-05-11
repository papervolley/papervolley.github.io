import './FrontChat.css';
import React, {useState, useEffect, useRef, Fragment} from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { randomPick, mouseXY } from "./utils.js";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import countdownJSON from './Assets/Animations/countdown.json';
import countdownAudio from './Assets/Audio/countdown_30s.mp3';

function FrontChat() {
    const countdownProgressRef = useRef(null);
    const countdownAudioRef = useRef(new Audio(countdownAudio));
    const countdownTimerRef = useRef(null);
    const [time, setTime] = useState(0);

    const timerAction = () => {
        // reset
        setTime(0);
        clearInterval(countdownTimerRef.current);
        countdownAudioRef.current.pause();
        countdownAudioRef.current.currentTime = 0;
        countdownProgressRef.current.stop();

        // play
        countdownProgressRef.current.play();
        countdownAudioRef.current.play();
        countdownTimerRef.current = setInterval(() => {
            setTime(time => Math.min(30, time + 1));
        }, 1000);
    }

    return (
        <>
            <div className="content">
                <div className="trivia flex flex-col">
                    <h3 className='type mb-4'>Award Question</h3>
                    <h1 className='mb-4'>Who named the Pacific Ocean?</h1>
                    <div className="states flex flex-row items-center">
                        <div className="countdown relative" onClick={() => timerAction()}>
                            <div className="timer">
                                <Player
                                    ref={countdownProgressRef}
                                    autoplay={false}
                                    loop={false}
                                    speed={1}
                                    src={countdownJSON}
                                    style={{height: '120px', width: '120px', pointerEvents: 'none'}}
                                ></Player>
                            </div>
                            <span className='absolute left-0 top-0 w-full h-full flex items-center justify-center font-bold text-[24px]'>{30 - time}</span>
                        </div>
                        <h3>🙌 &nbsp;30 answered</h3>
                    </div>

                </div>
            </div>
        </>
    );
}

export default FrontChat;