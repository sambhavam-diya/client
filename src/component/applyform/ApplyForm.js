import React, { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiChevronDown,
  mdiMenu,
  mdiListBoxOutline,
  mdiFaceManProfile,
  mdiLogout,
} from "@mdi/js";
import { Form } from "react-bootstrap";

const ApplyForm = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [permanentAddress, setPermanentAddress] = useState("");
  const [region, setRegion] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState(""); //whats_app_number
  const [currentAddress, setCurrentAddress] = useState(""); //address_current
  const [annualIncome, setAnnualIncome] = useState(""); //annual_parental_income
  const [isPwd, setIsPwd] = useState(""); //is_pwd
  const [currentProfile,setCurrentProfile]=useState(''); //current_profile
  const [highSchoolPercentage,setHighSchoolPercentage]=useState(''); //percentage_10th
  const [highSchoolBoard,setHighSchoolBoard]=useState('');  //board_10th
  const [interPercentage,setInterPercentage]=useState(''); //percentage_12th
  const [interBoard,setInterBoard]=useState(''); // board_12th
  const [lastCollege,setLastCollege]=useState('');
  const [lastCourse,setLastCourse]=useState('');

    const [graduationPercentage,setGraduationPercentage]=useState(''); //percentage_graduation
    const [medium,setMedium]=useState('') // paper_medium
    const [optionalSubject,setOptionalSubject]=useState(''); //optional_subject
    const [bestExam,setBestExam]=useState(''); //best_exam_results
    const [extraCurricular,setExtraCurricular]=useState(''); //extra_curricular
    const [comments,setComments] = useState(''); //comments
    const [initiative,setInitiative]=useState(''); // how_did_you_know
    const [justification,setJustification]=useState('') //justification

  const handleDropDown = () => {
    setShowMenu(!showMenu);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handlePwdChange = (e) => {
    setIsPwd(e.target.value);
  };

  const handleCurrentProfileChange = (e) => {
    setCurrentProfile(e.target.value);
  };

  const handleHighSchoolBoardChange = (e) => {
    setHighSchoolBoard(e.target.value);
  };

  const handleInterBoardChange = (e) => {
    setInterBoard(e.target.value);
  };

  const handleMediumChange = (e) => {
    setMedium(e.target.value);
  };

  const handleOptionalSubjectChange = (e) => {
    setOptionalSubject(e.target.value);
  };

  const handleBestExamChange = (e) => {
    setBestExam(e.target.value);
  };

  const handleInitiativeChange = (e) => {
    setInitiative(e.target.value);
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

                {/* <a href="index.html" className="logo logo-light"> */}
                <span className="logo-sm ">
                  <img
                    src="assets/images/logo1.jpg"
                    alt=""
                    height="60px"
                    //   width="150px"
                  />
                </span>
                {/* <span className="logo-lg ">
                    <img
                      src="assets/images/logo1.jpg"
                      alt=""
                      height="60px"
                      //   width="150px"
                    />
                  </span> */}
                {/* </a> */}
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

              <div className="dropdown d-inline-block">
                <div style={{ marginLeft: "70px" }}>
                  {/* <button type="button" className="btn header-item waves-effect"> */}
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

                  <Icon
                    path={mdiChevronDown}
                    size={0.8}
                    className="icon"
                    onClick={handleDropDown}
                  />
                  {/* </button> */}
                </div>
                {showMenu && (
                  <div className="dropdown-menu-end">
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
                      <h4 className="card-title mb-4">Application Form</h4>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="permanentAddress"
                              className="form-label"
                            >
                              Permanent Address
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Your Answer"
                              value={permanentAddress}
                              onChange={(e) =>
                                setPermanentAddress(e.target.value)
                              }
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="exampleDataList"
                              className="form-label"
                            >
                              Region
                            </label>
                            <input
                              className="form-control"
                              list="datalistOptions"
                              id="exampleDataList"
                              placeholder="Select Region"
                              value={region}
                              onChnage={handleRegionChange}
                            />
                            <datalist id="datalistOptions">
                              <option value="Rural" />
                              <option value="Urban" />
                              <option value="Town (Semi Urban)" />
                            </datalist>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="number" className="form-label">
                              WhatsApp Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Answer"
                              value={whatsAppNumber}
                              onChange={(e) =>
                                setWhatsAppNumber(e.target.value)
                              }
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="currentAddress"
                              className="form-label"
                            >
                              Current Address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Answer"
                              value={currentAddress}
                              onChange={(e) =>
                                setCurrentAddress(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="income" className="form-label">
                              Annual income ( as per income certificate )
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Your Answer"
                              value={annualIncome}
                              onChange={(e) => setAnnualIncome(e.target.value)}
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="pwd" className="form-label">
                              Persons with Disabilities (PwD)
                            </label>
                            <select
                              className="form-control"
                              id="pwd"
                              name="pwd"
                              value={isPwd}
                              onChange={handlePwdChange}
                            >
                              <option value="false">No</option>
                              <option value="true">Yes</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="profile" className="form-label">
                              Current Profile
                            </label>
                            <input
                              className="form-control"
                              list="profileOptions"
                              id="exampleDataList"
                              placeholder="Select Option"
                              value={currentProfile}
                              onChange={handleCurrentProfileChange}
                            />
                            <datalist id="profileOptions">
                              <option value="Student" />
                              <option value="Working professional" />
                              <option value="Business / Self Employed" />
                            </datalist>
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="graduation" className="form-label">
                              Graduation Year
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Answer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="exampleDataList"
                              className="form-label"
                            >
                              Graduation Year (in progress)
                            </label>
                            <input
                              className="form-control"
                              list="yearOptions"
                              id="exampleDataList"
                              placeholder="Choose "
                            />
                            <datalist id="yearOptions">
                              <option value="2022" />
                              <option value="2023" />
                              <option value="2024" />
                              <option value="2025" />
                              <option value="2026 or after" />
                            </datalist>
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="college" className="form-label">
                              College
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Answer"
                              value={lastCollege}
                              onChange={(e)=>setLastCollege(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="course" className="form-label">
                              Course
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Answer"
                              value={lastCourse}
                              onChange={(e)=>setLastCourse(e.target.value)}
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="percentage" className="form-label">
                              High School ( % or CGPA)
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Your Answer"
                              value={highSchoolPercentage}
                              onChange={(e)=>setHighSchoolPercentage(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="board" className="form-label">
                              High School Board
                            </label>
                            <input
                              className="form-control"
                              list="boardOptions"
                              id="exampleDataList"
                              placeholder="Select Board"
                              value={highSchoolBoard}
                              onChange={handleHighSchoolBoardChange}
                            />
                            <datalist
                              id="boardOptions"
                              className="custom-datalist"
                            >
                              <option value="State Board" />
                              <option value="CBSE" />
                              <option value="ICSE" />
                              <option value="ISC" />
                            </datalist>
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="percentage" className="form-label">
                              Intermediate ( % or CGPA)
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Your Answer"
                              value={interPercentage}
                              onChange={(e)=>setInterPercentage(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="board" className="form-label">
                              Intermediate Board
                            </label>
                            <input
                              className="form-control"
                              list="intermediateBoardOptions"
                              id="exampleDataList"
                              placeholder="Select Board"
                              value={interBoard}
                              onChange={handleInterBoardChange}
                            />
                            <datalist id="intermediateBoardOptions">
                              <option value="State Board" />
                              <option value="CBSE" />
                              <option value="ICSE" />
                              <option value="ISC" />
                            </datalist>
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="percentage" className="form-label">
                              Graduation( % or CGPA)
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Your Answer"
                              value={graduationPercentage}
                              onChange={(e)=>setGraduationPercentage(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="medium" className="form-label">
                              Medium (you would like to take coaching)
                            </label>
                            <input
                              className="form-control"
                              list="mediumOptions"
                              id="exampleDataList"
                              placeholder="Select Medium"
                              value={medium}
                              onChange={handleMediumChange}
                            />
                            <datalist id="mediumOptions">
                              <option value="Hindi" />
                              <option value="English" />
                            </datalist>
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="selectYear" className="form-label">
                              UPSC exam for the first time ( Select year )
                            </label>
                            <input
                              className="form-control"
                              list="yearOptions"
                              id="exampleDataList"
                              placeholder="Select Optional Subject"
                            />
                            <datalist id="yearOptions">
                              <option value="Already given before" />
                              <option value="2023" />
                              <option value="2024" />
                            </datalist>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="subject" className="form-label">
                              Optional Subject (you have chosen for Civil
                              Services Exam)
                            </label>
                            <input
                              className="form-control"
                              list="subjectOptions"
                              id="exampleDataList"
                              placeholder="Select Optional Subject"
                              value={optionalSubject}
                              onChange={handleOptionalSubjectChange}
                            />
                            <datalist id="subjectOptions">
                              <option value="Geography" />
                              <option value="History" />
                              <option value="Hindi Literature" />
                              <option value="Philosophy" />
                              <option value="Political Science" />
                              <option value="Public Administration" />
                              <option value="Not decided yet" />
                            </datalist>
                          </div>
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="higherQualification"
                              className="form-label"
                            >
                              Do you have any other higher qualification or
                              Professional degree ? (Give details along with the
                              percentage/CGPA)
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Your Answer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="qualifiedOptions"
                              className="form-label"
                            >
                              Have you qualified any stage of UPSC Civil
                              Services or State Civil Services Exam earlier ?
                            </label>
                            <input
                              className="form-control"
                              list="qualifiedOptions"
                              id="exampleDataList"
                              placeholder="Select Options"
                              value={bestExam}
                              onChange={handleBestExamChange}
                            />
                            <datalist id="qualifiedOptions">
                              <option value="Yes, cleared PRELIMS of UPSC Civil Services" />
                              <option value="Yes, cleared MAINS of UPSC Civil Services" />
                              <option value="Yes, cleared PRELIMS of State Civil Services" />
                              <option value="Yes, cleared MAINS of State Civil Services" />
                              <option value="Not cleared any of these" />
                            </datalist>
                          </div>
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="takenAnyCoaching"
                              className="form-label"
                            >
                              Have you taken or currently taking any coaching
                              for Civil Services ? (If 'Yes', please mention the
                              course name, else write 'No')
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Your Answer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="scholarship" className="form-label">
                              Why do you feel that you are the most deserving
                              candidate for this scholarship ?(Answer in less
                              than 100 words)
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Your Answer"
                              value={justification}
                              onChange={(e)=>setJustification(e.target.value)}
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label htmlFor="initiative" className="form-label">
                              How did you come to know about this initiative ?
                            </label>
                            <input
                              className="form-control custom-input"
                              list="initiativeOptions"
                              id="exampleDataList"
                              placeholder="Select Options"
                              value={initiative}
                              onChnage={handleInitiativeChange}
                            />
                            <datalist id="initiativeOptions">
                              <option value="Social Media" />
                              <option value="Print Media" />
                              <option value="Electronic Media" />
                              <option value="Friend" />
                              <option value="College" />
                            </datalist>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-6 col-sm-full">
                            <label htmlFor="details" className="form-label">
                              Give details about your achievements, awards
                              received or position of responsibility
                              (School/College level), if any. Also give a brief
                              description of your hobbies / extra curricular
                              activities / interests ? (Answer in less than 100
                              words)
                            </label>
                            <textarea
                              className="form-control"
                              id="details"
                              rows="4"
                              value={extraCurricular}
                              onChange={(e)=>setExtraCurricular(e.target.value)}
                            />
                          </div>
                          <div className="col-6 col-sm-full">
                            <label
                              htmlFor="intermediatepercentage"
                              className="form-label"
                            >
                              Any queries / comments / suggestions ?
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Your Answer"
                              value={comments}
                              onChange={(e)=>setComments(e.target.value)}
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

export default ApplyForm;
