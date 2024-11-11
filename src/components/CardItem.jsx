
import { Link, useNavigate } from 'react-router-dom'

function CardItem({ product }) {
    const navigate = useNavigate();

    const goToProducDetail = () => {
        // Redirige a la ruta con el ID del usuario
        console.log(`/detail/${product.id}`)
        navigate(`/detail/${product.id}`);
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="h-56 w-full">
                <a>
                    <Link to={`/detail/${product.id}`}>
                        <img className="mx-auto rounded-md h-full dark:hidden" src={product.imgUrl} alt="Product Image" />
                        <img className="mx-auto rounded-md hidden h-full dark:block" src={product.imgUrl} alt="Product Image" />
                    </Link>
                </a>


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


                </div>
            </div>
        </div>
    )
}

export default CardItem