import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance.jsx";
import {GET_BLOG_POST, GET_CITY, GET_CONTACT, GET_FEEDBACK, GET_JOB_INDUSTRY, GET_PLAN, GET_QUESTIONS, GET_SKILL, JOB_CATEGORY } from "../Constant/Constant";

export const getBlogPosts = () => dispatch => {
    // loading(true);
    axiosInstance.get('admin/blogposts').then((result) => {
        if (result.data) {
            // loading(false)
            dispatch({
                type: GET_BLOG_POST,
                payload: result.data,
            })
        }
    }).catch(err => {
        // loading(false);
        toast.error('somthing went wrong!!');
    })
}

export const deleteBlogPosts = (blogsId) => dispatch => {
    axiosInstance.delete('admin/delete-blogpost?BLOG_ID='+blogsId).then((result) => {
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

export const deleteAllBlogPosts = () => dispatch => {
    axiosInstance.delete('admin/delete-blogposts').then((result) => {
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

export const createBlogPosts = (formdata) => dispatch => {
    axiosInstance.post('admin/blogpost',formdata).then((result) => {
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

export const createQuestion = (question) => dispatch => {
    const bodydata ={
        QUESITION_TITLE:question
    }
    axiosInstance.post('admin/question',bodydata).then((result) => {
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

export const addCity = (cityname,statename,countryname,latitude,longitude) => dispatch => {
    const bodydata ={
        CITY_NAME:cityname,
        STATE_NAME:statename,
        COUNRTY_NAME:countryname,
        LAT:latitude,
        LONG:longitude,
    }
    axiosInstance.post('admin/city',bodydata).then((result) => {
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

export const addSkill = (skill) => dispatch => {
    const bodydata ={
        FIELD_NAME:skill,
    }
    axiosInstance.post('admin/skill',bodydata).then((result) => {
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
export const addCredit = (userId,creditamount) => dispatch => {
    const bodydata ={
        USER_ID:userId,
        AMMOUNT:creditamount,
    }
    axiosInstance.post('user/create-credit',bodydata).then((result) => {
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


export const addCategory = (category) => dispatch => {
    const bodydata ={
        JC_NAME:category,
    }
    axiosInstance.post('admin/jobcategory',bodydata).then((result) => {
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

export const createStoryPosts = (formdata) => dispatch => {
    axiosInstance.post('admin/storypost',formdata).then((result) => {
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

export const getSkills = () => dispatch => {
    axiosInstance.get('user/get-Scope').then((result) => {
        if (result.data) {
            dispatch({
                type: GET_SKILL,
                payload: result.data,
            })
        }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}

export const deleteSkill = (skillId) => dispatch => {
    axiosInstance.delete('admin/delete-skill?SCOPE_ID='+skillId).then((result) => {
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

export const deleteSkills = () => dispatch => {
    axiosInstance.delete('admin/delete-skills').then((result) => {
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

export const getJobCategory = () => dispatch => {
    axiosInstance.get('user/get-categorytype').then((result) => {
        if (result.data) {
            dispatch({
                type: JOB_CATEGORY,
                payload: result.data,
            })
        }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}
export const getJobIndustry = () => dispatch => {
    axiosInstance.get('user/get-industrytype').then((result) => {
        if (result.data) {
            dispatch({
                type: GET_JOB_INDUSTRY,
                payload: result.data,
            })
        }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}

export const deleteJobCategory = (jcId) => dispatch => {
    axiosInstance.delete('admin/delete-jobcategory?JC_ID='+jcId).then((result) => {
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

export const deleteJobCategories = () => dispatch => {
    axiosInstance.delete('admin/delete-jobcategories').then((result) => {
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

export const deleteJobIndustry = (jiId) => dispatch => {
    axiosInstance.delete('admin/delete-jobindustry?JI_ID='+jiId).then((result) => {
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

export const deleteJobIndustries = () => dispatch => {
    axiosInstance.delete('admin/delete-jobindustries').then((result) => {
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

export const getFeedback = () => dispatch => {
    axiosInstance.get('admin/get-feedback').then((result) => {
        if (result.data) {
            dispatch({
                type: GET_FEEDBACK,
                payload: result.data,
            })
        }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}

export const deleteFeedback = (jiId) => dispatch => {
    axiosInstance.delete('admin/delete-feedback?FEEDBACK_ID='+jiId).then((result) => {
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
export const deleteFeedbacks = (jiId) => dispatch => {
    axiosInstance.delete('admin/delete-feedbacks?FEEDBACKS_IDS='+jiId).then((result) => {
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

export const getContacts = () => dispatch => {
    axiosInstance.get('admin/contactsdata').then((result) => {
        if (result.data) {
            dispatch({
                type: GET_CONTACT,
                payload: result.data,
            })
        }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}

export const deleteContacts = (jiId) => dispatch => {
    axiosInstance.delete('admin/delete-contacts?CONTACTS_IDS='+jiId).then((result) => {
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

export const getCities = () => dispatch => {
    axiosInstance.get('user/get-cities').then((result) => {
        if (result.data) {
            dispatch({
                type: GET_CITY,
                payload: result.data,
            })
        }
    }).catch(err => {
        toast.error('somthing went wrong!!');
    })
}

export const getPlans = () => dispatch => {
    axiosInstance.get('admin/get-plans').then((result) => {
        if (result.data) {
            dispatch({
                type: GET_PLAN,
                payload: result.data,
            })
        }
    }).catch(err => {
        // toast.error('somthing went wrong!!');
    })
}

export const PlanUpdate = (planId,userRole,duration,price) => dispatch => {
    const bodydata ={
        PLAN_ID:planId,
        USER_ROLE:userRole,
        PLAN_PRICE:price,
        PLAN_DURATION:duration,
    }
    axiosInstance.put('admin/plan-update',bodydata).then((result) => {
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

export const getQuestions = () => dispatch => {
    // loading(true);
    axiosInstance.get('admin/question').then((result) => {
        if (result.data) {
            // loading(false)
            dispatch({
                type: GET_QUESTIONS,
                payload: result.data,
            })
        }
    }).catch(err => {
        // loading(false);
        toast.error('somthing went wrong!!');
    })
}



