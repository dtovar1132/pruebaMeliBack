import axios from "axios";
import { IHttpRequest } from "./IHttpeRequest";

export class HttpRequest implements IHttpRequest {
   get = async (url: string) => {
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(err){
        throw err;
    }  
  }
}

export const httpRequest = new HttpRequest();
