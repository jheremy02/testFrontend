import { Button } from 'flowbite-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

function NotFound() {
    const navigate = useNavigate()
    return (
        <div className=' flex flex-col  min-h-screen bg-white dark:bg-gray-900' >
            <section className='flex-grow'>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl  text-gray-900 dark:text-white">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white md:text-4xl ">No encontrado</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Lo sentimos, no podemos encontrar esa página. Encontrarás mucho para explorar en la página de inicio.
                        </p>
                        <Button onClick={() => {
                            navigate('/');
                        }} className='w-full' color='blue'>Regresar al Inicio</Button>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>

    )
}

export default NotFound