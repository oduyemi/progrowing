import Button from "../components/elements/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "./SocketProvider";

export const Sessions = () => {
    var [sessionKey, setSessionKey] = useState("")
    // const nav = useNavigate();

    var socket = useSocket()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        socket.emit("session:join", {sessionKey});
        // nav(`/session/${sessionKey}`)
    }
    // [sessionKey, socket]

    return(
        <div className="pl-4 bg-gray-300 w-2/3 h-2/3 md:h-1/2 md:w-1/2 mx-auto">
            <form className="text-black flex items-center" onSubmit={handleFormSubmit} >
                <div className="relative top-36 left-36 flex items-center justify-center">
                    {/* <div className="relative left-36">
                        <label htmlFor="email" className="text-xl font-semi-bold">Email ID: </label>
                        <input type="email" id="email" required value="" className="text-blue-900 mt-4 px-4 py-2" placeholder="Email Address"/>
                    </div> */}
                    <div className="">
                        <label htmlFor="session-key" className="text-xl font-semibold">Session Key: &emsp;</label>
                        <input type="text" value={sessionKey} className="text-blue-900 mt-4 p-2" required placeholder="Enter Session key" onChange={e => setSessionKey(e.target.value)} />
                    </div>
                    
                    <div className="flex session-btn">
                        <Button className="relative left-7 text-white">Join Now</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}