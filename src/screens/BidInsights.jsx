import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import "../css/Blogs.css"
import ProfileBar from '../components/ProfileBar'
import ContactTables from './MasterDataTables/ContactTables';
import BidInsightsTable from './MasterDataTables/BidInsightsTable';

const ContactUs = () => {

    return (
        <>
            <div className="background_img">
                <div className="admin_dashboard_container">
                    <AdminSidebar />
                    <div className="admin_dashboard_content">
                        <ProfileBar />
                        <div className="tables_group">
                            <BidInsightsTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs