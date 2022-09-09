const initialState = {
    allProducts: [],
    categoryProducts: [],
    types: [],
    plantines: [],
    semillas: [],
    conservas: [],
    filtered: [], 
    carrito:[],
    carritoLength: 0,
  };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCT':
            const plantines = action.payload.filter((product) => product.category === 'plantines');
            const semillas= action.payload.filter((product) => product.category === 'semillas');
            const conservas = action.payload.filter((product) => product.category === 'conservas');
            return {
                ...state,
                allProducts: action.payload,
                plantines: plantines,
                semillas: semillas,
                conservas: conservas
            }
        case 'GET_BY_CATEGORY':
            const productos = state.allProducts.filter(product => product.category === action.payload)
            
            const tipos = [...new Set(productos.map(product => product.type))]
        
            return {
                ...state,
                allProducts:productos,
                categoryProducts: productos,
                types: tipos
            }
        case 'RESET_CATEGORY':
            return {
                ...state,
                categoryProducts: [],
                types: [],
                filtered: []
            }
        case 'FILTER':
            const filtered = state.allProducts.filter(product => product.type === action.payload)
            return action.payload === 'all' ? {...state, categoryProducts:state.allProducts} :{...state, categoryProducts: filtered, filtered: filtered}
        case 'SORT':
            const toBeSorted = state.filtered.length ? state.filtered : state.categoryProducts
            const sorted = action.payload === 'asc' ? (toBeSorted.sort((a,b) => a.name.localeCompare(b.name))) : (toBeSorted.sort((a,b) => b.name.localeCompare(a.name)))
            
            return{
                ...state,
                categoryProducts: sorted
            }
        case 'ADD_TO_CART':
            const product = action.product           
            const count = action.count
            const carrito = state.carrito.find(item => {
                return item.product.id === product.id
            })
            const totalCarrito = state.carritoLength + count
            if(carrito === undefined){
                return{
                    ...state,
                    carrito: [...state.carrito,{product, count}],
                    carritoLength: totalCarrito
                }
            } else {
                const newCarrito = state.carrito.map(item => {
                    if(item.product.id === product.id){
                        return{
                            ...item,
                            count: item.count + count
                        }
                    } else {
                        return item
                    }
                })
                
                
                return{
                   ...state,
                    carrito: newCarrito,
                    carritoLength: totalCarrito 
                }   
            }
        case 'REMOVE_FROM_CART':
            const id = action.payload
            const item = state.carrito.find(item => item.product.id === id)
            const index = state.carrito.indexOf(item)
            const cantidadDelete = state.carrito[index].count
            const lessCarrito= state.carritoLength - cantidadDelete            
            const carritoDelete = state.carrito.filter(item => item.product.id !== id)     
            return{
                ...state,
                carrito: carritoDelete,
                carritoLength: lessCarrito
            }
        case 'RESET_CARRITO':
            return{
                ...state,
                carrito: [],
                carritoLength: 0
            }

        default:
            return state;
    }
}
export default rootReducer