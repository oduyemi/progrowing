import Button from "../components/elements/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sessions = () => {
    const [sessionKey, setSessionKey] = useState("")
    const nav = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        nav(`/session/${sessionKey}`)
    }

    return(
        <div className="pl-4 bg-gray-300 w-2/3 h-2/3 md:h-1/2 md:w-1/2 mx-auto">
            <form className="text-black" onSubmit={handleFormSubmit} >
                <div className="relative top-36">
                    <label htmlFor="session-key" className="text-2xl font-semi-bold flex items-center justify-center">Enter Session Key</label>
                    <input type="text" value={sessionKey} className="text-blue-900 mt-4 px-4 py-2 mx-auto flex items-center justify-center" required placeholder="Enter Session key" onChange={e => setSessionKey(e.target.value)} />
                    <div>
                        <Button className="flex items-center justify-center mx-auto">Join Now</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}