import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiChevronDown,
  mdiMenu,
  mdiListBoxOutline,
  mdiFaceManProfile,
  mdiLogout,
} from "@mdi/js";
import axios from "../../api/axios";

const USER_INFO = "/user-info";
const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const email = location?.state?.email;
  console.log(email);
  const [user, setUser] = useState("");
  // const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.get(USER_INFO, {
          singal: controller.signal,
          params: { email },

          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(response.data);
        isMounted && setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [email]);

  console.log(user)

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       USER_INFO,
  //       { params: { email: email } },
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     const data = response.data;
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // fetchData();


    // Retrieve the data object from the user state
  const data = user && user.data;
    // Parse the userInfo string
  const userInfo = data && JSON.parse(data.userInfo);
  // Access the uuid property
  const name= userInfo && userInfo.name;

  const handleDropDown = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div data-sidebar="dark" data-layout-mode="light">
      {/* // <!-- Begin page --> */}
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* <!-- LOGO --> */}
              <div className="navbar-brand-box">
                <button
                  type="button"
                  className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                  id="vertical-menu-btn"
                >
                  <Icon path={mdiMenu} size={1} />
                  {/* <i className="fa fa-fw fa-bars"></i> */}
                </button>
                <a href="#" className="logo logo-dark">
                  <span className="logo-sm ">
                    <img
                      src="assets/images/logo1.jpg"
                      alt=""
                      height="60px"
                      //  width="150px"
                    />
                  </span>
                  <span className="logo-lg ">
                    <img
                      src="assets/images/logo1.jpg"
                      alt=""
                      height="60px"
                      //  width="150px"
                    />
                  </span>
                </a>

                <a href="#" className="logo logo-light">
                  <span className="logo-sm ">
                    <img
                      src="assets/images/logo1.jpg"
                      alt=""
                      height="60px"
                      // width="150px"
                    />
                  </span>
                  <span className="logo-lg ">
                    <img
                      src="assets/images/logo1.jpg"
                      alt=""
                      height="60px"
                      // width="150px"
                    />
                  </span>
                </a>
              </div>

              {/* <!-- App Search--> */}
              {/* <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form> */}
            </div>

            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-magnify"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item waves-effect"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    id="header-lang-img"
                    src="assets/images/flags/us.jpg"
                    alt="Header Language"
                    height="16"
                  />
                </button>
                
              </div> */}

              <div className="dropdown d-inline-block">
                {/* <button
                  type="button"
                  className="btn header-item waves-effect" */}
                {/* //   id="page-header-user-dropdown"
                //   data-bs-toggle="dropdown"
                //   aria-haspopup="true"
                //   aria-expanded="false"
                // > */}
                <div style={{ marginLeft: "70px" }}>
                  <img
                    className="rounded-circle header-profile-user ml-5"
                    src="assets/images/avatar-1.jpg"
                    alt="Header Avatar"
                  />
                  <span
                    className="d-none d-xl-inline-block ms-1 avtar-name"
                    key="t-henry"
                  >
                    {name}
                  </span>
                  {/* <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i> */}
                  <Icon
                    path={mdiChevronDown}
                    size={0.8}
                    className="icon"
                    onClick={handleDropDown}
                  />
                </div>
                {/* </button> */}
                {/* <button onClick={()=>refresh()} >Refresh</button> */}
                {showMenu && (
                  <div className="dropdown-menu-end">
                    {/* <!-- item--> */}
                    <div
                      className="card"
                      style={{
                        width: "100px",
                        height: "40px",
                        position: "absolute",
                        textAlign: "center",
                        padding: "5px",
                        marginLeft: "110px",
                      }}
                    >
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                        <span key="t-logout">Logout</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item noti-icon right-bar-toggle waves-effect"
                >
                  <i className="bx bx-cog bx-spin"></i>
                </button>
              </div> */}
            </div>
          </div>
        </header>

        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className="vertical-menu">
          <div
            data-simplebar
            className="h-100"
            style={{ backgroundColor: "#2f8bc2" }}
          >
            {/* <!--- Sidemenu --> */}
            <div id="sidebar-menu">
              {/* <!-- Left Menu Start --> */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a
                        href="/home"
                        key="t-default"
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          height: "45px",
                        }}
                      >
                        <Icon
                          path={mdiListBoxOutline}
                          size={1}
                          className="icon-item"
                        />
                        Application Form
                      </a>
                    </li>

                    <li>
                      <a
                        href="/profile"
                        key="t-saas"
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          height: "45px",
                        }}
                      >
                        <Icon
                          path={mdiFaceManProfile}
                          size={1}
                          className="icon-item"
                        />
                        Profile
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        key="t-saas"
                        style={{
                          color: "#fff",
                          fontSize: "14px",
                          height: "45px",
                        }}
                      >
                        <Icon path={mdiLogout} size={1} className="icon-item" />
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- Sidebar --> */}
          </div>
        </div>
        {/* <!-- Left Sidebar End --> */}

        {/* 
        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Latest Examination</h4>
                      <div className="table-responsive">
                        <table className="table align-middle table-nowrap mb-0">
                          <thead className="table-light">
                            <tr>
                              {/* <th style={{ width: "20px" }}>
                                <div className="form-check font-size-16 align-middle">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="transactionCheck01"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="transactionCheck01"
                                  ></label>
                                </div>
                              </th> */}
                              <th
                                // className="align-middle"
                                style={{ width: "500px", textAlign: "center" }}
                              >
                                Examination Name
                              </th>
                              <th
                                // className="align-middle"
                                style={{ width: "300px", textAlign: "center" }}
                              >
                                Start Date
                              </th>
                              <th
                                // className="align-middle"
                                style={{ width: "300px", textAlign: "center" }}
                              >
                                End Date
                              </th>
                              {/* <th className="align-middle">Total</th>
                              <th className="align-middle">Payment Status</th>
                              <th className="align-middle">Payment Method</th> */}
                              <th
                                // className="align-middle"
                                style={{ width: "300px", textAlign: "center" }}
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {/* <td>
                                <a
                                  href="javascript: void(0);"
                                  className="text-body fw-bold"
                                >
                                  
                                </a>{" "}
                              </td> */}
                              <td style={{ textAlign: "center" }}>
                                Civil Services Examination
                              </td>
                              <td style={{ textAlign: "center" }}>
                                07 Oct, 2019
                              </td>
                              <td style={{ textAlign: "center" }}>
                                24 Oct, 2019
                              </td>
                              <td style={{ textAlign: "center" }}>
                                {/* <!-- Button trigger modal --> */}
                                <a href="/form">
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    //   data-bs-toggle="modal"
                                    //   data-bs-target=".transaction-detailModal"
                                    style={{ width: "80px" }}
                                  >
                                    Apply
                                  </button>
                                </a>
                              </td>
                            </tr>

                            {/* <tr>
                              <td style={{ textAlign: "center" }}>
                                Civil Services Examination
                              </td>
                              <td style={{ textAlign: "center" }}>
                                07 Oct, 2019
                              </td>
                              <td style={{ textAlign: "center" }}>
                                24 Oct, 2019
                              </td>

                              <td style={{ textAlign: "center" }}>
                                
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe75C8fbil7lPb3fNb1XN2NLIlJohxGMC4r88VaGVMqvrSV5Q/viewform">
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    data-bs-toggle="modal"
                                    data-bs-target=".transaction-detailModal"
                                    style={{ width: "80px" }}
                                  >
                                    Apply
                                  </button>
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td style={{ textAlign: "center" }}>
                                Civil Services Examination
                              </td>
                              <td style={{ textAlign: "center" }}>
                                07 Oct, 2019
                              </td>
                              <td style={{ textAlign: "center" }}>
                                24 Oct, 2019
                              </td>
                              <td style={{ textAlign: "center" }}>
                                
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe75C8fbil7lPb3fNb1XN2NLIlJohxGMC4r88VaGVMqvrSV5Q/viewform">
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    //   data-bs-toggle="modal"
                                    //   data-bs-target=".transaction-detailModal"
                                    style={{ width: "80px" }}
                                  >
                                    Apply
                                  </button>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>
                                Civil Services Examination
                              </td>
                              <td style={{ textAlign: "center" }}>
                                07 Oct, 2019
                              </td>
                              <td style={{ textAlign: "center" }}>
                                24 Oct, 2019
                              </td>

                              <td style={{ textAlign: "center" }}>
                                
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe75C8fbil7lPb3fNb1XN2NLIlJohxGMC4r88VaGVMqvrSV5Q/viewform">
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    //   data-bs-toggle="modal"
                                    //   data-bs-target=".transaction-detailModal"
                                    style={{ width: "80px" }}
                                  >
                                    Apply
                                  </button>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>
                                Civil Services Examination
                              </td>
                              <td style={{ textAlign: "center" }}>
                                07 Oct, 2019
                              </td>
                              <td style={{ textAlign: "center" }}>
                                24 Oct, 2019
                              </td>
                              <td style={{ textAlign: "center" }}>
                                
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe75C8fbil7lPb3fNb1XN2NLIlJohxGMC4r88VaGVMqvrSV5Q/viewform">
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    //   data-bs-toggle="modal"
                                    //   data-bs-target=".transaction-detailModal"
                                    style={{ width: "80px" }}
                                  >
                                    Apply
                                  </button>
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ textAlign: "center" }}>
                                Civil Services Examination
                              </td>
                              <td style={{ textAlign: "center" }}>
                                07 Oct, 2019
                              </td>
                              <td style={{ textAlign: "center" }}>
                                24 Oct, 2019
                              </td>

                              <td style={{ textAlign: "center" }}>
                                
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe75C8fbil7lPb3fNb1XN2NLIlJohxGMC4r88VaGVMqvrSV5Q/viewform">
                                  <button
                                    type="button"
                                    className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                    //   data-bs-toggle="modal"
                                    //   data-bs-target=".transaction-detailModal"
                                    style={{ width: "80px" }}
                                  >
                                    Apply
                                  </button>
                                </a>
                              </td>
                            </tr> */}
                          </tbody>
                        </table>
                      </div>
                      {/* <!-- end table-responsive --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- End Page-content --> */}

          {/* <!-- Transaction Modal --> */}
          <div
            className="modal fade transaction-detailModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="transaction-detailModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="transaction-detailModalLabel">
                    Order Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="mb-2">
                    Product id: <span className="text-primary">#SK2540</span>
                  </p>
                  <p className="mb-4">
                    Billing Name:{" "}
                    <span className="text-primary">Neal Matthews</span>
                  </p>

                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <div>
                              <img
                                src="assets/images/product/img-7.png"
                                alt=""
                                className="avatar-sm"
                              />
                            </div>
                          </th>
                          <td>
                            <div>
                              <h5 className="text-truncate font-size-14">
                                Wireless Headphone (Black)
                              </h5>
                              <p className="text-muted mb-0">$ 225 x 1</p>
                            </div>
                          </td>
                          <td>$ 255</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div>
                              <img
                                src="assets/images/product/img-4.png"
                                alt=""
                                className="avatar-sm"
                              />
                            </div>
                          </th>
                          <td>
                            <div>
                              <h5 className="text-truncate font-size-14">
                                Phone patterned cases
                              </h5>
                              <p className="text-muted mb-0">$ 145 x 1</p>
                            </div>
                          </td>
                          <td>$ 145</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <h6 className="m-0 text-right">Sub Total:</h6>
                          </td>
                          <td>$ 400</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <h6 className="m-0 text-right">Shipping:</h6>
                          </td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <h6 className="m-0 text-right">Total:</h6>
                          </td>
                          <td>$ 400</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end modal --> */}

          {/* <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <script>document.write(new Date().getFullYear())</script> ©
                  Skote.
                </div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Design & Develop by Themesbrand
                  </div>
                </div>
              </div>
            </div>
          </footer> */}
        </div>
        {/* <!-- end main content--> */}
      </div>
    </div>

    // {/* <!-- END layout-wrapper --> */}

    // {/* <!-- Right Sidebar --> */}
    // <div className="right-bar">
    //     <div data-simplebar className="h-100">
    //         <div className="rightbar-title d-flex align-items-center px-3 py-4">

    //             <h5 className="m-0 me-2">Settings</h5>

    //             <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
    //                 <i className="mdi mdi-close noti-icon"></i>
    //             </a>
    //         </div>

    //         {/* <!-- Settings --> */}
    //         <hr className="mt-0" />
    //         <h6 className="text-center mb-0">Choose Layouts</h6>

    //         <div className="p-4">
    //             <div className="mb-2">
    //                 <img src="assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images" />
    //             </div>

    //             <div className="form-check form-switch mb-3">
    //                 <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" checked />
    //                 <label className="form-check-label" for="light-mode-switch">Light Mode</label>
    //             </div>

    //             <div className="mb-2">
    //                 <img src="assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images" />
    //             </div>
    //             <div className="form-check form-switch mb-3">
    //                 <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch" />
    //                 <label className="form-check-label" for="dark-mode-switch">Dark Mode</label>
    //             </div>

    //             <div className="mb-2">
    //                 <img src="assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images" />
    //             </div>
    //             <div className="form-check form-switch mb-3">
    //                 <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch"/>
    //                 <label className="form-check-label" for="rtl-mode-switch">RTL Mode</label>
    //             </div>

    //             <div className="mb-2">
    //                 <img src="assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images" />
    //             </div>
    //             <div className="form-check form-switch mb-5">
    //                 <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch" />
    //                 <label className="form-check-label" for="dark-rtl-mode-switch">Dark RTL Mode</label>
    //             </div>

    //         </div>

    //     </div>
    //     {/* <!-- end slimscroll-menu--> */}
    // </div>
    // {/* <!-- /Right-bar --> */}
  );
};

export default Layout;
