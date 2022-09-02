const initialState = {
    allProducts: [],
    categoryProducts: [],
    types: [],
    plantines: [],
    semillas: [],
    conservas: [],
    filtered: []
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
            console.log("🚀 ~ file: index.js ~ line 15 ~ rootReducer ~ productos", productos)
            
            const tipos = [...new Set(productos.map(product => product.type))]
            console.log(tipos)
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
            console.log('sorted',sorted)
            return{
                ...state,
                categoryProducts: sorted
            }
        default:
            return state;
    }
}
export default rootReducer