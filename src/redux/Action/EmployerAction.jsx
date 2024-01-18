import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance.jsx";
import {OWN_PLANS } from "../Constant/Constant";

export const get_Own_Plan = () => dispatch => {
    // loading(true);
    axiosInstance.get('admin/ownplan').then((result) => {
        if (result.data) {
            // loading(false)
            dispatch({
                type: OWN_PLANS,
                payload: result.data,
            })
        }
    }).catch(err => {
        // loading(false);
        toast.error('somthing went wrong!!');
    })
}
export const updatePlan = (op_Id,approve) => dispatch => {
    const bodydata = {
        OP_ID:op_Id,
        APPROVE_STATUS:approve

    }
    // loading(true);
    axiosInstance.put('admin/ownplan',bodydata).then((result) => {
        if (result.data.status === 1) {
  
            toast.success(result.data.message);
          }
    }).catch(err => {
        // loading(false);
        toast.error('somthing went wrong!!');
    })
}




