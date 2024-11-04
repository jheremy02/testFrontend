import React from 'react'
import InputSearcher from './InputSearcher'
import CardItem from './CardItem'

function SectionItems() {
    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

                <div className="  justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                    <div>
                        <h2 className=" text-xl font-semibold text-gray-900 dark:text-white sm:text-3xl">Productos</h2>
                    </div>
                    <div className="flex">
                        <InputSearcher></InputSearcher>
                    </div>
                </div>
                <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">

                    <CardItem></CardItem>
                    <CardItem></CardItem>

                </div>

            </div>

        </section>
    )
}

export default SectionItems