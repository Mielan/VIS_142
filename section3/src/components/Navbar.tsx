import { Fragment } from 'react'
import { Link } from 'react-router-dom'
//import Exit from "../assets/logout.png"
//import LogoWhite from "../assets/ProjectLogoWhite.png"

export default function Navbar() {
	return (
		<>
			<nav className="bg-blue-dark shadow-lg">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-7">

							<Link to="/" className="flex items-center py-4 px-2">
									{/* <img src={LogoWhite} alt="Logo" className="h-8 w-8 mr-2" /> */}
									<span className="font-semibold font-Overpass text-white text-lg">VIS 142</span>
							</Link>


							<div className="hidden md:flex items-center space-x-1">
								<Link to="/threejs1"
									className="py-4 px-2 text-gray-300 font-Overpass hover:text-blue-light transition duration-300 ">
									threejs1
								</Link>

								<Link to="/p5js1"
									className="py-4 px-2 text-gray-300 font-Overpass hover:text-blue-light transition duration-300">
									p5js1
								</Link>

								<Link to="/"
									className="py-4 px-2 text-gray-300 font-Overpass hover:text-blue-light transition duration-300">
									Mainproject
								</Link>

								<Link to="/"
									className="py-4 px-2 text-gray-300 font-Overpass hover:text-blue-light transition duration-300">
									OvO
								</Link>

							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}