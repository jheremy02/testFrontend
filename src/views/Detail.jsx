import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Footer from '../components/Footer'
import { Button, Card, Label, Select } from 'flowbite-react'
import { FaCartPlus } from "react-icons/fa";

function Detail() {
    return (
        <div><NavbarComponent></NavbarComponent>


            <div className='p-6 bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-8'>
                <Card className="">
                    <div>
                        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                        <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
                                        <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" />
                                    </div>

                                    <div className="mt-6 sm:mt-8 lg:mt-0">
                                        <h1
                                            className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                                        >
                                            Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
                                            Mac OS, Pink
                                        </h1>
                                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                            <p
                                                className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                                            >
                                                $1,249.99
                                            </p>

                                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                                <div className="flex items-center gap-1">
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                        />
                                                    </svg>
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                        />
                                                    </svg>
                                                </div>
                                                <p
                                                    className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                                                >
                                                    (5.0)
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                                >
                                                    345 Reviews
                                                </a>
                                            </div>
                                        </div>
                                        <br></br>

                                        <p className="mb-6 text-gray-500 dark:text-gray-400">
                                            Studio quality three mic array for crystal clear calls and voice
                                            recordings. Six-speaker sound system for a remarkably robust and
                                            high-quality audio experience. Up to 256GB of ultrafast SSD storage.
                                        </p>
                                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                                        <div className='flex gap-4'>
                                            <div className="max-w-md">
                                                <div className="mb-2 block">
                                                    <Label htmlFor="countries" value="Color" />
                                                </div>
                                                <Select id="countries" required>
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>France</option>
                                                    <option>Germany</option>
                                                </Select>
                                            </div>
                                            <div className="max-w-md">
                                                <div className="mb-2 block">
                                                    <Label htmlFor="countries" value="Almacenamiento" />
                                                </div>
                                                <Select id="countries" required>
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>France</option>
                                                    <option>Germany</option>
                                                </Select>
                                            </div>
                                            <div className='w-full'>
                                                <div className="mb-2 block">
                                                    <Label className='opacity-0' htmlFor="countries" value="Almacenamiento" />
                                                </div>
                                                <Button className='w-full' color="blue"><div className='flex gap-2 justify-center items-center'><FaCartPlus className='text-lg' />Agregar</div></Button>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Card>
            </div>

            <Footer></Footer></div>
    )
}

export default Detail
