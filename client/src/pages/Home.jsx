import HomeCarousel from "../Carousels/HomeCarousel"

function Home() {
    return (
        <div className="h-[60vh]">

            <div className="h-full">
                <div>Top Tourist Attraction</div>
                <HomeCarousel />
            </div>
        </div>
    )
}

export default Home