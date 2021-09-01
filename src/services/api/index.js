import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'http://localhost:1996/',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
});

const Api2 = Axios.create({
    baseURL: 'http://localhost:1337/',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
});


const onSucess = res => {
    try {
        console.log(res)
        return {
            data: res.data,
            error: null
        }
    } catch (err) {
        return {
            data: null,
            error: err.response ? err.response.data : err.message,
        }
    }
};

const onRejected = err => {
    try {
        console.log(err)
        if (err.response) {
            if( Array.isArray(err.response.data.error) ){
                return{
                    data: null,
                    error: err.response.data.error.toString(),
                };
            }
            return {
                data: null,
                error: err.response.data,
            };
        }
        return {
            data: null,
            error: "Falha na conexão!" ,
        };
    } catch (err) {
        return {
            data: null,
            error: err.response ? err.response.data : err.message,
        }
    }
}

Api.interceptors.response.use(onSucess, onRejected);

Api2.interceptors.response.use(onSucess, onRejected);

export default Api;
export { Api2 } ;
