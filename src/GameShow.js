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
            <AggregateAnswerList />
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

export function AggregateAnswerList() {
    return (
        <div className='aggregate-answer-list'>
            <AggregateAnswerListItem value="Option 1" percentage={14} variant="incorrect" />
            <AggregateAnswerListItem value="Option 2" percentage={14} variant="correct" />
            <AggregateAnswerListItem value="Option 3" percentage={14} variant="other" />
        </div>
    );
}

export function AggregateAnswerListItem({
  value,
  percentage,
  variant,
}) {
  return (
    <div className={`aggregate-answer-list-item ${variant}`} style={{boxShadow: "inset -5em 0px white"}}>
        <div className='value'>{value}</div>
        <div className='percentage'>{percentage}%</div>
    </div>
  );
}


export default GameShow;