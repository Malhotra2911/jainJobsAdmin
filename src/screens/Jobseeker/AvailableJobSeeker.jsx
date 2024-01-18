import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AdminSidebar from '../../components/AdminSidebar'
import ProfileBar from '../../components/ProfileBar'
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
import "../../css/Skills.css"
import { visuallyHidden } from '@mui/utils';
import { deleteSkill, deleteSkills, getCities, getJobCategory, getJobIndustry, getSkills } from '../../redux/Action/CommonAction';
import { getAvail_Jobs } from '../../redux/Action/JobseekerAction';

const headCells = [
    {
        id: 'JOB_ID',
        numeric: false,
        disablePadding: true,
        label: 'JOB_ID',
    },
    {
        id: 'COMPANY_NAME',
        numeric: false,
        disablePadding: false,
        label: 'COMPANY_NAME',
    },
    {
        id: 'COMPANY_PROFILE',
        numeric: false,
        disablePadding: false,
        label: 'COMPANY_PROFILE',
    },
    {
        id: 'DESIGNATION',
        numeric: false,
        disablePadding: false,
        label: 'DESIGNATION',
    },
    {
        id: 'EMAIL',
        numeric: false,
        disablePadding: false,
        label: 'EMAIL',
    },
    {
        id: 'EXPERIENCE',
        numeric: false,
        disablePadding: false,
        label: 'EXPERIENCE',
    },
    {
        id: 'ISSUBSCRIBED',
        numeric: false,
        disablePadding: false,
        label: 'ISSUBSCRIBED',
    },
    {
        id: 'JOB_CATEGORY',
        numeric: false,
        disablePadding: false,
        label: 'JOB_CATEGORY',
    },
    {
        id: 'JOB_INDUSTRY',
        numeric: false,
        disablePadding: false,
        label: 'JOB_INDUSTRY',
    },
    {
        id: 'JOB_LOCATION',
        numeric: false,
        disablePadding: false,
        label: 'JOB_LOCATION',
    },
    {
        id: 'JOB_POSITION',
        numeric: false,
        disablePadding: false,
        label: 'JOB_POSITION',
    },
    {
        id: 'LINKEDIN_PROFILE',
        numeric: false,
        disablePadding: false,
        label: 'LINKEDIN_PROFILE',
    },
    {
        id: 'MODE_OF_WORK',
        numeric: false,
        disablePadding: false,
        label: 'MODE_OF_WORK',
    },
    {
        id: 'SALARY_ANNUM',
        numeric: false,
        disablePadding: false,
        label: 'SALARY_ANNUM',
    },
    {
        id: 'SKILLS',
        numeric: false,
        disablePadding: false,
        label: 'SKILLS',
    },
    {
        id: 'TYPE_OF_JOB',
        numeric: false,
        disablePadding: false,
        label: 'TYPE_OF_JOB',
    },
    {
        id: 'WEBSITE',
        numeric: false,
        disablePadding: false,
        label: 'WEBSITE',
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


export default function AvailableJobSeeker() {


    
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('COMPANY_NAME');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(1);
    const [deletesign, setDeleteSign] = React.useState(false);

    React.useEffect(() => {
        dispatch(getCities());
        dispatch(getAvail_Jobs());
        dispatch(getJobCategory());
        dispatch(getJobIndustry());
        dispatch(getSkills());
    }, [])

    const dispatch = useDispatch();
    // const SkillsData = useSelector(
    //     (state) => state.CommonReducer.skills
    // );
    const JobsData = useSelector(
        (state) => state.JobSeekerReducer.jobs
    );
    const JobCategoryData = useSelector(
        (state) => state.CommonReducer.jobcategory
    );
    const jcs = new Array(JobCategoryData);

    const CityData = useSelector(
        (state) => state.CommonReducer.cities
    );

    const JobIndustryData = useSelector(
        (state) => state.CommonReducer.jobindustry
    );

    const SkillsData = useSelector(
        (state) => state.CommonReducer.skills
    );


    const rows = JobsData;

    var numSelected = selected.length;

    const handleCheckboxClick = () => {
        setDeleteSign(true)
    }
    const deleteBlogs = () => {
        if (selected.length == 1) {
            var skillId = selected[0];
            // console.log("check blogs "+ skillId);
            dispatch(deleteSkill(skillId));

        } else if (rows.length == selected.length) {
            dispatch(deleteSkills());
        }
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.JOB_ID);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, JOB_ID) => {
        const selectedIndex = selected.indexOf(JOB_ID);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, JOB_ID);
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

    const isSelected = (JOB_ID) => selected.indexOf(JOB_ID) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;



    return (
        
                <div className="table">
                    <Box sx={{ width: '90%' }}>
                        <Paper sx={{ maxWidth: 900, mb: 2, boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)" }}>
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
                                                JobSeeker User
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
                                                const isItemSelected = isSelected(row.JOB_ID);
                                                const labelId = `enhanced-table-checkbox-${index}`;
                                                const exp = row.EXPERIENCE;
                                                const desig = JSON.parse(row.DESIGNATION);
                                                var desiganation = desig.toString();

                                                // Extract Job City data
                                                function verifycity() {
                                                    var loc = row.JOB_LOCATION;
                                                    var job_loc = JSON.parse(loc);
                                                    var CTdata = "";
                                                    var arrlength = new Array(job_loc);
                                                    if (arrlength.length > 1) {

                                                        for (let index = 0; index < job_loc.length; index++) {
                                                            // const element = array[index];
                                                            var JCsd = CityData.filter((el) => {
                                                                return el.CITY_ID == job_loc[index];
                                                            });

                                                            if (JCsd == "") {
                                                                // console.log("Enjoy man");
                                                            } else {
                                                                var jsc = JCsd[0].CITY_NAME;
                                                                CTdata = jsc;
                                                            }

                                                        }


                                                    }
                                                    else {
                                                        var JCsd = CityData.filter((el) => {
                                                            return el.CITY_ID == job_loc;
                                                        });

                                                        if (JCsd == "") {
                                                            // console.log("Enjoy man");
                                                        } else {
                                                            var jsc = JCsd[0].CITY_NAME;
                                                            CTdata = jsc;
                                                        }

                                                    }
                                                    return CTdata;
                                                }
                                                var citiesdatas = verifycity();

                                                // Extract Job Category data
                                                function verify() {
                                                    var job_cat = row.JOB_CATEGORY;
                                                    var JCdata = "";
                                                    var job_cats = JSON.parse(job_cat);
                                                    for (let index = 0; index < job_cats.length; index++) {
                                                        // const element = array[index];
                                                        var JCsd = jcs[0].filter((el) => {
                                                            return el.JC_ID == job_cats[index];
                                                        });

                                                        if (JCsd == "") {
                                                            // console.log("Enjoy man");
                                                        } else {
                                                            var jsc = JCsd[0].JC_NAME;
                                                            JCdata = jsc;
                                                        }

                                                    }
                                                    return JCdata;
                                                }
                                                var jscd = verify();

                                                //  Extract Job Industry
                                                function verifyindus() {
                                                    var job_ind = row.JOB_INDUSTRY;
                                                    var JIdata = [];
                                                    var job_key = JSON.parse(job_ind);
                                                    // console.log(new Array(job_key));
                                                    // var arrLength = new Array(job_key);


                                                    for (let index = 0; index <= job_key.length; index++) {
                                                        // const element = array[index];
                                                        var JCsd = JobIndustryData.filter((el) => {
                                                            return el.JI_ID == job_key[index];
                                                        });

                                                        if (JCsd == "") {
                                                            // console.log("Enjoy man");
                                                        } else {
                                                            var jsc = JCsd[0].JI_NAME;
                                                            JIdata[index] = jsc;
                                                        }

                                                    }
                                                    return JIdata;
                                                }
                                                var jicd = verifyindus();
                                                const propertyNames = jicd.toString();

                                                // Extract Skills
                                                function verifyskill () {
                                                    var job_skill = row.SKILLS;
                                                    var JIdata = [];
                                                    var job_key = JSON.parse(job_skill);


                                                    for (let index = 0; index <= job_key.length; index++) {
                                                        // const element = array[index];
                                                        var JCsd = SkillsData.filter((el) => {
                                                            return el.SCOPE_ID == job_key[index];
                                                        });

                                                        if (JCsd == "") {
                                                        } else {
                                                            var jsc = JCsd[0].FIELD_NAME;
                                                            JIdata[index] = jsc;
                                                        }

                                                    }
                                                    return JIdata;
                                                }
                                                var jicd = verifyskill();
                                                const skillNames = jicd.toString();


                                                return (
                                                    <TableRow
                                                        hover
                                                        onClick={(event) => handleClick(event, row.JOB_ID)}
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
                                                                minWidth:60
                                                            }}
                                                            id={labelId}
                                                            scope="row"
                                                            padding="none"
                                                        >
                                                            {row.JOB_ID}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black", minWidth: 200 }}
                                                            align="left">{row.COMPANY_NAME}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black", minWidth: 350 }}
                                                            align="left">{row.COMPANY_PROFILE}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{desiganation}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{row.EMAIL}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{exp[1]} to {exp[3]} Year
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{row.ISSUBSCRIBED}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">
                                                            {jscd}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{propertyNames}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{citiesdatas}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{row.JOB_POSITION}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">
                                                            <a href={row.LINKEDIN_PROFILE} target="_blank">{row.LINKEDIN_PROFILE}</a>
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{row.MODE_OF_WORK}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{row.SALARY_ANNUM[1]} to {row.SALARY_ANNUM[3]}{row.SALARY_ANNUM[4]} LPA 
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{skillNames}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{row.TYPE_OF_JOB}
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{ pl: 2, border: "3px solid black" }}
                                                            align="left">{row.WEBSITE}
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
                                rowsPerPageOptions={[1, 5, 10, 25]}
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
