import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../../../components/Header/Header";
import MobileMenu from "../../../components/Mobile Menu/MobileMenu";
import Footer from "../../../components/Footer/Footer";
import SessionType from "../../../components/Popup/SessionType";
import { Link } from "react-router-dom";
import Btn from "../../../components/Button/Btn";

export default function TarotReader() {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [tarotReaders, setTarotReaders] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split("");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join("") + "...";
    }
    return text;
  };

  useEffect(() => {
    const fetchTarotReaders = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7218/api/TarotReader"
        );

        const filterDuration = response.data.map((reader) => ({
          ...reader,
          sessionTypes: reader.sessionTypes.filter(
            (sessionType) => sessionType.duration === 30
          ),
        }));
        setTarotReaders(filterDuration);
      } catch (error) {
        console.error("Error fetching the tarot readers data", error);
      }
    };

    fetchTarotReaders();
  }, []);

  return (
    <div>
      {/* <!-- Header Modal --> */}
      <Header />

      <section class="sub-banner-section float-start w-100">
        <div class="img-main-abnner d-inline-block w-100">
          <img alt="sm" src="assets/images/horocurty03.jpg" />
        </div>
        <div class="container">
          <h2 class="text-center text-white"> Tarot Reader </h2>
          <nav class="mt-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">Trang Chủ</li>
              <li class="breadcrumb-item active">Tarot Reader</li>
            </ol>
          </nav>
        </div>
      </section>
      <main
        class="float-start w-100 body-main"
        style={{ backgroundColor: "#0c071c" }}
      >
        <section class="listing-page-div">
          <div class="container">
            <div class="row gx-lg-5">
              <div class="col-lg-3">
                <div
                  class="accordion mt-4 list-serach-acd"
                  id="accordionPanelsStayOpenExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Kinh Nghiệm
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body my-4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Tình yêu
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault2"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault2"
                          >
                            Công việc
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault3"
                          >
                            Sức khỏe
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault4"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault4"
                          >
                            Tài chính
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                      >
                        Languages
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body my-5">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultlg"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefaultlg"
                          >
                            Hindi
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultlg2"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefaultlg2"
                          >
                            English
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultlg3"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefaultlg3"
                          >
                            Spanish
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefaultlg4"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefaultlg4"
                          >
                            French
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                      >
                        Rating
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      class="accordion-collapse collapse show"
                    >
                      <div class="accordion-body my-5">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault7"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault7"
                          >
                            2.0 and above
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault8"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault8"
                          >
                            3.0 and above
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault9"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault9"
                          >
                            4.0 and above
                          </label>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div class="accordion-item">
                    {/* <h2 class="accordion-header">
                      <button
                        class="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapsefour"
                      >
                        Experience
                      </button>
                    </h2> */}
                    <div
                      id="panelsStayOpen-collapsefour"
                      class="accordion-collapse collapse show"
                    >
                      {/* <div class="accordion-body my-5">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault11"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault11"
                          >
                            Upto 10 Years
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault12"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault8"
                          >
                            Upto 15 Years
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault13"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault13"
                          >
                            Upto 10 Years
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault14"
                          />
                          <label
                            class="form-check-label rt-icon"
                            for="flexCheckDefault14"
                          >
                            20 Years & Above
                          </label>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <input type="submit" class="btn submit-btn" value="Filter" />
                </div>
              </div>

              <div class="col-lg-9 mt-5 mt-lg-0">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="right-section-btn d-flex align-items-center">
                    <div class="dropdown">
                      <button
                        class="btn bg-light dfg dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sắp xếp
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Ít hơn 1 năm
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Trên 1 năm
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Trên 3 năm
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Trên 5 năm
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="products">
                  <div class="row g-lg-5 mt-0">
                    {tarotReaders.map((reader, index) => (
                      <div
                        key={index}
                        className="item list-item col-md-12 col-xl-6 view-group grid-group-item collist"
                      >
                        <div className="comon-items-d1 d-inline-block w-100">
                          <Link to={`tarot-reader/${reader.tarotReaderId}`}>
                            <div className="top-asto d-flex align-items-center justify-content-between w-100">
                              <div className="pro-astro d-flex align-items-start">
                                <div className="profile-astro">
                                  <img
                                    alt="ser"
                                    src="assets/images/profile2.png"
                                  />
                                </div>

                                <div className="le-astro ms-4">
                                  <h5>
                                    {reader.user.firstName}{" "}
                                    {reader.user.lastName}
                                  </h5>
                                  <p className="rt-cion">
                                    <span>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                    </span>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </p>
                                </div>
                              </div>

                              <div className="right-usert text-lg-end">
                                <h5> Love, Work </h5>
                                <p> Exp: 3 Years </p>
                              </div>
                            </div>
                          </Link>
                          <div className="lang-ved mt-4">
                            <p>
                              <i className="fas fa-newspaper"></i>{" "}
                              {truncateText(reader.introduction, 40)}
                            </p>
                          </div>

                          <hr />
                          <div
                            className="lang-ved mt-4"
                            style={{ justifyContent: "space-between" }}
                          >
                            {reader.sessionTypes.map((sessionType) => (
                              <p
                                key={sessionType.sessionTypeId}
                                style={{ marginTop: "1.5rem" }}
                              >
                                <i
                                  className="fas fa-clock"
                                  style={{
                                    color: "#273cb9",
                                    fontSize: "25px",
                                  }}
                                ></i>
                                {sessionType.duration} phút
                              </p>
                            ))}

                            <btn
                              onClick={openModal}
                              className="btn btn-comij-call"
                            >
                              Book Me
                            </btn>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img alt="ser" src="assets/images/profile2.png" />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Tan Tran</h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Love, Work </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> CONNECTION AND
                            HAPPINESS
                          </p>
                        </div>

                        <hr />
                        <div class="d-flex align-items-center justify-content-between my-4">
                          <p style={{ marginTop: "1.5rem" }}>
                            {" "}
                            <i
                              class="fas fa-clock "
                              style={{ color: "#273cb9", fontSize: "25px" }}
                            ></i>{" "}
                            30/min
                          </p>

                          <Btn onClick={openModal} class="btn btn-comij-call">
                            Book Me
                          </Btn>
                        </div>
                      </div>
                    </div> */}
                    {/* <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img alt="ser" src="assets/images/profile4.png" />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Minh Đăng</h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Love </h5>
                            <p> Exp: 5 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> TAROT FOR EVOLUTION
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 90/min
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img alt="ser" src="assets/images/profile1.png" />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Văn Nga</h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Health, Family </h5>
                            <p> Exp: 2 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> CONNECTION &
                            LIBERATION
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 60/min
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img alt="ser" src="assets/images/profile3.png" />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Ánh Nguyệt</h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Work </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> HUMANISTIC TAROT
                            READER
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 30/min
                          </p>
                        </div>
                      </div>
                    </div> */}

                    {/* <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/istockphoto-1277971635-612x612.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Baker Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/istockphoto-1200677760-612x612.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Nalty Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/testimonials-1-1.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Quinn Smith </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/tania-medina-zwsL1bj_yKA-unsplash.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Lopez Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 15 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/image-13-1561127528.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Baker Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/depositphotos_81108858-stock-photo-casual-business-indian-boy-portrait.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Patel Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic, Tarot </h5>
                            <p> Exp: 10 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/close-up-portrait-young-indian-man-white-shirt-posing-standing-smiling-looks-calm.webp"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Baker Dan </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/istockphoto-963801050-612x612.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5>Klein Jones </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item list-item col-md-12 col-xl-6 view-group grid-group-item collist">
                      <div class="comon-items-d1 d-inline-block w-100">
                        <div class="top-asto d-flex align-items-center justify-content-between w-100">
                          <div class="pro-astro d-flex align-items-start">
                            <div class="profile-astro">
                              <img
                                alt="ser"
                                src="assets/images/istockphoto-1277996375-612x612.jpg"
                              />
                            </div>
                            <div class="le-astro ms-4">
                              <h5> Rose Samith </h5>
                              <p class="rt-cion">
                                <span>
                                  {" "}
                                  <i class="fas fa-star"></i>{" "}
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>{" "}
                                </span>
                                <i class="fas fa-star"></i>{" "}
                                <i class="fas fa-star"></i>
                              </p>
                            </div>
                          </div>

                          <div class="right-usert text-lg-end">
                            <h5> Vedic </h5>
                            <p> Exp: 3 Years </p>
                          </div>
                        </div>
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-newspaper"></i> Lang: English,
                            Hindi, Spanish
                          </p>
                        </div>

                        <hr />
                        <div class="lang-ved mt-4">
                          <p>
                            {" "}
                            <i class="fas fa-clock"></i> 5/min
                          </p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between my-4">
                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij"
                          >
                            <i class="fas fa-comments"></i> Start Chat
                          </a>

                          <a
                            href="astrologer-details.html"
                            class="btn btn-comij-call"
                          >
                            <i class="fas fa-phone-alt"></i> Start Call
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  <nav class="my-5">
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <a class="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section class="news-letter-div d-inline-block w-100 mt-5">
          <div class="container">
            <div class="comon-heading text-center mt-5">
              <h5 class="sub-heading" data-aos="fade-down">
                {" "}
                Our Newsletter{" "}
              </h5>
              <h2 class="text-white comon-heading mt-2 mb-3" data-aos="fade-up">
                {" "}
                Subscribe And Ask For Free{" "}
              </h2>
            </div>
            <p class="col-lg-8 mx-auto d-block text-center" data-aos="fade-up">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <form
              method="get"
              action="https://oxentictemplates.in/templatemonster/astrology/gm"
              class="w-100"
            >
              <div
                class="subcribe-section mt-5 col-lg-5 mx-auto d-flex justify-content-center"
                data-aos="fade-up"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                />
                <button type="submit" class="subscribe btn">
                  {" "}
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </section> */}
      </main>

      {/* <!-- footer Modal --> */}
      <Footer />

      {/* <!-- mobile menu --> */}

      <MobileMenu />

      {/* <!-- SessionType menu --> */}
      {isModalOpen && <SessionType onClose={closeModal} />}

      {/* <SessionType /> */}
    </div>
  );
}
