import client from "../api/client";

export async function getProductsService(params) {
    const response = await client.get('/api/product')
    return response
}