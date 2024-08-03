import React from "react";
import ActivityChart from "./ActivityChart";
import Orders from "./Orders";
import Feedback from "./Feedback";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaChevronCircleRight } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidDish } from "react-icons/bi";

const Dashboard = () => {
  const percentage = 70;
  return (
    <main className="p-3 flex-grow-1">
      <h2 className="text-white fw-semibold">Dashboard</h2>
      <section className="mb-4">
        <div className="row gy-2">
          <div className="col-lg-8">
            <div className="row gy-2">
              <div className="col-lg-3 col-6">
                <div className="card bg-custom text-white">
                  <div className="card-body bg-custom">
                    <BsCart4 className="fs-2 icon-1 rounded p-2" />
                    <h6 className="card-title bg-custom">Total Orders</h6>
                    <div className="d-flex justify-content-between align-items-center bg-custom">
                      <p className="card-text fs-2 mb-0 fw-bold bg-custom">
                        75
                      </p>
                      <p className="text-success mb-0 bg-custom">
                        <IoMdArrowDropup className="me-1 bg-custom fs-4" />
                        3%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="card bg-custom text-white">
                  <div className="card-body bg-custom">
                    <BsFillBagCheckFill className="fs-2 icon-2 rounded p-2" />
                    <h6 className="card-title bg-custom">Total Delivered</h6>
                    <div className="d-flex justify-content-between align-items-center bg-custom">
                      <p className="card-text fs-2 mb-0 fw-bold bg-custom">
                        70
                      </p>
                      <p className="text-danger mb-0 bg-custom">
                        <IoMdArrowDropup className="me-1 bg-custom fs-4" />
                        3%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="card bg-custom text-white">
                  <div className="card-body bg-custom">
                    <BsBagXFill className="fs-2 icon-3 rounded p-2" />
                    <h6 className="card-title bg-custom">Total Cancelled</h6>
                    <div className="d-flex justify-content-between align-items-center bg-custom">
                      <p className="card-text fs-2 mb-0 fw-bold bg-custom">
                        05
                      </p>
                      <p className="text-success mb-0 bg-custom">
                        <IoMdArrowDropup className="me-1 bg-custom fs-4" />
                        3%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="card bg-custom text-white">
                  <div className="card-body bg-custom">
                    <RiMoneyDollarCircleFill className="fs-2 icon-4 rounded p-2" />
                    <h6 className="card-title bg-custom">Total Revenue</h6>
                    <div className="d-flex justify-content-between align-items-center bg-custom">
                      <p className="card-text fs-2 mb-0 fw-bold bg-custom">
                        $12k
                      </p>
                      <p className="text-danger mb-0 bg-custom">
                        <IoMdArrowDropup className="me-1 bg-custom fs-4" />
                        3%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-custom text-white">
              <div className="card-body bg-custom d-flex justify-content-between align-items-center">
                <div className="bg-custom">
                  <h6 className="card-title bg-custom">Net Profile</h6>
                  <p className="card-text bg-custom fs-1 fw-bold mb-0">
                    $6759.25
                  </p>
                  <p className="text-success mb-0 bg-custom">
                    <IoMdArrowDropup className="me-1 bg-custom fs-4" />
                    3%
                  </p>
                </div>
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar
                    className="bg-custom"
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textSize: "18px",
                      pathColor: `rgba(114, 148, 255, ${percentage / 100})`,
                      textColor: "#fff",
                      trailColor: "#b98dff32",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex justify-content-between">
              <h1 className="fs-4 text-white">Activity</h1>
              <p className="fs-6 text-white px-4 border rounded-5">
                Weekly
                <IoMdArrowDropdown className="fs-5" />
              </p>
            </div>
            <ActivityChart />
          </div>
          <div className="col-lg-4">
            <div className="card bg-custom text-white">
              <div className="card-body bg-custom">
                <div className="d-flex justify-content-between bg-custom">
                  <h5 className="card-title bg-custom">
                    <GoGoal className="p-2 fs-2 icon-5 rounded me-2" />
                    Goals
                  </h5>
                  <p className="mb-0 fs-5 bg-custom">
                    <FaChevronCircleRight className="bg-custom" />
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-custom text-white">
              <div className="card-body bg-custom">
                <div className="d-flex justify-content-between bg-custom">
                  <h5 className="card-title bg-custom">
                    <FaBowlFood className="p-2 fs-2 icon-6 rounded me-2" />
                    Popular Dishes
                  </h5>
                  <p className="mb-0 fs-5 bg-custom">
                    <FaChevronCircleRight className="bg-custom" />
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-custom text-white">
              <div className="card-body bg-custom">
                <div className="d-flex justify-content-between bg-custom">
                  <h5 className="card-title bg-custom">
                    <BiSolidDish className="p-2 fs-2 icon-7 rounded me-2" />
                    Menus
                  </h5>
                  <p className="mb-0 fs-5 bg-custom">
                    <FaChevronCircleRight className="bg-custom" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row gy-3">
        <div className="col-lg-8">
          <Orders />
        </div>
        <div className="col-lg-4">
          <Feedback />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
