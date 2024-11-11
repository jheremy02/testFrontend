import client from "../api/client";

export async function getProductsService() {
    const response = await client.get('/api/product')
    return response
}

export async function getProductByIdService(id) {
    try {
        const response = await client.get('/api/product/' + id)
    return response
    } catch (error) {
        const {data}=error
        throw new Error(data?.message || 'Algo salio mal')
    }
    
}

export async function addToCartService(data) {
    const response = await client.post('/api/cart', data)
    return response
}