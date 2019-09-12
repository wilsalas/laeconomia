import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return {
                ...state,
                products: action.products ? action.products : [],
                subCategorie: action.subCategorie ? action.subCategorie: ""
            };
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                searchProducts: action.searchProducts
            };
        case 'COUNT_TOTAL_PRODUCT':
            localStorage.setItem("countProduct", action.totalProduct)
            return {
                ...state,
                totalProduct: action.totalProduct
            };
        case 'INFORMATION_PROFILE':
            return {
                ...state,
                informationProfile: action.informationProfile
            };
        case 'REFRESH_TOKEN_MODAL':
            return {
                ...state,
                refreshTokenModal: action.refreshTokenModal
            };
        case 'MODAL_ADRESS':
            return {
                ...state,
                modalAdress: action.modalAdress
            };
        case 'STEP_ACTIVE':
            return {
                ...state,
                step: action.step
            };
        case 'ADRESS':
            return {
                ...state,
                adress: action.adress
            };
        default:
            return state;
    }
}

const Store = () => {
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        subCategorie: "",
        searchProducts: [],
        totalProduct: localStorage.getItem('countProduct') ? localStorage.getItem('countProduct') : 0,
        informationProfile: {},
        refreshTokenModal: false,
        modalAdress: false,
        step: 1,
        adress: ""
    });
    return [state, dispatch]
}

export default Store;
