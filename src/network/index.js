import axios from 'axios';
// const defaultApiOptions = (options) => {
//     return Object.assign({
//         validateStatus: (status) => {
//             return status < 400
//         },
//         transformRequest: [(data) => {
//             data = {}
//             return JSON.stringify(data)
//         }],
//         transformResponse: [(data) => {
//             // Do whatever you want to transform the response            
//             return data
//         }]
//     }, (options || {}))
// }

const buildErrorObj = (error) => {
    const defaultError = {
        errorCode: '1',
        errorMsh: 'something went wrong'
    }

    return Object.assign({}, defaultError, error);
}

const dataToReturn = (res) => {
    return res && res['data']

}

class HttpLib {
    constructor() {
        this.axios = axios.create({});
    }

    get(apiPath, options) {
        return axios.get(apiPath).then((res) => {
            return new Promise(resolve => resolve(dataToReturn(res)))
        })
            .catch(err => {
                return new Promise((resolve, reject) => reject(buildErrorObj(err)))
            })
    }
    post(apiPath) {

    }

}

export default HttpLib