import React from "react";
import img from "../assets/img1.jpg";

const Orders = () => {
  return (
    <div className="card bg-custom text-white">
      <div className="bg-custom card-body">
        <h5 className="bg-custom card-title mb-4">Recent Orders</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={img}
                  alt=""
                  className="rounded-circle img-fluid me-2"
                  style={{ width: 30, height: 30 }}
                />
                Wade Warren
              </td>
              <td>15478256</td>
              <td>$124.00</td>
              <td className="text-success">Delivered</td>
            </tr>
            <tr>
              <td>
                <img
                  src={img}
                  alt=""
                  className="rounded-circle img-fluid me-2"
                  style={{ width: 30, height: 30 }}
                />
                Jane Cooper
              </td>
              <td>48965786</td>
              <td>$305.02</td>
              <td className="text-success">Delivered</td>
            </tr>
            <tr>
              <td>
                <img
                  src={img}
                  alt=""
                  className="rounded-circle img-fluid me-2"
                  style={{ width: 30, height: 30 }}
                />
                Guy Hawkins
              </td>
              <td>78985215</td>
              <td>$45.88</td>
              <td className="text-danger">Cancelled</td>
            </tr>
            <tr>
              <td>
                <img
                  src={img}
                  alt=""
                  className="rounded-circle img-fluid me-2"
                  style={{ width: 30, height: 30 }}
                />
                Kristin Watson
              </td>
              <td>20965732</td>
              <td>$56.00</td>
              <td className="text-danger">Pending</td>
            </tr>
            <tr>
              <td>
                <img
                  src={img}
                  alt=""
                  className="rounded-circle img-fluid me-2"
                  style={{ width: 30, height: 30 }}
                />
                Cody Fisher
              </td>
              <td>95715620</td>
              <td>$545.00</td>
              <td className="text-success">Delivered</td>
            </tr>
            <tr>
              <td>
                <img
                  src={img}
                  alt=""
                  className="rounded-circle img-fluid me-2"
                  style={{ width: 30, height: 30 }}
                />
                Savannah Nguyen
              </td>
              <td>78514568</td>
              <td>$128.20</td>
              <td className="text-success">Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
