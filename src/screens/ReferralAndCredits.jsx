import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import "../css/Blogs.css"
import ProfileBar from '../components/ProfileBar'
import CreditsTables from './MasterDataTables/CreditsTables.jsx';

const ReferralAndCredits = () => {

    return (
        <>
            <div className="background_img">
                <div className="admin_dashboard_container">
                    <AdminSidebar />
                    <div className="admin_dashboard_content">
                        <ProfileBar />
                        <div className="tables_group">
                            <CreditsTables />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferralAndCredits