import React, { Component } from 'react';
import TicketsFrom from "./ticketForm"
import { createTicket } from "../../constants/queries";


class Ticket extends Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.id);
        this.fromData = {
            title: "",
            body: "",
            type: ""
        }
    }

    render() {
      return (<TicketForm {...(this.props)} formData={this.formData} mutation={createTicket}/>)
    }
}

export default Create;