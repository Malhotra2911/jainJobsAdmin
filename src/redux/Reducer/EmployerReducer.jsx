import { OWN_PLANS } from "../Constant/Constant";


const initialState = {
    own_plans: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case OWN_PLANS:
            return {
                ...state,
                own_plans: action.payload
            }
        
        default:
            return state;
    }
}
