import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="bg-pink-400 h-[70px] flex items-center px-5" >
            <Link to='/'>
                <div className="flex items-center gap-1 text-2xl font-bold font-serif">
                    <img src="india_travel_logo.jpg" alt="App Logo"
                        className="size-[50px] rounded-full border-2 border-pink-700"
                    />
                    <div>India_Travellica</div>
                </div>
            </Link>
        </div>
    )
}

export default NavBar