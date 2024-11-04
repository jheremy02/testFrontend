import { Button, Navbar } from 'flowbite-react'
import { IoCartOutline } from "react-icons/io5";


function NavbarComponent() {
    return (
        <Navbar fluid >
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Lutxo</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button className='relative' size='xs' color="light"><div className='flex justify-center items-center'><IoCartOutline className='text-xl font-bold' /><div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">8</div></div></Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent