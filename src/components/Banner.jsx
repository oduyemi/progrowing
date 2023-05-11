const Banner = () => {
    return(
        <>
            <div className="banner  w-full md-2/3 px-7 mx-auto relative">
                <div className="banner-description w-full md-1/2 p-3 text-center">
                    <h2 className="mb-6 text-4xl font-semi-bold text-white">
                        Mentoring for Software Engineers
                    </h2>
                    <p id="introSubTitle" className="text-lg text-gray-400 py-1">
                        Start your career journey now
                    </p>
                </div>
            <div className="btn-container text-center">
                <button>Find a Mentor</button>
            </div>
            
            <div className="banner-image w-full md-1/2 p-3 flex justify-center">
                <img src={require("../assets/images/photos/dev1.jpg")} alt="hero banner" className="max-h-80" />
            </div>
        </div>
    </>
    )
}

export default Banner;