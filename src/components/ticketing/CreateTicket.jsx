import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import "react-datepicker/dist/react-datepicker.css";

import { Modal } from "react-bootstrap";
import axios from "axios";
class CreateTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: Date(),
      fuelLocation: "Fuel Location",
      fuelType: "Fuel Type"
    };
    this.postNewFuelTicket = this.postNewFuelTicket.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  postNewFuelTicket(e) {
    e.preventDefault();
    axios
      .post(`http://52.15.62.203:8080/`, {
        //TODO: params here
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
    console.log("sentpost req");
  }

  handleChange(event) {
    //function changes state as form values are editted
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            FBO Fuel Request/ Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="bgc-white bd col-6">
                <h6 className="c-grey-900">Customer Details</h6>
                <div className="mT-30">
                  <div className="form-row">
                    <div className="form-group input-group input-group-lg col">
                      <input
                        type="text"
                        className="form-control"
                        id="customerName"
                        placeholder="Flight/ Customer Name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="customerID"
                        placeholder="ID"
                      />
                    </div>
                    <div className="form-group col">
                      <input
                        type="text"
                        className="form-control"
                        id="tailNumnber"
                        placeholder="Tail #"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-4 p-2">
                      <input
                        type="text"
                        className="form-control"
                        id="origin"
                        placeholder="Origin"
                      />

                      <input
                        type="text"
                        className="form-control"
                        id="destination"
                        placeholder="Destination"
                      />
                    </div>

                    <div className="form-group col-7 p-2 ">
                      <input
                        type="text"
                        className="form-control"
                        id="dateCreated"
                        placeholder="Created on"
                      />

                      <input
                        type="text"
                        className="form-control"
                        id="dateComplete"
                        placeholder="Completed on"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bgc-white bd col-6">
                <h6 className="c-grey-900">Request Details</h6>
                <div className="mT-30">
                  <div className="form-row">
                    <div className="form-group col-6 mx-auto">
                      <select
                        className="custom-select form-control form-control-lg"
                        name="fuelLocation"
                        value={this.state.fuelLocation}
                        onChange={this.handleChange}
                      >
                        <option value="0">Fuel Location</option>
                        <option value="CIW">CIW</option>
                        <option value="SVD">SVD</option>
                        <option value="BGI">BGI</option>
                        <option value="UVF">UVF</option>
                      </select>
                    </div>
                    <div className="form-group col-6 mx-auto">
                      <select
                        className="custom-select form-control form-control-lg"
                        name="fuelType"
                        value={this.state.fuelType}
                        onChange={this.handleChange}
                      >
                        <option value="0">Fuel Type</option>
                        <option value="1">Jet A-1</option>
                        <option value="2">AvGas 100</option>
                        <option value="3">Diesel</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row ">
                    <div className="form-control form-control-lg col-6 border-0">
                      Quantity Requested:
                    </div>
                    <div className="form-group input-group col-6 ">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="quantity"
                        placeholder="0"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">us. gal</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-row" />

                  <div className="form-row">
                    <div className="form-group col-6 input-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Before"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">us. gal</span>
                      </div>
                    </div>

                    <div className="form-group col-6 input-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="After"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">us. gal</span>
                      </div>
                    </div>
                  </div>
                  <div className=" form-row">
                    <div className="form-control form-control-lg col-6 border-0 ">
                      Actual Uplift:
                    </div>

                    <div className="form-group col-6 input-group">
                      <div
                        className="form-control form-control-lg bg-info"
                        type="text"
                        placeholder="0"
                        name="meterActual"
                        id="meterActual"
                      >
                        0
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text">us. gal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="bgc-white bd col">
                <h6 className="c-grey-900">Billing</h6>
                <div className="mT-30">
                  <div className="form-row ">
                    <div className="form-group input-group input-group-lg mx-auto">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkCash"
                          value="cash"
                        />
                        <label htmlFor="chkCash">Cash</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkCheque"
                          value="cheque"
                        />
                        <label htmlFor="chkCheque">Cheque</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkCard"
                          value="card"
                        />
                        <label htmlFor="chkCard">Card</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-lg btn-primary "
            onClick={this.postNewFuelTicket}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateTicket;
