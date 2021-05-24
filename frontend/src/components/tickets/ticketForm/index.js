import React, {Component, Fragment} from "react";
import {Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import {Query} from "react-apollo";
import {getTicketTypes} from "../../../constants/queries";
import RenderTypes from "./types-dropdown"

class TicketForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData,
            error: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { 
        this.setState({formData: {...this.state.formData, [event.target.name]: event.target.value}});
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({error: false});
        let valid = await this.props.client.mutate({
            mutation: this.props.mutation,
            variables: {
                title: this.state.formData.title,
                type: this.state.formData.type,
                Date: this.state.formData.Date,
                ServiceOrDepartment: this.state.formData.ServiceOrDepartment,
                status: this.state.formData.status,
                Description: this.state.formData.Description,
            }
        }).then(response => {
            return response.data
        }).catch(error => {
            console.error(error);
            return false
        });
        this.setState({error: !valid});
        if (valid)
            this.props.history.push(`/tickets`)
    }

    render() {
        return (<Fragment>
            <h1>Create a new ticket</h1>
            {this.state.error && <Alert color="danger">
                Please make sure to fill all fields correctly
            </Alert>}
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="ticketTitle">Title</Label>
                    <Input type="text" name="title" id="ticketTitle" placeholder="Ticket Title"
                           value={this.state.formData.title}
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="ServiceOrDepartment">Department</Label>
                    <Input type="textarea" name="ServiceOrDepartment" id="ServiceOrDepartment" value={this.state.formData.ServiceOrDepartment}
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input type="textarea" name="Date" id="Date" value={this.state.formData.Date}
                           onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="Description">Description</Label>
                    <Input type="textarea" name="Description" id="Description" value={this.state.formData.Description}
                           onChange={this.handleChange}/>
                </FormGroup>
                <Query query={getTicketTypes}>
                    {({loading, error, data}) => {
                        if (loading) return <p>Loading ticket types</p>;
                        if (error) return <p>Error loading ticket types</p>;
                        return <RenderTypes handleChange={this.handleChange} val={this.state.formData.type}
                                            types={data.types.values}/>
                    }}
                </Query>
                <Button>Submit</Button>
            </Form>

        </Fragment>);
    }
}

export default TicketForm;

