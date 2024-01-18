import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AdminSidebar from '../components/AdminSidebar'
import ProfileBar from '../components/ProfileBar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux'
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'
import "../css/Skills.css"
import { visuallyHidden } from '@mui/utils';
import { deleteJobCategories, deleteJobCategory, deleteSkill, deleteSkills, getJobCategory, getSkills } from '../redux/Action/CommonAction';
import AddJobCategory from './InputDialog/AddJobCategory';
import { deleteSpecialService, getSpecialService } from '../redux/Action/JobseekerAction';

const headCells = [
    {
        id: 'SS_ID',
        numeric: false,
        disablePadding: true,
        label: 'SERVICE_ID',
    },
    {
        id: 'NAME',
        numeric: false,
        disablePadding: false,
        label: 'NAME',
    },
    {
        id: 'EMAIL',
        numeric: false,
        disablePadding: false,
        label: 'EMAIL',
    },
    {
        id: 'PHONENO',
        numeric: false,
        disablePadding: false,
        label: 'PHONENO',
    },
    {
        id: 'SPECIAL_SERVICE',
        numeric: false,
        disablePadding: false,
        label: 'SPECIAL_SERVICE',
    },
];

function EnhancedTableHead(props) {
    const [deletesign, setDeleteSign] = React.useState(false);
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow
                sx={{ background: "FFFFFF" }}
            >
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        sx={{ pl: 2, border: "3px black", borderStyle: "none solid solid none" }}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
                <TableCell padding="checkbox"
                    sx={{ border: "3px black", borderStyle: "none none solid solid" }}
                >
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        // onClick={handleCheckboxClick}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


export default function JobCategory() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('NAME');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [deletesign, setDeleteSign] = React.useState(false);

    const dispatch = useDispatch();
    const JobCategoryData = useSelector(
        (state) => state.JobSeekerReducer.special_service_data
    );

    const rows = JobCategoryData;

    var numSelected = selected.length;

    const handleCheckboxClick = () => {
        setDeleteSign(true)
    }

    const deleteBlogs = () => {
        var jiId = JSON.stringify(selected);
        dispatch(deleteSpecialService(jiId));
        window.location.reload(true);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.SS_ID);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, SS_ID) => {
        const selectedIndex = selected.indexOf(SS_ID);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, SS_ID);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
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

    const isSelected = (SS_ID) => selected.indexOf(SS_ID) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    React.useEffect(() => {
        // setBlogs(BlogsData);
        dispatch(getSpecialService());
    }, [])

    return (
        <div className="background_img">
            <div className="admin_dashboard_container">
                <AdminSidebar />
                <div className="admin_dashboard_content">
                    <ProfileBar />
                    <div className="table">
                        <Box sx={{ width: '70%' }}>
                            <Paper sx={{ width: '100%', mb: 2, boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)" }}>
                                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                                {deletesign ? (
                                    <>
                                        <Toolbar
                                            sx={{
                                                pl: { sm: 2 },
                                                pr: { xs: 1, sm: 1 },
                                                ...(numSelected > 0 && {
                                                    bgcolor: (theme) =>
                                                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                                                }),
                                            }}
                                        >
                                            {numSelected > 0 ? (
                                                <Typography
                                                    sx={{ flex: '1 1 100%' }}
                                                    color="inherit"
                                                    variant="subtitle1"
                                                    component="div"
                                                >
                                                    {numSelected} selected
                                                </Typography>
                                            ) : (
                                                <Typography
                                                    sx={{ flex: '1 1 100%' }}
                                                    variant="h6"
                                                    id="tableTitle"
                                                    component="div"
                                                >
                                                    Special Service
                                                </Typography>
                                            )}

                                            {numSelected > 0 ? (
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={deleteBlogs}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            ) : (
                                                <Tooltip title="Filter list">
                                                    <IconButton>
                                                        <FilterListIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            )}
                                        </Toolbar>

                                    </>
                                ) : (
                                    <div style={{ display: "none" }}>

                                    </div>
                                )}
                                <TableContainer>
                                    <Table
                                        sx={{ minWidth: 500 }}
                                        aria-labelledby="tableTitle"
                                        size={dense ? 'small' : 'medium'}
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
                                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                                            {rows
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row, index) => {
                                                    const isItemSelected = isSelected(row.SS_ID);
                                                    const labelId = `enhanced-table-checkbox-${index}`;

                                                    return (
                                                        <TableRow
                                                            hover
                                                            onClick={(event) => handleClick(event, row.SS_ID)}
                                                            role="checkbox"
                                                            aria-checked={isItemSelected}
                                                            tabIndex={-1}
                                                            sx={{ background: "#EEEEEE" }}
                                                            key={row.SS_ID}
                                                            selected={isItemSelected}
                                                        >
                                                            <TableCell
                                                                component="th"
                                                                sx={{
                                                                    pl: 2,
                                                                    border: "3px black",
                                                                    borderStyle: "solid solid solid none"
                                                                }}
                                                                id={labelId}
                                                                scope="row"
                                                                padding="none"
                                                            >
                                                                {row.SS_ID}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{ pl: 2, border: "3px solid black" }}
                                                                align="left">{row.NAME}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{ pl: 2, border: "3px solid black" }}
                                                                align="left">{row.EMAIL}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{ pl: 2, border: "3px solid black" }}
                                                                align="left">{row.PHONENO}
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{ pl: 2, border: "3px solid black" }}
                                                                align="left">{row.SPECIAL_SERVICE}
                                                            </TableCell>
                                                            <TableCell padding="checkbox"
                                                                sx={{ border: "3px solid black", borderStyle: "solid none solid solid" }}
                                                            >
                                                                <Checkbox
                                                                    color="primary"
                                                                    checked={isItemSelected}
                                                                    onClick={handleCheckboxClick}
                                                                    inputProps={{
                                                                        'aria-labelledby': labelId,
                                                                    }}
                                                                />
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
                                    sx={{ background: "#EEEEEE", border: "3px black", borderStyle: "none none solid none" }}
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
                </div>
            </div>
        </div>
    );
}
