import React, { useState } from "react";

import { connect } from "react-redux";
import { saveCustomer } from "../../redux/Customer/customerThunks";
import Navbar from "../Navbar";
import Footer from "../Footer";
function CreateCustomer(props) {
  const [customers, SetCustomers] = useState({
    buildingName: "",

    city: "",
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
    pincode: "",
    state: "",
    streetNo: "",
  });

  function handleInput(e) {
    SetCustomers({
      ...customers,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    props.saveCustomers(customers);
    console.log(customers);
  }

  return (
    <div>
      <Navbar />
      <div class="container mt-5">
        <h2 style={{ fontWeight: "bold" }}>Details</h2>
        <br />
        <hr />
        <br />

        <form
          class="row row-cols-lg-auto g-3 align-items-center"
          onSubmit={handleSubmit}
          style={{ marginBottom: "40px" }}
        >
          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Customer Name
            </label>
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                First Name
              </div>

              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.firstName}
                name="firstName"
                placeholder="Enter your First Name"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                Last Name
              </div>

              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.lastName}
                name="lastName"
                placeholder="Enter your last Name"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Building Name
            </label>
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                Building
              </div>
              <textarea
                type="text"
                name="description"
                class="form-control"
                id="inlineFormInputGroupUsername"
                name="customerBuildingName"
                cols="70"
                rows="1"
                value={customers.buildingName}
                name="buildingName"
                onChange={handleInput}
                placeholder="Enter your building Name"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              City
            </label>
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                City
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.city}
                name="city"
                placeholder="Enter your City"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Country
            </label>
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                Country
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.country}
                name="country"
                placeholder="Enter your Country"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Email
            </label>
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                Email
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.email}
                name="email"
                placeholder="Enter your Email"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Mobile Number
            </label>
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                Mobile Number
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.mobileNumber}
                name="mobileNumber"
                placeholder="Enter your Mobile Number"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Pin Code
            </label>
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                Pin Code
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.pincode}
                name="pincode"
                placeholder="Enter your Pincode"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              State
            </label>
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                State
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.state}
                name="state"
                placeholder="Enter your State"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Street Number
            </label>
            <div class="input-group">
              <div
                class="input-group-text"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "15px",
                  marginTop: "12px",
                }}
              >
                Street Number
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.streetNo}
                name="streetNo"
                placeholder="Enter your Street Number"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary bg-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    customerData: state.customer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveCustomers: (customer) => dispatch(saveCustomer(customer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);
