import './FrontChannel.css';
import React from "react";
import ReactDOM from "react-dom";

const chats  = [
    "hi",
    "renee ding ding you got it right",
    "i can hear you jam",
    "that tells the people don't judge the book by its cover",
    "yes we can hear you jam",
    "yeah keep going",
    "oh what happended",
    "baahaahaaa",
    "i live now in Peague-capital city of czech republic",
    "in fact...lions, tigers and bears! oh my!",
    "tra la la la la iam OK OK OK OK ,do you like hockey? heeehhe",
    "acid",
    "what is inthe H2O over htere?",
    "i think there are penguins in edmonton at the zoo",
    "its my favourite animal",
    "lol",
    "from Hungary, but iam not hungry now hehe"
];

const names = [
    "Liam",
    "Olivia",
    "Noah",
    "Emma",
    "Oliver",
    "Ava",
    "Elijah",
    "Charlotte",
    "William",
    "Sophia",
    "James",
    "Amelia",
    "Benjamin",
    "Isabella",
    "Lucas",
    "Mia",
    "Henry",
    "Evelyn",
    "Alexander",
    "Harper"
];

const prompts = [
    "Alexa, <span>Say</span> hi",
    "Alexa, <span>Say</span> hello to Jam",
    "Alexa, <span>Say</span> hello to Sophia"
];

function Chat(props) {
    return (
        <div className="inline-flex flex-col w-full">
            <div className="name">{props.username}</div>
            <div className="bubble">
                <div className="chatlog">
                    {props.chatlog}
                </div>
            </div>
        </div>
    );
}

function ChatBacklog() {
    return (
        <div className="backlog-box flex flex-col-reverse overflow-y-scroll">
            <div className="backlog-wrapper flex flex-col-reverse justify-end bg-amber-100">
                {
                    [...Array(10)].map((e, i) => (
                        <Chat username="aa" chatlog="bb" />
                    ))
                }
            </div>
        </div>
    );
}

function Prompt() {
    return (
        <div className="prompt text-white text-2xl italic font-normal p-3 justify-end">
            Try saying:<br />
            <div className='font-bold'>&quot;Alexa, <span className='text-bc-yellow'>SAY</span> hi.&quot;</div>
        </div>
    );
}

function FrontChannel() {
    return (
        <div>
            <div className="main w-screen h-screen flex flex-row justify-center items-center bg-black">
                <div className="video-box w-720 h-full">
                    <video autoPlay={true} muted={true} loop={true}>
                        <source src="assets/videos/sample.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="chats-box h-full grow flex flex-row">
                    <div className="wrapper flex flex-col w-full">
                        <ChatBacklog />
                        <Prompt />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrontChannel;