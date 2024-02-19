import Button from "./elements/Button";
import "../CSS/MentorForm.css";

export const MentorForm = () => {
    return(
        <div className="">
             <h1 className="text-5xl text-center text-yel font-semibold">Become A Mentor</h1>
             <p className="mx-auto text-xl font-light text-center my-6 w-1/2">
                Do you want to contribute to the professional
                development of Software Engineers? Become a
                mentor now. Fill the form below to get started.
            </p>
            <div className="pl-4 bg-gray-300 md:w-1/3 sm:w-full mx-auto mb-14 mform">
                <div className="form-body mx-auto">
                    <form id="form" novalidate>
                    <div className="relative z-0 w-full mb-5 mt-0">
                        <input
                        type="text"
                        name="name"
                        placeholder=" "
                        required
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-400">Enter Full name</label>
                        <span className="text-sm text-red-600 hidden" id="error">Field is required</span>
                    </div>

                    <div className="relative z-0 w-full mb-5">
                        <input
                        type="email"
                        name="email"
                        placeholder=" "
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-400">Enter Email Address</label>
                        <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                        <input
                        type="number"
                        name="phone"
                        placeholder=" "
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-400">Enter Phone Number</label>
                        <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                    </div>

                    <fieldset className="relative z-0 w-full p-px mb-5">
                        <legend className="absolute text-ppl transform scale-75 -top-3 origin-0">Choose an option</legend>
                        <div className="block pt-3 pb-2">
                        <label className="text-gray-400">
                            <input
                            type="radio"
                            name="radio"
                            value="1"
                            className="mr-2 text-gray-400 border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                            />
                            Web Development
                        </label><br />
                        <label className="text-gray-400">
                            <input
                            type="radio"
                            name="radio"
                            value="2"
                            className="mr-2 text-gray-400 border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                            />
                            Mobile Development
                        </label><br />
                        <label className="text-gray-400">
                            <input
                            type="radio"
                            name="radio"
                            value="2"
                            className="mr-2 text-gray-400 border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                            />
                            Both
                        </label>
                        </div>
                        <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                    </fieldset>

                    <div className="relative z-0 w-full mb-5">
                        <select
                        name="select"
                        value=""
                        onclick="this.setAttribute('value', this.value);"
                        className="pt-3 pb-2 block w-full px-0 mt-0 text-gray-400 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        >
                            <option value="" selected disabled hidden>Choose Expertise</option>
                                <option value="backend">Backend Development</option>
                                {/* <option value="datasci">Data Science</option> */}
                                <option value="frontend">Frontend Development</option>
                                <option value="fullstack">Full Stack Development</option>
                                <option value="fullstack">Mobile Development</option>
                                {/* <option value="dataanalysis">Microsoft Excel/Data Analysis</option>
                                <option value="powerbi">Power Bi/Python</option>
                                <option value="testing">Software Testing</option> */}
                        </select>
                        <label for="select" className="absolute duration-300 top-3 -z-1 origin-0 text-yel">Choose Expertise</label>
                        <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                        <input
                        type="text"
                        name="portfolio"
                        placeholder=" "
                        className="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="github" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-400">Link to Portfolio</label>
                        <span className="text-sm text-red-600 hidden" id="error">Field is required</span>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                        <select
                        name="select"
                        value=""
                        onclick="this.setAttribute('value', this.value);"
                        className="pt-3 pb-2 block w-full px-0 mt-0 text-gray-400 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        >
                            <option value="" selected disabled hidden>Experience</option>
                                <option value="backend" className="text-black">0-2 years</option>
                                <option value="datasci" className="text-black">3 years</option>
                                <option value="frontend" className="text-black">4 years</option>
                                <option value="fullstack" className="text-black">5 years</option>
                                <option value="dataanalysis" className="text-black">Over 5 years</option>
                        </select>
                        <label for="date" className="absolute duration-300 top-3 -z-1 origin-0 text-yel">Years of Experience</label>
                        <span className="text-sm text-red-600 hidden" id="error">Field is required</span>
                        </div>
                       
                        <div className="grid items-center justify-start text-gray-400">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="c"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                C
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="c-sharp"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                C#
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="c-plus"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                C++
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="go"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Go
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="java"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Java
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="javascript"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                JavaScript
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="julia"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Julia
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="koitlin"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Koitlin
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="matlab"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Matlab
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="nosql"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                NoSQL
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="php"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                PhP
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="python"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Python
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="r"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                R
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="ruby"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Ruby
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="rust"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Rust
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="scala"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Scala
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="sql"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                SQL
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="swift"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                Swift
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="typescript"
                                    className="mr-2 text-gray-400 border-gray-300 focus:border-gray-300 focus:ring-black"
                                />
                                TypeScript
                            </label>  
                            <label htmlFor="language" className="absolute duration-300 top-3 -z-1 origin-0 text-ppl"> Programming Languages</label>
                            <span className="text-sm text-red-600 hidden" id="error">At least one option is required</span>
                        </div> 
                    <div className="relative z-0 w-full mb-5">
                        <input
                        type="text"
                        name="linkedin"
                        placeholder=" "
                        className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="linkedin" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-400">LinkedIn Profile</label>
                        <span className="text-sm text-red-600 hidden" id="error">Field is required</span>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                        <input
                        type="text"
                        name="p"
                        placeholder=" "
                        className="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="github" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-400">GitHub Profile</label>
                        <span className="text-sm text-red-600 hidden" id="error">Field is required</span>
                    </div>
                    <div className="text-center">
                        <Button
                            id="button"
                            type="button"
                            className="w-full px-6 py-3 mb-5 mt-3 text-lg btnUp ml-[-20px]"
                        >
                            Register
                        </Button>
                    </div>
                    </form>
                </div>
            </div>         
        </div>
    )
}