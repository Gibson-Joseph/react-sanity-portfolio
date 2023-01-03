import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const NavBar = () => {
    const activeStyleName = {
        color: "white"
    }
    const activeStyle = {
        color: "rgb(237, 150, 150)",
        backgroundColor: "rgb(191, 71, 71)"
    }
    return (
        <header className='bg-red-600'>
            <div className='container mx-auto flex justify-between '>
                <nav className="flex">
                    <NavLink to={"/"} style={({ isActive }) => isActive ? activeStyleName : undefined} className="inline-flex items-center py-7 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Gibson
                    </NavLink>
                    <NavLink to={"post"} style={({ isActive }) => isActive ? activeStyle : undefined} className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Blog Post
                    </NavLink>
                    <NavLink to={"project"} style={({ isActive }) => isActive ? activeStyle : undefined} className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Project
                    </NavLink>
                    <NavLink to={"about"} style={({ isActive }) => isActive ? activeStyle : undefined} className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Anout me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/home" className="mr-4" target={"_blank"} fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.youtube.com/channel/UCng-ThtIJBqfKP-sTFegGJg" className="mr-4" target={"_blank"} fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/feed/?trk=joogle" className="mr-4" target={"_blank"} fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}

export default NavBar