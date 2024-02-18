import React, { useEffect} from "react";
import { MentorForm } from "../../components/MentorForm";
import { Footer } from "../../components/Footer";

const MentorRegister = () => {
    useEffect(() => {
        document.body.classList.add("formpage");
        return () => {
          document.body.classList.remove("formpage");
        };
      }, []);
    return(
        <>
            <MentorForm />
            <Footer />
        </>
    )
}

export default MentorRegister;