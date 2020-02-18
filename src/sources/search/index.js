import { apiList } from './api-registry/api-list';
import HttpLib from '../../network'
import { getApiEnv } from '../../config'

/*
 function which makes api call to get al the suggestions
*/
const apiEnv = getApiEnv();
const getSuggestions = async ({keyWord = '', noOfSuggestions=10}) => {
    let response = {}
    let apiPath = apiList['apis']['suggestions']['route']
   try{
    const httpLib = new HttpLib()
    response = await httpLib.get(`${apiEnv}${apiPath}?keyWord=${keyWord}&noOfSuggestions=${noOfSuggestions}`, {});
    return new Promise(resolve => resolve(response))

   }catch(err){
      return new Promise((resolve, reject) => reject(err))
   }
}

/*
 function which makes api call to get summary,author,title infor for the selected suggestion
*/
const searchBooks = async (inputObj = {}) => {
    let response = {}
    let apiPath = apiList['apis']['searchBooks']['route']
   try{
    const httpLib = new HttpLib()
    response = await httpLib.get(`${apiEnv}${apiPath}?id=${inputObj['id']}`);
    return new Promise(resolve => resolve(response))

   }catch(err){
      return new Promise((resolve, reject) => reject(err))
   }
}

export {
    getSuggestions,
    searchBooks
}