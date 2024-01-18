import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  deleteSkill,
  deleteSkills,
  getSkills,
} from "../../redux/Action/CommonAction";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axiosInstance from "../../utils/axiosInstance";

const headCells = [
  {
    id: "SCOPE_ID",
    numeric: false,
    disablePadding: false,
    label: "BID_ID",
  },
  {
    id: "COMPANY_NAME",
    numeric: false,
    disablePadding: false,
    label: "COMPANY NAME",
  },
  {
    id: "EMAIL",
    numeric: false,
    disablePadding: false,
    label: "EMAIL ",
  },
  {
    id: "WEBSITE",
    numeric: false,
    disablePadding: false,
    label: "WEBSITE",
  },
  {
    id: "AMMOUNT",
    numeric: false,
    disablePadding: false,
    label: "AMMOUNT",
  },
  {
    id: "BIT_SLOT",
    numeric: false,
    disablePadding: false,
    label: "SLOT",
  },
  {
    id: "FIELD_NAME",
    numeric: false,
    disablePadding: false,
    label: "ACTION_TAKEN",
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
      <TableRow sx={{ background: "rgba(20, 144, 158, 0.3)" }}>
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

export default function OpenBid({}) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("FIELD_NAME");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [deletesign, setDeleteSign] = React.useState(false);
  const [isTable, setisTable] = React.useState([]);

  const dispatch = useDispatch();
  const SkillsData = useSelector((state) => state.CommonReducer.skills);

  console.log(SkillsData);

  const rows = SkillsData;

  var numSelected = selected.length;

  const handleCheckboxClick = () => {
    setDeleteSign(true);
  };

  var opId = selected;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.SCOPE_ID);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, SCOPE_ID) => {
    const selectedIndex = selected.indexOf(SCOPE_ID);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, SCOPE_ID);
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

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (SCOPE_ID) => selected.indexOf(SCOPE_ID) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  React.useEffect(() => {
    dispatch(getSkills());
  }, []);

  const getdata = () => {
    axiosInstance.get("admin/status-bitinsites").then((res) => {
      if (res.data.status) {
        setisTable(res.data.data);
      }
    });
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const handlestatus = (USER_ID, POST_STATUS, JOB_ID) => {
    axiosInstance
      .post("admin/status-bitinsites", {
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

  return (
    <>
      <div className="table_bids">
        <div className="heading_tab">
          <h3>Exclusive access to the new membership features</h3>
          <p>
            Now its your chance to try BidInsights for a limited time and gain
            insights on the performance of the bid so that you can optimize your
            winning. to unlock insights on all your bids. upgrade to premium
            today.
          </p>
        </div>
        <Box sx={{ width: "98%" }}>
          <Paper
            sx={{
              width: "100%",
              mb: 1,
              mt: 2,
              boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
              borderRadius: " 20px 20px 0px 0px",
            }}
          >
            <TableContainer
              sx={{
                overflowY: "scroll",
                maxHeight: 300,
                borderRadius: " 20px 20px 0px 0px",
              }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: 500 }}
                aria-label="sticky table"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {isTable &&
                    isTable.length !== 0 &&
                    isTable
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.SCOPE_ID);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) =>
                              handleClick(event, row.SCOPE_ID)
                            }
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            sx={{ background: "#EEEEEE" }}
                            key={row.SCOPE_ID}
                            selected={isItemSelected}
                          >
                            <TableCell
                              component="th"
                              sx={{
                                pl: 2,
                                border: "3px black",
                                borderStyle: "none solid solid none",
                              }}
                              id={labelId}
                              scope="row"
                              padding="none"
                            >
                              {index + 1}
                            </TableCell>
                            <TableCell
                              sx={{
                                pl: 2,
                                border: "3px black",
                                borderStyle: "none solid solid none",
                              }}
                              align="left"
                            >
                              {row.COMPANY_NAME}
                            </TableCell>
                            <TableCell
                              sx={{
                                pl: 2,
                                border: "3px black",
                                borderStyle: "none solid solid none",
                              }}
                              align="left"
                            >
                              {row.EMAIL}
                            </TableCell>
                            <TableCell
                              sx={{
                                pl: 2,
                                border: "3px black",
                                borderStyle: "none solid solid none",
                              }}
                              align="left"
                            >
                              {row.WEBSITE}
                            </TableCell>
                            <TableCell
                              sx={{
                                pl: 2,
                                border: "3px black",
                                borderStyle: "none solid solid none",
                              }}
                              align="left"
                            >
                              {row.AMMOUNT}
                            </TableCell>
                            <TableCell
                              sx={{
                                pl: 2,
                                border: "3px black",
                                borderStyle: "none solid solid none",
                              }}
                              align="left"
                            >
                              {row.BIT_SLOT}
                            </TableCell>

                            <TableCell
                              sx={{
                                pl: 2,
                                border: "3px black",
                                borderStyle: "none solid solid none",
                              }}
                              align="left"
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
                                      handlestatus(row.USER_ID, 3, row.JOB_ID)
                                    }
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

                                  <Chip
                                    icon={
                                      <CancelIcon style={{ color: "red" }} />
                                    }
                                    variant="outlined"
                                    onClick={() =>
                                      handlestatus(row.USER_ID, 2, row.JOB_ID)
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
                                  icon={<CancelIcon style={{ color: "red" }} />}
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
                                    <CancelIcon style={{ color: "yellow" }} />
                                  }
                                  variant="outlined"
                                  size="small"
                                  sx={{
                                    width: "100%",
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
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </div>
    </>
  );
}
