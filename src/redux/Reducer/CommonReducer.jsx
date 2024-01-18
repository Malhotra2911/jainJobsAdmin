import { CREATE_BLOG_POST, DELETE_BLOG_POST, GET_BLOG_POST, GET_CITY, GET_CONTACT, GET_FEEDBACK, GET_JOB_INDUSTRY, GET_PLAN, GET_QUESTIONS, GET_SKILL, JOB_CATEGORY } from "../Constant/Constant";


const initialState = {
    blogposts: [],
    deleteposts: [],
    skills: [],
    jobcategory: [],
    jobindustry: [],
    feedback: [],
    contacts: [],
    cities: [],
    plans: [],
    questions:[],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BLOG_POST:
            return {
                ...state,
                blogposts: action.payload
            }
        case DELETE_BLOG_POST:
            return {
                ...state,
                deleteposts: action.payload
            }
        case GET_SKILL:
            return {
                ...state,
                skills: action.payload
            }
        case JOB_CATEGORY:
            return {
                ...state,
                jobcategory: action.payload
            }
        case GET_JOB_INDUSTRY:
            return {
                ...state,
                jobindustry: action.payload
            }
        case GET_FEEDBACK:
            return {
                ...state,
                feedback: action.payload
            }
        case GET_CONTACT:
            return {
                ...state,
                contacts: action.payload
            }
        case GET_CITY:
            return {
                ...state,
                cities: action.payload
            }
        case GET_PLAN:
            return {
                ...state,
                plans: action.payload
            }
            case GET_QUESTIONS:
                return {
                    ...state,
                    questions: action.payload
                }
        default:
            return state;
    }
}
