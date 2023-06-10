import Button from "./elements/Button";
import DipMentor from "../assets/images/logo/DipMentor.mp4";



export const FindMentor = () => 
{
    return(
        <>
            <div className="banner  mt-10 w-full md-1/3 px-7 mx-auto relative flex items-center justify-between">
                <div className="">
                    <div className="mb-6 w-3/4 pl-4">
                        <h1 className="text-3xl font-light mt-3 my-6">Learn and grow with help from mentors for free</h1>
                        <p className="w-2/3 ml-2">
                            It's about time you started saying goodbye to guesswork and expensive mistakes. Get valuable "been there, done that"
                            advice directly from startup mentors.
                        </p>
                    </div>
                    
                    <form action="" className="flex items-center space-x-2 pl-4">
                        <div className="">
                            <input type="search" name="techrole" id="techrole" placeholder="Search Role" className="p-2" />
                        </div>
                        <div className="text-black ">
                        <select className="p-2">
                            <option value="">Choose Expertise</option>
                            <option value="backend">Backend Development</option>
                            <option value="datasci">Data Science</option>
                            <option value="frontend">Frontend Development</option>
                            <option value="fullstack">Full Stack Development</option>
                            <option value="dataanalysis">Microsoft Excel/Data Analysis</option>
                            <option value="powerbi">Power Bi/Python</option>
                            <option value="testing">Software Testing</option>
                        </select>
                        </div>
                        <div>
                            <Button className="btnUp">Browse Mentors</Button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center w-2/3 mr-4 pr-4">
                <video autoplay muted playsInline className="">
                        <source src={DipMentor} />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    )
}