import axios from 'axios';

export function getProducts (){
    return async (dispatch)=>{
        try{
            setTimeout(async () => {}, 1000);
            const res = await axios.get(`https://631248c9f5cba498da905dc6.mockapi.io/products`)
            dispatch({
                type:'GET_PRODUCT',
                payload:res.data})
        }catch(err){
            console.log(err)
        }
    }
}
export function getByCategory (category){
    
    return {
        type:'GET_BY_CATEGORY',
        payload:category
    }
}

export function resetCategory (){
    return {
        type:'RESET_CATEGORY'
    }
}

export function filterProducts (type){
    return {
        type:'FILTER',
        payload:type
    }
}

export function sortProducts (sort){
    return {
        type:'SORT',
        payload:sort
    }
}