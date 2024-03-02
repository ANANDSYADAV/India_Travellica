import HomeCarousel from "../Carousels/HomeCarousel"
import { MostVisitedMonuments, HomeCuisine } from '../assets/Home'

function Home() {

    return (
        <>
            <div className="h-[70vh]">
                <div className="h-full">
                    <HomeCarousel />
                </div>
            </div>
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
        </>
    )
}

export default Home