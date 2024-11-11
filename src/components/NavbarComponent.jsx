import { Breadcrumb, Button, Dropdown, Navbar } from 'flowbite-react'
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../features/cartSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { setTheme, themeUiSelector } from '../features/uiSlice';
import ToggleModeUi from './utils/ToggleModeUi';
import { useEffect, useState } from 'react';
import { countElements } from '../utils/functions';
import { productSelector } from '../features/productSlice';
import logo from '../assets/logo.png'

function NavbarComponent() {
    const { itemsSelected } = useSelector(cartSelector);
    const navigate = useNavigate();
    const [itemsFormatted, setItemsFormatted] = useState([])
    const { pathname } = useLocation();
    const { products } = useSelector(productSelector);
    const dispatch = useDispatch();
    const themeUi = useSelector(themeUiSelector);
    useEffect(() => {

        let itemsFormatted = []
        const keysSelected = countElements(itemsSelected);
        keysSelected.forEach(item => {

            const found = products.find(element => element.id === item.id);
            if (found) {
                itemsFormatted.push({ ...found, ...item })
            }

        })
        setItemsFormatted(itemsFormatted)
    }, [itemsSelected])
    return (
        <Navbar fluid >
            <Navbar.Brand className='cursor-pointer' onClick={() => {
                navigate('/')
            }}>
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Lutxo</span>
            </Navbar.Brand>
            <div className="pl-10 flex-grow flex justify-between items-center">
                <Breadcrumb aria-label="Default breadcrumb example">
                    {pathname !== '/' ? <Breadcrumb.Item href={'#'} onClick={() => {
                        navigate('/')
                    }} icon={HiHome}>
                        Vista Principal
                    </Breadcrumb.Item> : <Breadcrumb.Item icon={HiHome}>
                        Vista Principal
                    </Breadcrumb.Item>}
                    {pathname.includes('/detail') && <Breadcrumb.Item >Detalle</Breadcrumb.Item>}

                </Breadcrumb>
                <div className='flex gap-6'><ToggleModeUi defaultChecked={themeUi === 'dark' ? true : false} onChange={(e) => {

                    if (e.target.checked === true) {
                        dispatch(setTheme('dark'))
                    } else {
                        dispatch(setTheme('light'))

                    }
                }} ></ToggleModeUi>
                    <Dropdown className='w-60' label="" dismissOnClick={false} size="xl" renderTrigger={() => <Button className='relative' size='xs' color="light"><div className='flex justify-center items-center'><IoCartOutline className='text-xl font-bold' /> {itemsSelected.length !== 0 && <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{itemsSelected.length}</div>} </div></Button>}>
                        <Dropdown.Header className='flex flex-col gap-3'>
                            {itemsFormatted.map(item => {
                                return <div key={item.id} className="grid grid-cols-2">
                                    <div>
                                        <h5 className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white">{item.model}</h5>
                                        <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">${item.price}</p>
                                    </div>

                                    <div className="flex items-center justify-end gap-6">
                                        <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Cant. : {item.count}</p>
                                    </div>
                                </div>
                            })}

                        </Dropdown.Header>
                    </Dropdown>
                </div>

            
            </div>
           
        </Navbar>
    )
}

export default NavbarComponent