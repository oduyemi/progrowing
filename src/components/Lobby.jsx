



export const LobbyScreen = () => {
    
    return(
        <div>
            <h1 className="pl-4">Lobby</h1>
            <form>
                <label htmlFor="email">Email ID</label>
                <input type="email" id="email" required value="" placeholder="Email Address"/>
                <input type="text" id="sessionKey" value="" placeholder="Session Key" />
            </form>
        </div>
    )
}