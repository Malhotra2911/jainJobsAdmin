import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance.jsx";
import {GET_BLOG_POST, GET_CITY, GET_CONTACT, GET_FEEDBACK, GET_JOB_INDUSTRY, GET_PLAN, GET_SKILL, GET_SPECIAL_SERVICE, GET_STORY, GET_USER, JOBS_AVAILABLE, JOB_CATEGORY } from "../Constant/Constant";

export const getUsers = () => dispatch => {
    // loading(true);
    axiosInstance.get('admin/get-users').then((result) => {
        if (result.data) {
            // loading(false)
            dispatch({
                type: GET_USER,
                payload: result.data,
            })
        }
    }).catch(err => {
        // loading(false);
        toast.error('somthing went wrong!!');
    })
}

export const deleteUsers = (jiId) => dispatch => {
    axiosInstance.delete('admin/delete-user?USERS_IDS='+jiId).then((result) => {
        if (result.data.status === 1) {
  
            toast.success(result.data.message);
          }
          if (result.data.status === 0) {
            toast.error(result.data.message);
          }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}

export const getAvail_Jobs = () => dispatch => {
    // loading(true);
    axiosInstance.get('admin/getavailjobs').then((result) => {
        if (result.data) {
            // loading(false)
            dispatch({
                type: JOBS_AVAILABLE,
                payload: result.data,
            })
        }
    }).catch(err => {
        // loading(false);
        toast.error('somthing went wrong!!');
    })
}

export const getStory = () => dispatch => {
    axiosInstance.get('admin/get-story').then((result) => {
        if (result.data) {
            dispatch({
                type: GET_STORY,
                payload: result.data,
            })
        }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}
export const getSpecialService = () => dispatch => {
    axiosInstance.get('admin/special-service').then((result) => {
        if (result.data) {
            dispatch({
                type: GET_SPECIAL_SERVICE,
                payload: result.data,
            })
        }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}

export const deleteStory = (jiId) => dispatch => {
    axiosInstance.delete('admin/delete-story?STORYS_IDS='+jiId).then((result) => {
        if (result.data.status === 1) {
  
            toast.success(result.data.message);
          }
          if (result.data.status === 0) {
            toast.error(result.data.message);
          }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}

export const deleteSpecialService = (jiId) => dispatch => {
    axiosInstance.delete('admin/specialservice?SSS_IDS='+jiId).then((result) => {
        if (result.data.status === 1) {
  
            toast.success(result.data.message);
          }
          if (result.data.status === 0) {
            toast.error(result.data.message);
          }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}




