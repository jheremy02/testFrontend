import { Button, Navbar } from 'flowbite-react'
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { cartSelector } from '../features/cartSlice';


function NavbarComponent() {
    const { itemsSelected } = useSelector(cartSelector)
    return (
        <Navbar fluid >
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Lutxo</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button className='relative' size='xs' color="light"><div className='flex justify-center items-center'><IoCartOutline className='text-xl font-bold' /> {itemsSelected.length !== 0 && <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{itemsSelected.length}</div>} </div></Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent