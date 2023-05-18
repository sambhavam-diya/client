import React, { useState ,useEffect} from "react";
import Icon from "@mdi/react";
import {
  mdiChevronDown,
  mdiMenu,
  mdiListBoxOutline,
  mdiFaceManProfile,
  mdiLogout,
} from "@mdi/js";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Profile = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showMenu,setShowMenu]=useState(false);
  const [name,setName]=useState('');
  const [gender,setGender]=useState('');
  const [email,setEmail]=useState('');
  const [mobileNumber,setMobileNumber]=useState(''); //mobile_number
  const [whatsAppNumber,setWhatsAppNumber]=useState(''); //whats_app_number
  const [permanentAddress,setPermanentAddress]=useState(''); //address_permanent
  const [fatherName,setFatherName]=useState('');

  const handleChange = (date) => {
    setStartDate(date);
  };

   const handleDropDown = ()=>{
    setShowMenu(!showMenu)
   }

   const handleGenderChange = (event) => {
    setGender(event.target.value);
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
                      //   width="150px"
                    />
                  </span>
                  <span className="logo-lg ">
                    <img
                      src="assets/images/logo1.jpg"
                      alt=""
                      height="60px"
                      //   width="150px"
                    />
                  </span>
                </a>

                {/* <a href="index.html" className="logo logo-light">
                  <span className="logo-sm ">
                    <img
                      src="assets/images/logo1.jpg"
                      alt=""
                      height="60px"
                      //   width="150px"
                    />
                  </span>
                  <span className="logo-lg ">
                    <img
                      src="assets/images/logo1.jpg"
                      alt=""
                      height="60px"
                      //   width="150px"
                    />
                  </span>
                </a> */}
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

              <div
                className="dropdown d-inline-block"
               
              >
             
                <div >
                  <img
                    className="rounded-circle header-profile-user"
                    src="assets/images/avatar-1.jpg"
                    alt="Header Avatar"
                  />
                  <span
                    className="d-none d-xl-inline-block ms-1 avtar-name"
                    key="t-henry"
                  >
                    Henry
                  </span>

                  <Icon path={mdiChevronDown} size={0.8} className="icon" onClick={handleDropDown} />
                  </div>
                { showMenu && (
                  <div className="dropdown-menu-end ">
                  <div className="card" style={{width:'100px',height:'40px',position:'absolute',textAlign:'center',padding:'5px',marginLeft:'110px'}}>

                  <a className="dropdown-item" href="#">
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                    <span key="t-logout">Logout</span>
                  </a>
                  </div>
                </div>
                )}
              
              </div>
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
                        href="/"
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
                      <h4 className="card-title mb-4">Profile</h4>
                      <div className="mb-3">
                        <div className="row">
                        
                          <div className="col-6  col-sm-full">
                            <label htmlFor="name" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter Name"
                              value={name}
                              onChange={(e)=>setName(e.target.value)}
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="DOB" className="form-label mt-2">
                              Date of Birth
                            </label>
                            <div className="col-sm-full">
                            <Form.Group>
                              <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                dateFormat="MM/dd/yyyy"
                                className="form-control"
                                isClearable
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={33}
                                placeholderText="Select DOB"
                              />
                            </Form.Group>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="exampleDataList" className="form-label">
                              Gender
                            </label>
                            <input
                              className="form-control"
                              list="datalistOptions"
                              id="exampleDataList"
                              placeholder="Select Gender"
                              value={gender}
                              onChange={handleGenderChange}
                            />
                            <datalist id="datalistOptions">
                              <option value="Male" />
                              <option value="Female" />
                              <option value="Other" />
                            </datalist>
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="fathername" className="form-label mt-2">
                              Father's Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fathername"
                              placeholder="Enter Father's Name"
                              value={fatherName}
                              onChange={(e)=>setFatherName(e.target.value)}
                            />
                            
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="mothername" className="form-label">
                              Mother's Name
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="mothername"
                              placeholder="Enter Mother's Name"
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="email" className="form-label mt-2">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              // id="username"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="number" className="form-label">
                              Number
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              // id="username"
                              placeholder="Enter Number"
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="exampleDataList" className="form-label mt-2">
                              Minority
                            </label>
                            <input
                              className="form-control"
                              list="minorityOptions"
                              id="exampleDataList"
                              placeholder="Minority"
                            />
                            <datalist id="minorityOptions">
                              <option value="Yes" />
                              <option value="No" />
                            </datalist>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="exampleDataList" className="form-label">
                              Academic Qualification
                            </label>
                            <input
                              className="form-control"
                              list="qualificationOptions"
                              id="exampleDataList"
                              placeholder="Select Qualification"
                            />
                            <datalist id="qualificationOptions">
                              <option value="Intermediate" />
                              <option value="Graduation in progress" />
                              <option value="Graduation" />
                              <option value="Post Graduation in progress" />
                              <option value="Post Graduation" />
                              <option value="Research Scholar" />
                            </datalist>
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="guardian" className="form-label mt-2">
                              Name of Guardian
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              // id="username"
                              placeholder="Enter Guardian Name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="guardian-occupation"
                              className="form-label"
                            >
                              Occupation of Guardian
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              // id="username"
                              placeholder="Enter Guardian Occupation"
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="guardian-number"
                              className="form-label mt-2"
                            >
                              Phone no of guardian /Father / Husband
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              // id="username"
                              placeholder="Enter Guardian Number"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="husband-name"
                              className="form-label"
                            >
                              Husband's name ( in case of married female
                              candidate)
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              // id="username"
                              placeholder="Enter Name"
                            />
                          </div>
                        </div>
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
        </div>
        {/* <!-- end main content--> */}
      </div>
    </div>
  );
};

export default Profile;
