import HomeCarousel from "../Carousels/HomeCarousel"
import NavBar from "../components/NavBar"

function Home() {
    console.log(window.innerWidth);

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="h-[60vh]">
                <div className="h-full">
                    <div>Top Tourist Attraction</div>
                    <HomeCarousel />
                </div>
            </div>
        </>
    )
}

export default Home