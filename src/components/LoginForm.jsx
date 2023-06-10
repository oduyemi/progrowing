import Button from "./elements/Button"



export const LoginForm = () => {
    return(
        <div className="pl-4 bg-gray-300 w-2/3 h-2/3 md:h-1/2 md:w-1/2 mx-auto">
            <div className="form-body mx-auto">
                <form>
                    <div className="mb-2">
                        <label htmlFor="email" className="text-black text-l font-semibold">Email Address:</label>
                        <input type="text" value="" placeholder="Email Address" className="ml-6 p-2" />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="text-black text-l font-semibold">Password:</label>
                        <input type="text" value="" placeholder="Password" className="ml-14 p-2" />
                    </div>
                    <div className="logform-btn">
                        <Button className="ml-14">LOGIN</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}