import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function AboutUs() {
    return (
        <div className="w-[80%] md:w-[90%] xl:w-[80%] m-auto my-10 flex flex-col gap-10">
            <div className="flex gap-10 flex-col md:flex-row items-center">
                <img src="https://images.pexels.com/photos/19740567/pexels-photo-19740567/free-photo-of-my-image.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="anand"
                    className="h-[300px] md:h-[360px] lg:h-[300px] w-[300px] rounded-lg"
                />
                <div className="flex flex-col gap-4 md:gap-2 lg:gap-6 w-[100%] md:w-[80%] text-center md:text-start">
                    <div>
                        <h1 className="font-semibold text-4xl">Anand Yadav</h1>
                        <h2 className="text-slate-700 text-xl">NITA CSE'25</h2>
                    </div>
                    <div className="text-lg">
                        A dedicated web developer and tech enthusiast with an insatiable curiosity for all things digital. As a student of the digital age, I'm on a mission to blend my passion for technology with the art of crafting seamless digital experiences. Join me on this exhilarating journey as we shape the future of the digital landscape together!
                    </div>
                    <div className="flex gap-8 text-3xl text-black justify-center md:justify-start">
                        <a target="_blank" href="https://www.linkedin.com/in/anand-yadav-08b7b2230/">
                            <FaLinkedin className="bg-white cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                        </a>
                        <a target="_blank" href="https://github.com/ANANDSYADAV">
                            <FaGithub className="bg-white cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/anandsyadav257/?hl=en">
                            <FaSquareInstagram className="bg-white cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs