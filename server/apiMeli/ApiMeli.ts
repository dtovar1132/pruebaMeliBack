import { httpRequest } from "../httpRequest/HttpRequest";
import { ListProducts, Result } from "../models/apiMeli/apiMeliModels";



export class ApiMeli {
    private urlBase = 'https://api.mercadolibre.com/';

    async search(query:string):Promise<ListProducts> {
        return  await httpRequest.get(`${this.urlBase}sites/MLA/search?q=${query}`);
    }

    async getProduct(productId: string ){
        let product:Result;
        product = await httpRequest.get(`${this.urlBase}items/${productId}`);
        
        let description: any;
        try{
            description = await httpRequest.get(`${this.urlBase}items/${productId}/description`);
        }catch(err){
            description = {
                plain_text: ''
            }
        }
        
        return {
            ...product,
            plain_text: description.plain_text
        } as Result
    } 
}

export const apiMeliService = new ApiMeli();