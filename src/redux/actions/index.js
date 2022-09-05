import axios from 'axios';

export function getProducts (){
    return async (dispatch)=>{
        try{
            setTimeout(async () => {}, 500);
            const res = await axios.get(`https://631248c9f5cba498da905dc6.mockapi.io/conservas`)
            const res2 = await axios.get('https://631248c9f5cba498da905dc6.mockapi.io/plantines')
            const res3 = await axios.get('https://631248c9f5cba498da905dc6.mockapi.io/semillas')
            const all = res.data.concat(res2.data.concat(res3.data))            
            dispatch({
                type:'GET_PRODUCT',
                payload:all})
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