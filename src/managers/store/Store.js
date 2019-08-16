import { createStore } from 'redux';

//create storage of global states in the application
const reducer = (state, action) => {
    switch (action.type) {
        case 'Product':
            return {
                ...state,
                products: action.products ? action.products : []
            };
        default:
            return state;
    }
}

// export create store for app react
export default createStore(reducer, {
    products: []
});