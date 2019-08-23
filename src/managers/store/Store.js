import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return {
                ...state,
                products: action.products ? action.products : []
            };
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                searchProducts: action.searchProducts
            };
        default:
            return state;
    }
}

const Store = () => {
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        searchProducts: []
    });
    return [state, dispatch]
}

export default Store;
