import { NavLink } from "react-router-dom";
import * as React from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import ConstructionIcon from "@mui/icons-material/Construction";
import CategoryIcon from "@mui/icons-material/Category";
import FactoryIcon from "@mui/icons-material/Factory";
import { SiSpeedtest } from "react-icons/si";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { TbTrack } from "react-icons/tb";
import { AiFillSave } from "react-icons/ai";
import { useState } from "react";
import { MdFeedback } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";
import "../css/AdminSidebar.css";

const AdminSidebar = ({ children }) => {


  const [feedback, setFeedback] = useState(false);
  const [faqEmp, setFaqEmp] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const [opens, setOpens] = React.useState(false);

  const handleClick = () => {
    setOpens(false);
  };
  const handleClickClose = () => {
    setOpens(true);
  };

  let showAnimation = {};
  const isMobile = window.innerWidth < 1000;

  if (isMobile) {
    showAnimation = {
      hidden: {
        width: 0,
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
      show: {
        opacity: 1,
        width: "auto",
        transition: {
          duration: 0.5,
        },
      },
    };
  }

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={isOpen ? `sidebar ` : `sidebarclose`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={ {
                    hidden: {
                      width: 0,
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                      },
                    },
                    show: {
                      opacity: 1,
                      width: "auto",
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  {/* Mr.Kalta */}
                  <img className="logoimg" src="img/images.png" alt="JAIN" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            <NavLink
              to="/dashboard"
              // key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <FaUser />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Dashboard
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <h3
              // to="/"
              // key={index}
              // style={{justifyContent:"space-between"}}
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <MdPersonSearch />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Users
                  </motion.div>
                )}
              </AnimatePresence>

              {opens ? (
                <ExpandLess
                  onClick={handleClick}
                  sx={{
                    ml: isOpen ? 13 : 0,
                    display: isOpen ? "block" : "none",
                  }}
                />
              ) : (
                <ExpandMore
                  onClick={handleClickClose}
                  sx={{
                    ml: isOpen ? 13 : 0,
                    display: isOpen ? "block" : "none",
                  }}
                />
              )}
              
            </h3>
            <Collapse in={opens} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  to="/jobseeker-user"
                  activeclassName="active"
                  style={{
                    textDecoration: "none",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  <ListItemButton
                    sx={{ pl: isOpen ? 4 : 0 }}
                    onClick={handleClickClose}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText
                      primary="Candidate"
                      sx={{ display: isOpen ? "block" : "none" }}
                    />
                  </ListItemButton>
                </Link>
                <Link
                  to="/fmn_employer"
                  activelassName="active"
                  style={{
                    textDecoration: "none",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  <ListItemButton
                    sx={{ pl: isOpen ? 4 : 0 }}
                    onClick={handleClickClose}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText
                      primary="Recruiter"
                      sx={{ display: isOpen ? "block" : "none" }}
                    />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
            {/* <NavLink
              to="/subscription"
              // key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon"><FaUser /></div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Subscription
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink> */}
            {/* <NavLink
              to="/createjobpost"
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <FaUser />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Create own Plan
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink> */}
            {/* <NavLink
              to="/bidinsights"
              // key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <FaUser />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Bid Insights
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink> */}
            <NavLink
              to="/questions"
              // key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <FaUser />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Questions
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            {/* <NavLink
              to="/referral"
              // key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">
                <TbTrack />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Credits & Referral
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink> */}
            <NavLink to="/feedback" className="link" activeclassname="active">
              <div className="icon">
                <MdOutlineContactPhone />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Feedback
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink to="/blogs" className="link" activeclassname="active">
              <div className="icon">
                <FaQuestionCircle />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Blogs &amp; Story
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink to="/contactus" className="link" activeclassname="active">
              <div className="icon">
                <MdFeedback />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Contact Us
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            <NavLink to="/master" className="link" activeclassname="active">
              <div className="icon">
                <FaUser />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    AvailCities
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            {/* <NavLink
              to="/skills"
              className="link"
              activeclassname="active"
            >
              <div className="icon"><ConstructionIcon /></div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Skills
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink> */}
            <NavLink to="/jobreleted" className="link" activeclassname="active">
              <div className="icon">
                <CategoryIcon />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Job Releted
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
            {/* <NavLink
              to="/jobindustry"
              className="link"
              activeclassname="active"
            >
              <div className="icon"><FaUser /></div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Job Industry
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink> */}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default AdminSidebar;
