import { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Footer from '../components/Footer'
import { Button, Card, Label, Select, Spinner } from 'flowbite-react'
import { FaCartPlus } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { addToCartService, getProductByIdService } from '../components/services';
import { toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';
import { addItemAction } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addProductSelectedAction, productSelector } from '../features/productSlice';
import { IoIosArrowBack } from 'react-icons/io';
import SkeletonItemDetail from '../components/SkeletonItemDetail';

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { productsSelected } = useSelector(productSelector);

    const [product, setProduct] = useState(null)
    const [isLoading, setLoading] = useState(false);
    const [loadingItem, setLoadingItem] = useState(false);
    const navigate = useNavigate();
    const { control, setValue, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            product: null
        }
    });
    const [colors, setColors] = useState([])
    const [storages, setStorages] = useState([])

    async function manageAddToCart(data) {
        try {
            setLoading(true)
            const { color, storage, product } = data
            if (!product) {
                throw new Error('Seleccione un producto')
            }
            const response = await addToCartService({
                id: product.id,
                colorCode: color,
                storageCode: storage
            })
            dispatch(addItemAction({
                id: product.id,
                colorCode: color,
                storageCode: storage
            }))
            toast.success('Producto agregado!')
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        (async () => {
            try {
                reset();
                setLoadingItem(true)
                let productSearched = null;
                const found = productsSelected.find(item => item.id === id);

                if (found) {
                    productSearched = found
                } else {
                    const response = await getProductByIdService(id);
                    productSearched = response
                    dispatch(addProductSelectedAction(productSearched))
                }

                setProduct(productSearched)
                setValue('product', productSearched);
                const { options } = productSearched
                setColors(options.colors)
                setStorages(options.storages)
                if (options.colors.length === 1) {
                    setValue('color', options.colors[0].code);

                }

                if (options.storages.length === 1) {
                    setValue('storage', options.storages[0].code);
                }
            } catch (error) {
                toast.error(error.message);
                navigate('/')
            } finally {
                setLoadingItem(false)
            }
        })()
    }, [id])

    return (
        <div className='min-h-screen bg-gray-50 dark:bg-gray-900  '><NavbarComponent></NavbarComponent>


            <div className='p-6  py-8 antialiased  md:py-8'>
                <Card className="">

                    {loadingItem ? <SkeletonItemDetail></SkeletonItemDetail> : <div>
                        <Button onClick={(e) => {
                            navigate('/')
                        }} color="light"><div className='flex justify-center items-center gap-2'><IoIosArrowBack className='font-bold' />Atrás</div></Button>
                        <section className="py-8  antialiased">
                            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                                <div className="lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-16">
                                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                                        <img className="w-full rounded-md dark:hidden" src={product?.imgUrl || ''} alt="" />
                                        <img className="w-full rounded-md hidden dark:block" src={product?.imgUrl || ''} alt="" />
                                    </div>

                                    <div className="mt-6 sm:mt-8 lg:mt-0 col-span-2">
                                        <div className='flex gap-10'>
                                            <div>
                                                <h1
                                                    className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                                                >
                                                    {product ? product.model : ''}
                                                </h1>
                                                <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">{product?.brand || ''} </p>
                                            </div>

                                            <div>
                                                <div className="sm:items-center sm:gap-4 sm:flex">
                                                    <p
                                                        className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                                                    >
                                                        ${product?.price || ''}
                                                    </p>


                                                </div>
                                            </div>
                                        </div>


                                        <br></br>

                                        <ul className=" flex flex-wrap gap-x-12 gap-y-4 list-outside list-disc text-base font-normal text-gray-500 dark:text-gray-400">
                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white">Marca: </span>
                                                {product ? product.brand : ''}
                                            </li>
                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> Modelo: </span>
                                                {product ? product.model : ''}
                                            </li>

                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> Precio: </span>
                                                ${product ? product.price : ''}
                                            </li>

                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> CPU: </span>
                                                {product ? product.cpu : ''}
                                            </li>

                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> RAM: </span>
                                                {product ? product.ram : ''}
                                            </li>
                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> Sistema Operativo: </span>
                                                {product ? product.os : ''}
                                            </li>
                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> Resolución de Pantalla: </span>
                                                {product ? product.displaySize : ''}
                                            </li>
                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> Batería: </span>
                                                {product ? product.battery : ''}
                                            </li>
                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> Cámara Primaria: </span>
                                                {product ? (Array.isArray(product.primaryCamera) ? product.primaryCamera[0] : product.primaryCamera) : ''}
                                            </li>
                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> Cámara Secundaria: </span>
                                                {product ? (Array.isArray(product.secondaryCmera) ? product.secondaryCmera[0] : product.secondaryCmera) : ''}
                                            </li>
                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> Dimensiones: </span>
                                                {product ? product.dimentions : ''}
                                            </li>
                                            <li>
                                                <span className="font-semibold text-gray-900 dark:text-white"> Peso: </span>
                                                {product ? product.weight : ''}
                                            </li>
                                        </ul>
                                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                                        <div className='grid gap-4 lg:grid-cols-4'>
                                            <div className="max-w-md">
                                                <div className="mb-2 block">
                                                    <Label htmlFor="countries" value="Color" />
                                                </div>
                                                <Controller
                                                    control={control}
                                                    rules={{ required: 'Este campo es requerido' }}
                                                    defaultValue={''}
                                                    name='color'
                                                    render={({ field }) => {
                                                        return <Select {...field} id="color" >
                                                            <option value={''}>Seleccione</option>
                                                            {colors.map((item) => {
                                                                return <option key={item.code} value={item.code}>{item.name}</option>
                                                            })}
                                                        </Select>
                                                    }}
                                                />
                                                {errors.color && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.color.message}</p>}
                                            </div>
                                            <div className="max-w-md">
                                                <div className="mb-2 block">
                                                    <Label htmlFor="storage" value="Almacenamiento" />
                                                </div>
                                                <Controller
                                                    control={control}
                                                    defaultValue={''}
                                                    rules={{ required: 'Este campo es requerido' }}
                                                    name='storage'
                                                    render={({ field }) => {
                                                        return <Select {...field} id="storage" >
                                                            <option value={''}>Seleccione</option>
                                                            {storages.map((item) => {
                                                                return <option key={item.code} value={item.code}>{item.name}</option>
                                                            })}
                                                        </Select>
                                                    }}
                                                />
                                                {errors.storage && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.storage.message}</p>}

                                            </div>
                                            <div className='w-full col-span-2'>
                                                <div className="mb-2 block">
                                                    <Label className='opacity-0' htmlFor="countries" value="Almacenamiento" />
                                                </div>
                                                <Button disabled={isLoading} onClick={() => {
                                                    handleSubmit(manageAddToCart)()
                                                }} className='w-full' color="blue">{isLoading ? <div><Spinner aria-label="Alternate spinner button example" size="sm" />
                                                    <span className="pl-3">Cargando...</span></div> : <div className='flex gap-2 justify-center items-center'><FaCartPlus className='text-lg' />Agregar</div>}</Button>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>}

                </Card>
            </div>

            <Footer></Footer></div>
    )
}

export default Detail
