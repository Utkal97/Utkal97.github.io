
export function Navbar() {
    return (
    <nav class="bg-black text-white p-4">
        <div class="flex justify-between items-center">

            <div>
                <span class="text-lg font-bold">Utkal S.</span>
            </div>

            <div class="lg:hidden">
                <button id="menu-toggle" class="text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <div class="hidden lg:flex space-x-4">
                <a href="#about" class="hover:text-gray-300">About</a>
                <a href="#experience" class="hover:text-gray-300">Experience</a>
                <a href="#projects" class="hover:text-gray-300">Projects</a>
                <a href="#skills" class="hover:text-gray-300">Skills</a>
                <a href="#contact" class="hover:text-gray-300">Contact Me</a>
            </div>
        </div>

        {/* Mobile Menu (Initially hidden) */}
        <div id="mobile-menu" class="lg:hidden hidden mt-2">
            <a href="#about" class="block py-2 px-4 text-sm hover:bg-gray-800">About</a>
            <a href="#experience" class="block py-2 px-4 text-sm hover:bg-gray-800">Experience</a>
            <a href="#projects" class="block py-2 px-4 text-sm hover:bg-gray-800">Projects</a>
            <a href="#skills" class="block py-2 px-4 text-sm hover:bg-gray-800">Skills</a>
            <a href="#contact" class="block py-2 px-4 text-sm hover:bg-gray-800">Contact Me</a>
        </div>
        
    </nav>)
}