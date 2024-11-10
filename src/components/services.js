import client from "../api/client";

export async function getProductsService() {
    const response = await client.get('/api/product')
    return response
}

export async function getProductByIdService(id) {
    const response = await client.get('/api/product/' + id)
    return response
}

export async function addToCartService(data) {
    const response = await client.post('/api/cart', data)
    return response
}