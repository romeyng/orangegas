import React, { Component } from "react";
import InventoryContent from "./InventoryContent";
import { SupplyTicket } from "../ticketing/SupplyTicket";
import axios from "axios";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: "0",
      showSupplyForm: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (target.type == "checkbox") {
      this.setState({ [name]: target.checked });
    } else {
      this.setState({
        [name]: value
      });
    }
  }
  showSupplyForm = e => {
    e.preventDefault();
    this.setState({ showSupplyForm: true });
  };
  dateChange = dateReceived => this.setState({ dateReceived });

  submitSupply = () => {
    axios.post(`http://52.15.62.203:8080/createsupply`, {
      dateReceived: this.state.dateReceived,
      supplier: this.state.supplier,
      quantity: this.state.quantity,
      fuelLocation: this.state.fuelLocation,
      fuelType: this.state.fuelType
    });
  };

  render() {
    let modalClose = () => this.setState({ showSupplyForm: false });
    return (
      <main className="main-content bgc-grey-100">
        <div className="mainContent">
          <div className="border bgc-white">
            <form className="form-row">
              <div className="form-control form-control-lg col-3 border-0 mx-auto">
                Viewing Fuel Recon for
              </div>
              <div className="col-3 mx-auto">
                <select
                  className="form-control form-control-lg"
                  name="selectedLocation"
                  value={this.state.selectedLocation}
                  onChange={this.handleChange}
                >
                  <option value="0">ALL</option>
                  <option value="1">CIW</option>
                  <option value="2">AIA</option>
                </select>
              </div>
              <div className="col-3 mx-auto">
                <div className="p-3">
                  <button
                    className="btn btn-lg btn-warning"
                    onClick={this.showSupplyForm}
                  >
                    Receive Fuel
                  </button>
                </div>
              </div>
            </form>
          </div>
          <InventoryContent selectedLocation={this.state.selectedLocation} />
          <SupplyTicket
            show={this.state.showSupplyForm}
            onChange={this.handleChange}
            dateChange={this.dateChange}
            receiveDate={this.state.receiveDate}
            onHide={modalClose}
            submitSupply={this.submitSupply}
          />
        </div>
      </main>
    );
  }
}

export default Inventory;
