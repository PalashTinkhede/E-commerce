/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import ShowOrderProduct from './ShowOrderProduct';
import axios from "axios";

import TableProduct from "./TableProduct";

const PaymentConfirmation = () => {
  const { cart, clearCart, url,userAddress, user, user_Order } = useContext(AppContext);


   const [qty, setQty] = useState(0);
      const [price, setPrice] = useState(0);
      useEffect(() => {
        let qty = 0;
        let price = 0;
        if (cart?.items) {
          for (let i = 0; i < cart.items?.length; i++) {
            qty += cart.items[i].qty;
            price += cart.items[i].price;
          }
        }
        setPrice(price);
        setQty(qty);
      }, [cart]);



  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});
  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);
  
  const submitHandler =()=>{
    navigate("/")

  }
  // console.log("latestOrder", latestOrder);

  return (
    <div className="container my-5">
      <div className="container">
        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">
                OrderItems
              </th>

              <th scope="col" className="bg-dark text-light text-center">
                OrderDetails & ShippingAddress
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>
              <td className="bg-dark text-light">
                {/* <TableProduct cart={cart} /> */}
                <ShowOrderProduct items={latestOrder?.orderItems} />

                {/* <table className="table table-bordered border-primary bg-dark text-center">
                  <thead>
                    <tr>
                      <th scope="col" className="bg-dark text-light">
                        Product Img
                      </th>
                      <th scope="col" className="bg-dark text-light">
                        Title
                      </th>
                      <th scope="col" className="bg-dark text-light">
                        Price
                      </th>
                      <th scope="col" className="bg-dark text-light">
                        Qty
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                  {cart?.items?.map((product) => (
                    <tr key={product._id}>
                      <th scope="row" className="bg-dark text-light">
                        <img
                          src={product.imgSrc}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </th>
                      <td className="bg-dark text-light">{product.title}</td>
                      <td className="bg-dark text-light">{product.price}</td>
                      <td className="bg-dark text-light">{product.qty}</td>
                    </tr>
                  ))}
                  
                    <tr >
                      <th scope="row" className="bg-dark text-light"></th>
                      <td className="bg-dark text-light">
                        {" "}
                        <button
                          className="btn btn-primary"
                          style={{ fontWeight: "bold" }}
                        >
                          Total
                        </button>{" "}
                      </td>
                      <td className="bg-dark text-light">
                        {" "}
                        <button
                          className="btn btn-warning"
                          style={{ fontWeight: "bold" }}
                        >
                          {price}
                        </button>
                      </td>
                      <td className="bg-dark text-light">
                        <button
                          className="btn btn-info"
                          style={{ fontWeight: "bold" }}
                        >
                          {qty}
                        </button>
                      </td>
                      
                    </tr>

                 
          </tbody>
                </table> */}
              </td>
              <td className="bg-dark text-light">
                <ul style={{ fontWeight: "bold" }}>
                  <li>Name : {userAddress?.fullName}</li>
                  <li>Phone : {userAddress?.phoneNumber}</li>
                  <li>Country : {userAddress?.country}</li>
                  <li>State : {userAddress?.state}</li>
                  <li>PinCode : {userAddress?.pincode}</li>
                  <li>Near By : {userAddress?.address}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="text-center">Bank Information</h1>
      <div className="bg-light bg-dark p-4 rounded">
        <h3>Sellers Bank Details</h3>
        <ul>
          <li>Bank Name: ABC Bank</li>
          <li>Account Number: 123456789</li>
          <li>IFSC Code: ABCD0123456</li>
          <li>Account Holder Name: John Doe</li>
        </ul>
      </div>

      <h2 className="text-center my-4">Enter Transaction ID</h2>
      <form  className="text-center">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={submitHandler} className="btn btn-primary" >
          continue Shopping
        </button>
      </form>
    </div>
  );
};

export default PaymentConfirmation;
