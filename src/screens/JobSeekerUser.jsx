import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux'
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import {Link} from 'react-router-dom'
import "../css/Skills.css"
import { deleteUsers, getUsers } from '../redux/Action/JobseekerAction';

const headCells = [
    {
        id: 'USER_ID',
        numeric: false,
        disablePadding: true,
        label: 'USER_ID',
    },
    {
        id: 'EMAIL',
        numeric: false,
        disablePadding: false,
        label: 'EMAIL',
    },
    {
        id: 'SUBSCRIBATION',
        numeric: false,
        disablePadding: false,
        label: 'SUBSCRIBATION',
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


export default function JobSeekerUser() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('FIELD_NAME');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [deletesign, setDeleteSign] = React.useState(false);

    const dispatch = useDispatch();

    const UserData = useSelector(
        (state) => state.JobSeekerReducer.users
    );

    var user_role = 2;

    var JOBSeekerUserData = UserData.filter((el) => {
        return el.USER_ROLE == user_role;
    });

    
    const rows = JOBSeekerUserData;
    console.log(rows);

    var numSelected = selected.length;

    const handleCheckboxClick = () => {
        setDeleteSign(true)
    }

    const deleteBlogs = () => {
        var jiId = JSON.stringify(selected);
        console.log(jiId);
        dispatch(deleteUsers(jiId));
        window.location.reload(true);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.USER_ID);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, USER_ID) => {
        const selectedIndex = selected.indexOf(USER_ID);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, USER_ID);
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

    const isSelected = (USER_ID) => selected.indexOf(USER_ID) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    React.useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
                <div className="table">
                    <Box sx={{ width: 900 }}>
                        <Paper sx={{ width: '100%', overflow: "hidden", mb: 2, boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)" }}>
                            {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                            {numSelected > 0 ? (
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
                                                Nutrition
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
                            <TableContainer sx={{ overflowX: "scroll", maxWidth: 900 }}>
                                <Table
                                    sx={{ minWidth: 300, maxWidth: 900 }}
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
                                                const isItemSelected = isSelected(row.USER_ID);
                                                const labelId = `enhanced-table-checkbox-${index}`;

                                                return (
                                                    <TableRow
                                                        hover
                                                        onClick={(event) => handleClick(event, row.USER_ID)}
                                                        role="checkbox"
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        sx={{ background: "#EEEEEE" }}
                                                        key={row.USER_ID}
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
                                                            {row.USER_ID}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{row.EMAIL}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="center">
                                                                {row.SUBSCRIBATION ? <DoneAllIcon sx={{color:"green"}}/> : <CloseIcon sx={{color:"red"}}/>}
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
                                rowsPerPageOptions={[2, 5, 10, 25]}
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
    );
}



