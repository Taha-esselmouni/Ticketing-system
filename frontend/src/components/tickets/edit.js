import React, {Component } from "react";
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './style.component.css';
import { fetch } from '';




class EditTicket extends Component{
    
  constructor(props) {
    super(props)

    this.onChangeTicketTitle = this.onChangeTicketTitle.bind(this);
    this.onChangeTicketType = this.onChangeTicketType.bind(this);
 
    this.onChangeTicketBody = this.onChangeTicketBody.bind(this);
   
    // this.onChangeTicketDate = this.onChangeTicketDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      title: '',
      type: '',
      
      body: ''
    }
    
  }
       
        
  componentDidMount() {
    fetch.get(`http://localhost:4000/getticket/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ 
          title: res.data.title,
          type: res.data.type,
          body: res.data.body
        });
      })
      .catch((error) => {
        console.log(error);
      })
      
  }


  onChangeTicketTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeTicketType(e) {
    this.setState({ type: e.target.value })
  }

  onChangeTicketBodyT(e) {
    this.setState({ body: e.target.value })
  }

  
  
  onSubmit = (e) => {
    e.preventDefault();
    const ticketObject = {
      title: this.state.title,
      type: this.state.type,
      
      body: this.state.body,
     
      
    };

      fetch.put('http://localhost:4000/Updateticket/' +this.props.match.params.id, ticketObject)
      .then((res) => {
        console.log(res.data)
        console.log('ticket successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      
    // Redirect to Ticket List 
    // this.props.history.push('../../components/create-ticket.component')
  }

          
	render(){
		return(
			<div className="ticket">
				<h3>Update a Ticket</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Title: </label>
            	<input type="text"
                  className="form-control"
                   name="title"
                  value={this.state.title}
                  onChange={this.onChangeTicketTitle}
                  required
            	/>
					</div>
					<div className="form-group">
						<label>Type: </label>
            	<input style={{resize: 'none'}}
                  type="text"
                  maxLength="250"
                  rows="3"
                  className="form-control"
                  name="type"
                  value={this.state.type}
                  onChange={this.onChangeTicketType}
                  required
            	></input>
					</div>
					
                    
                    <div className="form-group">
						<label>body </label>
            	<textarea style={{resize: 'none'}}
                  type="text"
                  maxLength="250"
                  rows="3"
                  className="form-control"
                  name="body"
                  value={this.state.body}
                  onChange={this.onChangeTicketBody}
                  required
            	></textarea>
					</div>

					<div className="mt-2 form-group">
              <input
              type="submit"
                   value="Submit Ticket"
                   className="btn btn-primary"
              />
          </div>
				</form>
			</div>
		);
	}
}

export default EditTicket;



