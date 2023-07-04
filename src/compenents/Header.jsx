import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { fetchSearchVideos } from "../Redux/Slices/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toggleDarkMode } from "../Redux/Slices/DarkMode";
function Header() {
  const [showInput, setShowInput] = useState(false);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const isLogged = localStorage.getItem("formData");
  const user = JSON.parse(isLogged);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isDarkMode = useSelector((state) => state.darkMode);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  const dispatch = useDispatch();
  const navigat = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigat("/sign-in");
  };
  const handleSearchClick = (name) => {
    dispatch(fetchSearchVideos(name));
    navigat("/search-result");
    setShowInput(!showInput);
  };
  // const handleSearch = (name) => {
  //   dispatch(fetchSearchVideos(name));
  //   navigat("/search-result");
  // };
  useEffect(() => {
    const formData = localStorage.getItem("formData");

    if (formData) {
      // Parse the stored form data
      const user = JSON.parse(formData);

      // Show success toast notification
      toast.success(`Welcom ${user.email} !`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, []);
  return (
    <>
      <Container  fluid>
        <ToastContainer />
        <Row  className="header carddark shadowDark p-3 d-flex justify-content-between">
          {/* the part of logo  */}
          <Col  className="d-flex align-items-center">
            <Link to={"/"} className="d-flex align-items-center  w-50 gap-2">
              {/* <img
                style={{ width: "50px", height:"100%" }}
                src="/public/assets/logo.png"
                alt="logo"
              /> */}
              <BsYoutube
                style={{ fontSize: "40px" }}
                className="text-danger "
              />
              <h4 className=" mb-0 text">Zomord</h4>
            </Link>
          </Col>
          {/* the part of input search with small screens */}
         
            <Col className="d-flex d-md-none justify-content-end align-items-center">
              <AiOutlineSearch className="fs-1 link text" onClick={() => handleSearchClick(search)} />
              {showInput && (
                <div className="d-flex gap-2">
                  <input
                    className="form-control header-search rounded-5 border border-2"
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {/* <Button onClick={() => handleSearch(search)} variant="dark">
                    Search
                  </Button> */}
                </div>
              )}
            </Col>
         
          {/* the part of input search with large screens */}
          <Col className="d-flex d-none d-md-flex gap-2"  xs={3}
            sm={3}
            md={3}
            lg={4}
            xl={4}
            xxl={4}>
            <input
              className="form-control input header-search rounded-5 border border-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button className="button" onClick={() => handleSearch(search)} variant="dark">
              Search
            </Button>
          </Col>
          {/* the part of profile and notification */}
          <Col
            className="d-flex align-items-center justify-content-center"
           
          >
           
            <MdDarkMode style={{fontSize:"30px"}} className="link text" onClick={handleDarkModeToggle}/>

            {isLogged ? (
              <>
                <Badge className="fs-2 mx-2" color="secondary" badgeContent={5}>
                  <IoIosNotificationsOutline />
                </Badge>
                <img
                  onClick={handleShow}
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                  class="rounded-circle shadow-4"
                  style={{ width: "40px" }}
                  alt="Avatar"
                />
              </>
            ) : (
              <>
                <Button
                  href="/sign-in"
                  className="mx-1 button"
                  variant="outline-danger"
                >
                  Sign in
                </Button>
              </>
            )}

            <Offcanvas placement="end" show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <div className="d-block">
                  <Offcanvas.Title>{user?.email}</Offcanvas.Title>
                </div>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul>
                  <Link className="text-dark" to={"/user-channel"}>
                    <li className="mb-3 p-2">
                      {" "}
                      <GrChannel className="fs-2 mx-2" /> Your channel
                    </li>
                  </Link>
                  <Link className="text-dark" to={"/setting"}>
                    <li className="mb-3 p-2">
                      {" "}
                      <FiSettings className="fs-2 mx-2" /> Settings
                    </li>
                  </Link>
                  <li onClick={handleLogOut} className="mb-3 p-2">
                    {" "}
                    <BiLogOut className="fs-2 mx-2" /> logout
                  </li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
