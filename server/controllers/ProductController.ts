import { Request, Response } from "express";
import { apiMeliService } from "../apiMeli/ApiMeli";
import { ResponseListProduct, ResponseProduct } from "../models/app/Response.interface";
import { Result } from "../models/apiMeli/apiMeliModels";

export class ProductController {

    async searchProduct(req: Request, res: Response){
        const {q} = req.query;
        if(!q){
            return res.status(400).json({})
        }
        try{
            const resultMeli = await apiMeliService.search(q as string)
            const partilaProducts = resultMeli.results.slice(0, 4);
            const categories = resultMeli.available_filters.find(av=> av.id === 'category')?.values;
            const response:ResponseListProduct = {
                author: {
                    name: 'Deiby',
                    lastname: 'tovar'
                },
                categories: categories?.map(c => c.name)??[],
                items: partilaProducts.map(pp => ({
                    condition: pp.condition,
                    title: pp.title,
                    free_shipping: pp.shipping.free_shipping,
                    id: pp.id,
                    picture: pp.thumbnail,
                    price: {
                        amount: pp.sale_price.amount,
                        currency: pp.sale_price.currency_id,
                        decimals: 0
                    }
                }))
            }
            return res.status(200).json(response)
        }catch(err){
            return res.status(500).json(err);
        }
    }

    async getProduct(req: Request, res: Response){
        const productId = req.params.id;
        if(!productId){
            return res.status(400).json({})
        }
        try{
            const produtMeli:Result = await apiMeliService.getProduct(productId);
            const response: ResponseProduct = {
                author: {
                    name: 'Deiby',
                    lastname: 'tovar'
                },
                item: {
                    condition: produtMeli.condition,
                    free_shipping: produtMeli.shipping.free_shipping,
                    id: produtMeli.id,
                    picture: produtMeli.pictures.length? produtMeli.pictures[0].url: '',
                    price: {
                        currency: produtMeli.currency_id,
                        amount: produtMeli.price,
                        decimals: 0
                    },
                    title: produtMeli.title,
                    description: produtMeli.plain_text,
                    sold_quantity: produtMeli.initial_quantity
                }
            }
            return res.status(200).json(response);
        }catch(err){
            return res.status(400).json({})
        }
        
    }   
}

export const productController = new ProductController()