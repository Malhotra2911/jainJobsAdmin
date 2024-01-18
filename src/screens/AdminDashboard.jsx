import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../css/AdminDashboard.css";
import ProfileBar from "../components/ProfileBar";
import { deleteUsers, getUsers } from "../redux/Action/JobseekerAction";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import axiosInstance from "../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [isdata, setisdata] = useState("");
  const UserData = useSelector((state) => state.JobSeekerReducer.users);

  var SubscribedUserData = UserData.filter((el) => {
    return el.SUBSCRIBATION == true;
  });

  console.log(UserData);
  console.log(SubscribedUserData);

  const GetDashboarddata = () => {
    axiosInstance.get("admin/dashboard").then((res) => {
      try {
        // alert("nice");
        console.log("dashbord data is ", res?.data);
        if (res?.data) {
          setisdata(res?.data);
        }
      } catch (error) {
        // toast.error(error);
        // // console.log(error);
      }
    });
  };

  useEffect(() => {
    GetDashboarddata();
  }, []);

  return (
    <>
      <div className="background_img">
        <div className="admin_dashboard_container">
          <AdminSidebar />
          <div className="admin_dashboard_content">
            <ProfileBar />
            <div className="dashboard_admin_contetn">
              <div className="top_user_view">
                <div className="item1">
                  <h3 className="dashboard_heading">
                    {isdata?.todayJobsPosted}
                  </h3>
                  <p className="dashboard_item_para">Today Posted Jobs</p>
                </div>
                <div className="item1">
                  <h3 className="dashboard_heading">
                    {isdata?.totalJobsPosted}
                  </h3>
                  <p className="dashboard_item_para">Posted Job Count</p>
                </div>
                <div className="item3">
                  <h3 className="dashboard_heading">{isdata?.todayUsers}</h3>
                  <p className="dashboard_item_para">New User Today</p>
                </div>
                <div className="item1">
                  <h3 className="dashboard_heading">{isdata?.totalUsers}</h3>
                  <p className="dashboard_item_para">User Count</p>
                </div>
              </div>

              <div className="chart_section">{/* <Chart/> */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
