import { apiList } from './api-registry/api-list';
import HttpLib from '../../network'
const getSuggestions = async ({keyWord = ''}) => {
    let response = {}
    let apiPath = apiList['apis']['suggestions']['route']
   try{
    const httpLib = new HttpLib()
    response = await httpLib.get(`${apiPath}?keyWord=${keyWord}`, {});
    return new Promise(resolve => resolve(response))

   }catch(err){
      return new Promise((resolve, reject) => reject(err))
   }
}

const searchBooks = async (inputObj = {}) => {
    let response = {}
    let apiPath = apiList['apis']['searchBooks']['route']
   try{
    const httpLib = new HttpLib()
    response = await httpLib.get(`${apiPath}?id=${inputObj['id']}`);
    return new Promise(resolve => resolve(response))

   }catch(err){
      return new Promise((resolve, reject) => reject(err))
   }
}

export {
    getSuggestions,
    searchBooks
}