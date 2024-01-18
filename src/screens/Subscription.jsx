import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import "../css/Blogs.css"
import ProfileBar from '../components/ProfileBar'
import FeedbackTables from './MasterDataTables/FeedbackTables';
import SubscriptionTables from './MasterDataTables/SubscriptionTables';

const Subscription = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
        <div className="background_img">
            <div className="admin_dashboard_container">
                <AdminSidebar />
                <div className="admin_dashboard_content">
                    <ProfileBar />
                    <div className="tables_group">
                        <SubscriptionTables/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Subscription