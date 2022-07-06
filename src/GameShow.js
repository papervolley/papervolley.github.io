import './GameShow.css';
import React, {useState, useEffect, useRef, Fragment} from "react";
import ReactDOM from "react-dom";
import IconPoint from './Assets/Images/icon_point.svg';

function GameShow() {
    return (
        <>
            <RoundResultPlainEnglish />
            <PointsChange isCorrect={true} />
            <PointsChange isCorrect={false} />
            <RoundAskPoints points={10} />
        </>
    );
}

export function PointsChange({ isCorrect }) {
    return <div className={'points-change' + (isCorrect ? " correct" : " incorrect")}><img src={IconPoint} alt="points" />3765</div>
}

export function RoundResultPlainEnglish({ isCorrect }) {
    return <div className='round-result-plain-english'>{isCorrect ? "Correct!" : "Nice Try"}</div>;
}  

export function RoundAskPoints({ points }) {
    return <div className='round-ask-points'><img src={IconPoint} alt="points" />+{points} points</div>;
}

export default GameShow;