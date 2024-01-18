import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import AdminSidebar from "../components/AdminSidebar";
import ProfileBar from "../components/ProfileBar";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import "../css/JobseekerFeedback.css";
import { getPlans } from "../redux/Action/CommonAction";
import SubscriptionEditionForm from "./MasterDataTables/SubscriptionEditForm";
import { get_Own_Plan, updatePlan } from "../redux/Action/EmployerAction";
import axiosInstance from "../utils/axiosInstance";

const headCells = [
  {
    id: "OP_ID",
    numeric: false,
    disablePadding: true,
    label: "PLAN_ID",
  },
  {
    id: "C_NAME",
    numeric: false,
    disablePadding: false,
    label: "COMPANY",
  },
  {
    id: "C_EMAIL",
    numeric: false,
    disablePadding: false,
    label: "EMAIL",
  },
  {
    id: "C_WEBSITE",
    numeric: false,
    disablePadding: false,
    label: "WEBSITE",
  },
  {
    id: "POST_DURATION",
    numeric: false,
    disablePadding: false,
    label: "POST_DURATION",
  },
  {
    id: "PRICE",
    numeric: false,
    disablePadding: false,
    label: "PRICE",
  },
  {
    id: "HIRING_COUNT",
    numeric: false,
    disablePadding: false,
    label: "EMPLOYEES",
  },
];

function EnhancedTableHead(props) {
  const [deletesign, setDeleteSign] = React.useState(false);
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{ background: "FFFFFF" }}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sx={{
              pl: 2,
              border: "3px black",
              borderStyle: "none solid solid none",
            }}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
        <TableCell
          padding="checkbox"
          sx={{
            border: "3px black",
            minWidth: 130,
            borderStyle: "none none solid solid",
          }}
        >
          GRANT / REJECT
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const CreateJobPost = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("C_NAME");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [deletesign, setDeleteSign] = React.useState(false);

  const dispatch = useDispatch();
  const FeedbackData = useSelector((state) => state.EmployerReducer.own_plans);
  const [isrowdata, setisrowdata] = React.useState([]);

  const getdata = () => {
    axiosInstance.get("admin/status-createownplan").then((res) => {
      if (res.data.status === 1) {
        setisrowdata(res.data.data);
      } else {
        alert("somthing went wrong!!");
      }
    });
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = isrowdata.map((n) => n.OP_ID);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, OP_ID) => {
    const selectedIndex = selected.indexOf(OP_ID);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, OP_ID);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  var opId = selected;

  const handlestatus = (USER_ID, POST_STATUS, JOB_ID) => {
    axiosInstance
      .post("admin/status-createownplan", {
        USER_ID,
        POST_STATUS,
        JOB_ID,
      })
      .then((res) => {
        if (res.data.status === 1) {
          getdata();
        } else {
          alert("somthing went wrong!!");
        }
      });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (OP_ID) => selected.indexOf(OP_ID) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - isrowdata.length) : 0;

  React.useEffect(() => {
    dispatch(getPlans());
    dispatch(get_Own_Plan());
  }, []);

  return (
    <>
      <div className="background_img">
        <div className="admin_dashboard_container">
          <AdminSidebar />
          <div className="admin_dashboard_content">
            <ProfileBar />
            <Box sx={{ width: "98%", mt: 3 }}>
              <Paper
                sx={{
                  width: "100%",
                  mb: 2,
                  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
                }}
              >
                <TableContainer>
                  <Table
                    sx={{ minWidth: 600 }}
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                  >
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={isrowdata.length}
                    />
                    <TableBody>
                      {isrowdata &&
                        isrowdata.length !== 0 &&
                        isrowdata
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, index) => {
                            const isItemSelected = isSelected(row.OP_ID);
                            const labelId = `enhanced-table-checkbox-${index}`;
                            return (
                              <TableRow
                                hover
                                onClick={(event) =>
                                  handleClick(event, row.OP_ID)
                                }
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                sx={{ background: "#EEEEEE" }}
                                key={row.JOB_ID}
                                selected={isItemSelected}
                              >
                                <TableCell
                                  component="th"
                                  sx={{
                                    pl: 2,
                                    border: "3px black",
                                    borderStyle: "solid solid solid none",
                                  }}
                                  id={labelId}
                                  scope="row"
                                  padding="none"
                                >
                                  {row.JOB_ID}
                                </TableCell>
                                <TableCell
                                  sx={{ pl: 2, border: "3px solid black" }}
                                  align="left"
                                >
                                  {row.COMPANY_NAME}
                                </TableCell>
                                <TableCell
                                  sx={{ pl: 2, border: "3px solid black" }}
                                  align="left"
                                >
                                  {row.EMAIL}
                                </TableCell>
                                <TableCell
                                  sx={{ pl: 2, border: "3px solid black" }}
                                  align="left"
                                >
                                  {row.WEBSITE ? row.WEBSITE : "-"}
                                </TableCell>
                                <TableCell
                                  sx={{ pl: 2, border: "3px solid black" }}
                                  align="left"
                                >
                                  {row.DAYS} day's
                                </TableCell>
                                <TableCell
                                  sx={{ pl: 2, border: "3px solid black" }}
                                  align="left"
                                >
                                  {row.AMMOUNT} Rs.
                                </TableCell>
                                <TableCell
                                  sx={{ pl: 2, border: "3px solid black" }}
                                  align="left"
                                >
                                  {row.COUNT} no of users
                                </TableCell>

                                <TableCell
                                  padding="checkbox"
                                  sx={{
                                    border: "3px solid black",
                                    borderStyle: "solid none solid solid",
                                  }}
                                >
                                  {row.POST_STATUS === 1 ? (
                                    <div
                                      style={{
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <Chip
                                        icon={
                                          <CheckCircleIcon
                                            style={{ color: "green" }}
                                          />
                                        }
                                        variant="outlined"
                                        onClick={() =>
                                          handlestatus(
                                            row.USER_ID,
                                            3,
                                            row.JOB_ID
                                          )
                                        }
                                        size="small"
                                        sx={{
                                          width: "45%",
                                          background: "white",
                                          alignItems: "center",
                                          display: "flex",
                                          justifyContent: "space-between",
                                        }}
                                      />

                                      <Chip
                                        icon={
                                          <CancelIcon
                                            style={{ color: "red" }}
                                          />
                                        }
                                        variant="outlined"
                                        onClick={() =>
                                          handlestatus(
                                            row.USER_ID,
                                            2,
                                            row.JOB_ID
                                          )
                                        }
                                        size="small"
                                        sx={{
                                          width: "45%",
                                          background: "white",
                                          alignItems: "center",
                                          display: "flex",
                                          justifyContent: "center",
                                          cursor: "pointer",
                                          border: "2px solid red",
                                        }}
                                        label="reject"
                                      />
                                    </div>
                                  ) : row.POST_STATUS === 2 ? (
                                    <Chip
                                      icon={
                                        <CancelIcon style={{ color: "red" }} />
                                      }
                                      variant="outlined"
                                      size="small"
                                      sx={{
                                        width: "45%",
                                        background: "white",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        border: "2px solid red",
                                      }}
                                      label="reject"
                                    />
                                  ) : row.POST_STATUS === 2 ? (
                                    <Chip
                                      icon={
                                        <CancelIcon style={{ color: "red" }} />
                                      }
                                      variant="outlined"
                                      size="small"
                                      sx={{
                                        width: "45%",
                                        background: "white",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        border: "2px solid red",
                                      }}
                                      label="reject"
                                    />
                                  ) : row.POST_STATUS === 3 ? (
                                    <Chip
                                      icon={
                                        <CancelIcon
                                          style={{ color: "yellow" }}
                                        />
                                      }
                                      variant="outlined"
                                      size="small"
                                      sx={{
                                        width: "45%",
                                        background: "white",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        border: "2px solid red",
                                      }}
                                      label="Payment Panding"
                                    />
                                  ) : (
                                    <Chip
                                      icon={
                                        <CheckCircleIcon
                                          style={{ color: "green" }}
                                        />
                                      }
                                      variant="outlined"
                                      size="small"
                                      sx={{
                                        width: "45%",
                                        background: "white",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        border: "2px solid green",
                                      }}
                                      label="approve"
                                    />
                                  )}
                                </TableCell>
                              </TableRow>
                            );
                          })}

                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: (dense ? 33 : 53) * emptyRows,
                          }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  sx={{
                    background: "#EEEEEE",
                    border: "3px black",
                    borderStyle: "none none solid none",
                  }}
                  component="div"
                  count={isrowdata.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateJobPost;
