import "../CSS/animate.min.css"


export const Brands = () => {
    return(
        <>
            <div class="container my-24 px-6 mx-auto">
  
  <section class="mb-32 text-gray-800 text-center border">
    <h2 class="text-white text-2xl font-light mb-12 animate__animated animate__fadeIn animated__delay__4">Learn important tools and master your software skills</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
      <div class="mb-12 lg:mb-0">
        <img
          src={require("../assets/images/logo/git.png")}
          class="img-fluid grayscale px-6 md:px-12" width="50%"
          alt="git - logo"
        />
      </div>

      <div class="mb-12 lg:mb-0">
        <img
          src={require("../assets/images/logo/docker.png")}
          class="img-fluid grayscale px-6 md:px-12" width="50%"
          alt="docker - logo"
        />
      </div>

      <div class="mb-12 lg:mb-0">
        <img
          src={require("../assets/images/logo/codenvy.png")}
          class="img-fluid grayscale px-6 md:px-12" width="70%"
          alt="codenvy - logo"
        />
      </div>

      <div class="mb-12 lg:mb-0">
        <img
          src={require("../assets/images/logo/azure.png")}
          class="img-fluid grayscale px-6 md:px-12" width="60%"
          alt="azure - logo"
        />
      </div>

      
    </div>
  </section>
  
</div>
        </>
    )
}

