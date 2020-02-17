import axios from 'axios';
const defaultApiOptions = (options) => {
    return Object.assign({        
        validateStatus: (status) => {
            return status < 400
        },
        transformRequest: [(data) => {
            data = {}
            return JSON.stringify(data)
        }],
        transformResponse: [(data) => {
            // Do whatever you want to transform the response
            return data
        }]
    }, (options || {}))
}

const buildErrorObj = (error) => {
   const defaultError = {
       errorCode: '1',
       errorMsh : 'something went wrong'
   }

   return Object.assign({}, defaultError, error);
}

const dataToReturn = (res) => {
  return res && res['data'] ? JSON.parse(res['data']) : null;

}

class HttpLib {
    constructor() {
        this.axios = axios.create({});
    }

    get(apiPath, options) {
      return  this.axios({
            method: 'GET',
            url: apiPath,
            ...defaultApiOptions(options)
        }).then((res) => {
          return new Promise(resolve => resolve(dataToReturn(res)))
        })
        .catch(err => {
            return new Promise((resolve,reject) => reject(buildErrorObj(err)))
        })
    }

    post(apiPath, options) {
      return  this.axios({
            method: 'POST',
            url: apiPath,
            ...defaultApiOptions(options)
        }).then((res) => {
            return new Promise(resolve => resolve(res))
          })
          .catch(err => {
              return new Promise((resolve,reject) => reject(buildErrorObj(err)))
          })
    }

}

export default HttpLib