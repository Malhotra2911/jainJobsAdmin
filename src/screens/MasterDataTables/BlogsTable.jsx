import "../../css/Blogs.css"
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllBlogPosts, deleteBlogPosts, getBlogPosts } from '../../redux/Action/CommonAction';
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';



const headCells = [
    {
        id: 'BLOG_ID',
        numeric: false,
        disablePadding: true,
        label: 'BLOG_ID',
    },
    // {
    //     id: 'HEADING',
    //     numeric: true,
    //     disablePadding: false,
    //     label: 'HEADING',
    // },
    {
        id: 'BLOG_TITLE',
        numeric: false,
        disablePadding: false,
        label: 'TITLE',
    },
    {
        id: 'POST_LIKE',
        numeric: true,
        disablePadding: false,
        label: 'LIKE',
    },
    {
        id: 'POST_POLL',
        numeric: true,
        disablePadding: false,
        label: 'POLL',
    },
    {
        id: 'DATE',
        numeric: true,
        disablePadding: false,
        label: 'DATE',
    },
];


const BlogsTable = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const BlogsData = useSelector(
        (state) => state.CommonReducer.blogposts
    );

    // console.log(BlogsData);

    const rows = BlogsData;



    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(2);
    const [deletesign, setDeleteSign] = React.useState(false);

    const deleteBlogs = () => {
        if (selected.length == 1) {
            var blogsId = selected[0];
            dispatch(deleteBlogPosts(blogsId));
            window.location.reload(true);

        } else if (rows.length == selected.length) {
            dispatch(deleteAllBlogPosts());
            window.location.reload(true);
        }
    };

    var numSelected = selected.length;

    // console.log(selected);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleCheckboxClick = () => {
        setDeleteSign(true)
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.BLOG_ID);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, BLOG_ID) => {
        const selectedIndex = selected.indexOf(BLOG_ID);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, BLOG_ID);
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


    const isSelected = (BLOG_ID) => selected.indexOf(BLOG_ID) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    React.useEffect(() => {
        // setBlogs(BlogsData);
        dispatch(getBlogPosts());
    }, [])


    return (
        <>
            <div className="tables_group">
                <Box sx={{ width: '100%' }}>
                    <Paper sx={{ width: '100%', mb: 2, boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)" }}>
                        {numSelected > 0 ? (
                            // <EnhancedTableToolbar numSelected={selected.length} />

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
                                        All Listed Blogs
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

                        ) : (
                            <div style={{ display: "none" }}>

                            </div>
                        )

                        }
                        <Divider />
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750 }}
                                aria-labelledby="tableTitle"
                            // size={dense ? 'small' : 'medium'}
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
                                            const isItemSelected = isSelected(row.BLOG_ID);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row.BLOG_ID)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.BLOG_ID}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell component="th" id={labelId} scope="row" sx={{ pl: 3, maxWidth: 50, background: "#EEEEEE", border: "3px black",borderStyle: "solid none solid none" }}>{row.BLOG_ID}</TableCell>
                                                    <TableCell align="left" sx={{ background: "#EEEEEE", maxWidth: 50, border: "3px solid black", }} >{row.BLOG_TITLE}</TableCell>
                                                    <TableCell align="left" sx={{ background: "#EEEEEE", border: "3px solid black" }}>{row.POST_LIKE}</TableCell>
                                                    <TableCell align="left" sx={{ background: "#EEEEEE", border: "3px solid black" }}>{row.POST_POLL}</TableCell>
                                                    <TableCell align="left" sx={{ background: "#EEEEEE", border: "3px solid black" }}>{row.DATE}</TableCell>
                                                    {/* <TableCell align="left" sx={{ background: "#EEEEEE", border: "3px solid black" }}>{row.USER_ID}</TableCell> */}
                                                    {/* <TableCell padding="checkbox"
                                                        sx={{ border: "3px solid black", borderStyle: "solid none solid solid",background: "#EEEEEE" }}
                                                    >
                                                        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                                            <Chip icon={<CheckCircleIcon style={{ color: "green" }} />} variant="outlined" size="small" sx={{ width: "45%", background: "white", alignItems: "center", display: "flex", justifyContent: "center", cursor: "pointer", border: "2px solid green" }} label="approve" />
                                                            <Chip icon={<CancelIcon style={{ color: "red" }} />} variant="outlined" size="small" sx={{ width: "45%", background: "white", alignItems: 'center', display: "flex", justifyContent: "center", cursor: "pointer", border: "2px solid red" }} label="reject" />
                                                        </div>
                                                    </TableCell> */}
                                                    <TableCell padding="checkbox" sx={{ background: "#EEEEEE",border: "3px solid black",borderStyle: "solid none solid solid" }}>
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
                                                height: (33) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            sx={{ background: "#EEEEEE",border: "3px black", borderStyle: "none none solid none" }}
                            rowsPerPageOptions={[1, 5, 10, 25]}
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
    )
}

export default BlogsTable









function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'left' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ pl: 3, background: "#FFFFFF", maxWidth: 50,border: "3px black", borderStyle: "none solid solid none"  }}
                    >
                        
                            {headCell.label}
                            
                        
                    </TableCell>
                ))}
                {/* <TableCell>Approve / Reject</TableCell> */}
                <TableCell padding="checkbox"
                sx={{border: "3px black", borderStyle: "none none solid solid" }}
                >
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
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