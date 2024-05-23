import { Link } from "react-router-dom";

export const Footer = () => {
    return(
        <div className="max-w-2xl mx-auto">
            <footer className="p-4 bg-blu rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
                <span className="text-sm text-black sm:text-center">
                    &copy; 2024 &nbsp;
                         <Link to="https://progrowing.org" className="hover:underline" target="_blank">
                            ProGrowing™
                        </Link>. 
                    All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                    <li>
                        <Link to="https://forum.progrowing.org" className="mr-4 text-sm text-ppl hover:underline md:mr-6">
                            Forum
                        </Link>
                    </li>
                    <li>
                        <Link to="/https://learn.progrowing.org" className="mr-4 text-sm text-ppl hover:underline md:mr-6">
                            Learning Center
                        </Link>
                    </li>
                    <li>
                        <Link to="/taskify.progrowing.org" className="mr-4 text-sm text-ppl hover:underline md:mr-6">
                            Taskify
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
                    
    )
}