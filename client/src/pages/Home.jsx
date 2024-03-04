import { Link } from "react-router-dom"
import HomeCarousel from "../Carousels/HomeCarousel"
import { MostVisitedMonuments, HomeCuisine } from '../assets/Home'

function Home() {

    return (
        <>
            {/* Home Carousel */}
            <div className="h-[70vh]">
                <div className="h-full">
                    <HomeCarousel />
                </div>
            </div>

            {/* Most visited Monuments */}
            <div className="bg-slate-300 py-10">
                <div className="roboto-regular text-2xl font-semibold ml-4">Most Visited Monuments</div>
                <div className="flex flex-wrap gap-5 justify-center m-auto">
                    {
                        MostVisitedMonuments.map((item, index) => {
                            return (
                                <div key={index} className="flex justify-center">
                                    <img src={item.Url} alt={item.Name}
                                        className="h-[300px] w-[90%] sm:size-[200px] md:size-[170px] rounded-md"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Indian Cuisine */}
            <div className="bg-slate-300 py-10">
                <div className="roboto-regular text-2xl font-semibold ml-4">5th Best Cuisine in the World</div>
                <div className="flex flex-wrap gap-5 justify-center m-auto">
                    {
                        HomeCuisine.map((item, index) => {
                            return (
                                <div key={index} className="flex justify-center">
                                    <img src={item.image} alt='food'
                                        className="h-[300px] w-[90%] sm:size-[200px] md:size-[170px] rounded-md"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* More about India */}
            <Link to='/india' className="flex flex-col md:flex-row gap-10 bg-pink-500 h-[200px] justify-center items-center">
                <div className="roboto-regular text-2xl font-semibold ml-4 gotu-regular">Want to get more Insight about India</div>
                <button className="bg-gray-600 w-[150px] py-2 text-white hover:bg-blue-600 hover:text-black rounded-xl">Click here</button>
            </Link>
        </>
    )
}

export default Home