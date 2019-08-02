//action to get the index of the selected menu
const ActionAllCitys = citys => ({
    type: "LIST_CITYS",
    citys
});


//action to get the index of the selected menu
const ActionCategories = categories => ({
    type: "LIST_CATEGORIES",
    categories
});

//action to get the index of the selected menu
const ActionRetrieveTopOffers = productOffers => ({
    type: "RETRIEVE_TOP_OFFERS",
    productOffers
});



export {
    ActionAllCitys,
    ActionCategories,
    ActionRetrieveTopOffers
}