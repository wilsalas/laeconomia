import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return {
                ...state,
                products: action.products ? action.products : [],
                subCategorie: action.subCategorie ? action.subCategorie : "",
                typeSearch: action.typeSearch ? action.typeSearch : "",
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
        case 'MODAL_VIDA_SANA':
            return {
                ...state,
                modalVidaSana: action.modalVidaSana
            };
        case 'MODAL_FORM_VIDA_SANA':
            return {
                ...state,
                modalFormVidaSana: action.modalFormVidaSana
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
        case 'GET_ORDER':
            return {
                ...state,
                order: action.order ? action.order : [],
            };
        case 'TEXT_SEARCH':
            return {
                ...state,
                textSearch: action.textSearch
            };
        case 'LIST_PRODUCTS_SUBCATEGORIES':
            return {
                ...state,
                productsSubCategories: action.productsSubCategories
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
        adress: "",
        order: [],
        textSearch: "",
        productsSubCategories: [],
        modalVidaSana: false,
        modalFormVidaSana: false
    });
    return [state, dispatch]
}

export default Store;
