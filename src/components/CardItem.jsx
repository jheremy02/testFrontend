import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CardItem({ product }) {
    const navigate = useNavigate();

    const goToProducDetail = () => {
        // Redirige a la ruta con el ID del usuario
        navigate(`/detail/${product.id}`);
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="h-56 w-full">
                <a onClick={() => { }} >

                </a>

                <Link to={`/detail/${product.id}`}>
                    <img className="mx-auto h-full dark:hidden" src={product.imgUrl} alt="" />
                    <img className="mx-auto hidden h-full dark:block" src={product.imgUrl} alt="" />
                </Link>
            </div>
            <div className="pt-6">


                <a onClick={() => {
                    goToProducDetail()
                }} className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{product.model}</a>

                <ul className=" flex items-center gap-4">
                    <li className="flex items-center gap-2">
                        <p className="text-base font-semibold text-gray-500 dark:text-gray-400">{product.brand}</p>
                    </li>


                </ul>

                <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">S/. {product.price}</p>

                    <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem