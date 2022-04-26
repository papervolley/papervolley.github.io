import './SubscribeButton.css';
import React, {useState, useEffect, useRef, Fragment} from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";

function ProcessingContent() {
    return (
        <>
            <svg className='mr-2 animate-spin' width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2V3.88889M10 16.1111V18M18 10H16.1111M3.88889 10H2M4.34313 4.34315L5.67878 5.67879M14.3212 14.3212L15.6568 15.6569M15.6568 4.34315L14.3212 5.67879M5.67878 14.3212L4.34313 15.6569" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                Processing...
        </>
    );
}

function NormalContent() {
    return (
        <>
            <svg className='mr-2 h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
                TAP TO SUBSCRIBE
        </>
    );
}

function FinishContent() {
    return (
        <>
            <svg className='mr-2 h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
                You Are Subscribed!
        </>
    );
}

function SubscribeButton(props) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const clickHandler = (evt) => {
        console.log("clicked");
        setIsSubscribed(!isSubscribed);
        if (!isSubscribed) props.clickHandler();
    };

    return (
        <>
            <button type="button" className={`bc-button bg-bc-yellow ${props.className}`} onClick={clickHandler}>
                {
                    isSubscribed ? <FinishContent /> : isProcessing ? <ProcessingContent /> : <NormalContent />
                }
            </button>
        </>
    );
}

export default SubscribeButton;