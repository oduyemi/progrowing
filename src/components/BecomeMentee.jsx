import Button from "./elements/Button";
import DipMentor from "../assets/images/logo/DipMentor.mp4";




export const BecomeMentee = () => 
{
    return(
        <>
            <div className="banner  mt-10 mb-14 w-full md-1/3 px-7 mx-auto relative flex items-center justify-between">
                <div className="">
                    <div className="mt-[-10%] mb-8 md:w-3/4 sm:w-full pl-4 mx-auto">
                        <h1 className="text-3xl font-semibold mt-0 my-6 md:pl-8 sm:pl-4 capitalize text-yel topic mx-auto">Grow with help from mentors</h1>
                        <p className="w-2/3 ml-2 pl-8 mb-4 topic-md">
                            It's about time you started saying goodbye to guesswork and expensive mistakes. Get valuable "been there, done that"
                            advice directly from mentors.
                        </p>
                    
                        <form action="" className="flex items-center space-x-2 pl-10 mx-auto mt-5 mb-3 mid">
                            {/* <div className="">
                                <input type="search" name="techrole" id="techrole" placeholder="Search Role" className="p-2" />
                            </div> */}
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
                                <Button className="btnUp ">Browse Mentors</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex items-center justify-center w-2/3 mr-8 pr-5 mb-32">
                <video autoplay muted playsInline autoPlay="true" loop="true" className="vid">
                        <source src={DipMentor} />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    )
}