import './FrontChannel.css';
import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import { useLongPress } from 'use-long-press';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { randomPick, mouseXY } from "./utils.js";

const NOT_NEW_USER_STRING = "noone";

const emojis = [
    "👍", "❤️", "🎉", "🇺🇦"
]

const grettingEmojis = [
    {emoji: "👋", suffix: "hand-wave"}, 
    {emoji: "🎉", suffix: "tada"}, 
    {emoji: "🎊", suffix: "confetti"}
]

const greetingTemplates = [
    "Everyone welcome {USER_NAME}",
    "Welcome, {USER_NAME}!",
    "{USER_NAME} just landed",
    "{USER_NAME} joined the party",
    "{USER_NAME} just showed up",
    "{USER_NAME} is here"
]

const chatlogs  = [
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
    "Leilani",
    "Amelia",
    "Benjamin",
    "Isabella",
    "Lucas",
    "Shia",
    "Henry",
    "Evelyn",
    "Kyle",
    "Harper"
];

function Chat(props) {
    return (
        <div className="inline-flex flex-col w-full chatlog" onClick={props.clickHandler}>
            <div className="name">{props.username}</div>
            <div className="bubble">
                {props.chatlog}
            </div>
        </div>
    );
}

function WelcomeMessage(props) {
    const [emoji, setEmoji] = useState(randomPick(grettingEmojis));
    const [template, setTemplate] = useState(randomPick(greetingTemplates).replace("{USER_NAME}", props.username));

    return (
        <div className="inline welcome text-white my-2 text-2xl w-full">
            <div className="hidden animate-hand-wave animate-tada animate-confetti origin-hand-wave origin-tada origin-confetti"></div>
            <span className={`mr-2 animate-${emoji["suffix"]} inline-block origin-${emoji["suffix"]}`}>{emoji["emoji"]}</span> {template}
        </div>
    );
}

function ChatBacklog(propts) {
    return (
        <div className="backlog-box flex flex-col-reverse overflow-y-scroll overflow-x-hidden">
            <TransitionGroup className="backlog-wrapper flex flex-col-reverse justify-end" component="div">
            {
                propts.chats.map((e, i) => {
                    return e.newuser ? (
                        <CSSTransition key={i} timeout={500} classNames="chat">
                            <WelcomeMessage username={e.username} />
                        </CSSTransition>
                    ) : (
                        <CSSTransition key={i} timeout={500} classNames="chat">
                            <Chat username={e.username} chatlog={e.chatlog} />
                        </CSSTransition>
                    )
                })
            }
            </TransitionGroup>
        </div>
    );
}

function Prompt(props) {
    return (
        <div className="prompt text-white text-2xl italic font-normal p-3 justify-end">
            Try saying:<br />
            <div className='font-bold'>&quot;Alexa, <span className='text-bc-yellow'>SAY</span> {props.username === NOT_NEW_USER_STRING ? "hi." : `hi to ${props.username}`}&quot;</div>
        </div>
    );
}

function InteractionLayer(props) {
    const [scale, setScale] = useState(1);
    const [pressing, setPressing] = useState(false);
    const [mouse, setMouse] = useState([0, 0]);
    const [start, setStart] = useState(false);
    const [oldPressing, setOldPressing] = useState(false);
    const emojiRef = useRef();
    const [emoji, setEmoji] = useState(randomPick(emojis));

    useEffect(() => {
        const interval = setInterval(() => {
            //setScale(scale => start ? 1 : pressing ? Math.min(scale + 0.01, 3) : scale);
            setScale(scale => pressing ? oldPressing ? Math.min(scale + 0.02, 4) : 1 : scale);
            setEmoji(emoji => (pressing && !oldPressing) ? randomPick(emojis) : emoji);
            setOldPressing(pressing);
        }, 10);
        return () => clearInterval(interval);
    }, [scale, pressing, mouse, start, oldPressing]);

    const startScaling = event => {
        console.log("start");
        //console.log(mouseXY(event));
        setMouse(mouseXY(event));
        setPressing(true);
        setStart(true);
    }

    const stopScaling = event => {
        setPressing(false);
        console.log("stop scaling");
    }

    const bind = useLongPress(() => {
        //alert("something");
        console.log("long pressed");
    }, {
        onStart: event => startScaling(event),
        onFinish: event => stopScaling(event),
        onCancel: event => stopScaling(event),
        captureEvent: true,
        filterEvents: (event) => 'button' in event ? event.button === 0 : true
    });

    return (
        <>
            <div className="interaction-layer" {...bind}>
                <div className={`emoji-box${pressing ? "" : " release"}`} style={{left: mouse[0] - 12, top: mouse[1] - 48}}>
                    <div className={`emoji-wrapper`} ref={emojiRef} style={{transform: `scale(${scale})`}}>
                        <RandomEmoji emoji={emoji} />
                    </div>
                </div>
            </div>
        </>
    )
}

function RandomEmoji(props) {
    return (
        <>
            <span className='h-full w-full text-yellow-500'>
                <div className="text-3xl">{props.emoji}</div>
            </span>
        </>
    )
}

function HeartEmoji(props) {
    return (
        <>
            <span className='h-full w-full text-yellow-500'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
            </span>
        </>
    )
}

function FrontChannel() {
    const initCount = 10;
    const [chats, setChats] = useState([...Array(initCount)].map((i, e) => {
        return {username: randomPick(names), chatlog: randomPick(chatlogs), newuser: true};
    }));
    const [prompt, setPrompt] = useState(NOT_NEW_USER_STRING);

    useEffect(() => {
        const interval = setInterval(() => {
            // throw dice to decide new user joins or not
            if (Math.random() > 0.5) {
                // new user joins
                const isNewUser = Math.random() > 0.25;
                const newUserName = randomPick(names);
                const newChat = {username: `${newUserName}`, chatlog: `${randomPick(chatlogs)}`, newuser: isNewUser};
                setPrompt(prompt => isNewUser ? `${newUserName}` : prompt);
                setChats(chats => chats.concat(newChat));
                //const id = chats.length - 1;
                /*setTimeout(() => {
                    removeChat(chats.indexOf(newChat));
                }, 30 * 1000);*/
            }
        }, 3 * 1000);
        return () => clearInterval(interval);
    }, []);

    const removeChat = (at) => {
        console.log(`delete ${at}`);
        var c = chats.slice();
        c.splice(at, 1);
        setChats(c);
    };

    return (
        <div>
            <div className="main w-screen h-screen flex flex-row justify-center items-center bg-black">
                <div className="video-box h-full flex">
                    <video autoPlay={true} muted={true} loop={true}>
                        <source src="assets/videos/sample.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="chats-box h-full grow flex flex-row">
                    <div className="wrapper flex flex-col w-full">
                        <div className="backlog-box flex flex-col-reverse overflow-y-scroll overflow-x-hidden">
                            <TransitionGroup className="backlog-wrapper flex flex-col justify-end" component="div">
                            {
                                chats.map((e, i) => {
                                    return e.newuser ? (
                                        <CSSTransition key={i} timeout={500} classNames="chat">
                                            <WelcomeMessage username={e.username} />
                                        </CSSTransition>
                                    ) : (
                                        <CSSTransition key={i} timeout={500} classNames="chat">
                                            <Chat username={e.username} chatlog={e.chatlog} />
                                        </CSSTransition>
                                    )
                                })
                            }
                            </TransitionGroup>
                        </div>
                        <Prompt username={prompt} />
                    </div>
                </div>
            </div>
            <InteractionLayer />
        </div>
    );
}

export default FrontChannel;