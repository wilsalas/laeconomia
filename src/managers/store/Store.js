import { createStore } from 'redux';

//create storage of global states in the application
const reducer = (state, action) => {
    switch (action.type) {
        case 'SELECTED_MENU':
            return {
                ...state,
                index: action.index
            };
        default:
            return state;
    }
}

// export create store for app react
export default createStore(reducer, {
    index: 0
});