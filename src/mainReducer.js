import _ from "underscore";
const initialState = {
    countries: [],
    selectedCountry: {}
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            };
        case 'SET_RANDOM_COUNTRY':
            return {
                ...state,
                selectedCountry: action.payload
            }
        default:
            return state;
    }
};

export default mainReducer;