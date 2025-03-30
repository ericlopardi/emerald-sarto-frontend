import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="bg-[#f5f5dc] shadow-sm border-b fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-19">
                    {/* Left Nav Links */}
                    <nav className="hidden md:flex space-x-6">
                        <Link to="/" className="relative group text-medium font-small text-emerald-800 hover:text-black tracking-wide">
                            HOME
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-800 transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/products" className="relative group text-medium font-small text-emerald-800 hover:text-black tracking-wide">
                            SHOP
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-800 transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/about" className="relative group text-medium font-small text-emerald-800 hover:text-black tracking-wide">
                            ABOUT
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-800 transition-all duration-300 group-hover:w-full"></span></Link>
                    </nav>

                    {/* Center Logo */}
                    <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
                        <Link to="/" className="text-5xl font-bold tracking-tight text-emerald-800 font-[Imperial_Script]">
                            Emerald Sarto
                        </Link>
                    </div>

                    {/* Right Nav Links */}
                    <nav className="hidden md:flex space-x-6">
                        <Link to="/login" className="relative group text-medium font-small text-emerald-800 hover:text-black tracking-wide">
                            LOG IN
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-800 transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/register" className="relative group text-medium font-small text-emerald-800 hover:text-black tracking-wide">
                            SIGN UP
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-800 transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/search" className="relative group text-medium font-small text-emerald-800 hover:text-black tracking-wide">
                            SEARCH
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-800 transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link to="/cart" className="relative group text-medium font-small text-emerald-800 hover:text-black tracking-wide">
                            CART
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-800 transition-all duration-300 group-hover:w-full"></span></Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
