import React, {Component} from "react";
import TicketForm from "./ticketForm"
import {EditTicket} from "../../constants/queries";


class Edit extends Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.id);
          this.formData = {
            title: "",
            body: "",
            type: ""
        }
    }

    render() {
        return (<TicketForm {...(this.props)} formData={this.formData} mutation={EditTicket}/>)
    }
}

export default Edit;
