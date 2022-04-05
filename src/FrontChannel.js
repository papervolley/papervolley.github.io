import './FrontChannel.css';
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { randomPick } from "./utils.js";

const NOT_NEW_USER_STRING = "noone";

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
    return (
        <div className="inline welcome text-white my-2 text-2xl w-full">
            <span className='mr-2 animate-swing inline-block origin-hand-wave-emoji'>👋</span>Welcome, {props.username}
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

function FrontChannel() {
    const initCount = 10;
    const [chats, setChats] = useState([...Array(initCount)].map((i, e) => {
        return {username: randomPick(names), chatlog: randomPick(chatlogs), newuser: false};
    }));
    const [prompt, setPrompt] = useState(NOT_NEW_USER_STRING);

    useEffect(() => {
        const interval = setInterval(() => {
            // throw dice to decide new user joins or not
            if (Math.random() > 0.75) {
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
        }, 3000);
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
        </div>
    );
}

export default FrontChannel;