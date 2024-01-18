import { GET_SPECIAL_SERVICE, GET_STORY, GET_USER, JOBS_AVAILABLE } from "../Constant/Constant";


const initialState = {
    users: [],
    jobs: [],
    story: [],
    special_service_data:[],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                users: action.payload
            }
        case JOBS_AVAILABLE:
            return {
                ...state,
                jobs: action.payload
            }
        case GET_STORY:
            return {
                ...state,
                story: action.payload
            }
        case GET_SPECIAL_SERVICE:
            return {
                ...state,
                special_service_data: action.payload
            }
        default:
            return state;
    }
}
