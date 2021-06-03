      import gql from 'graphql-tag';

      export const getUsers = gql`
            {
              Users(filter: {limit: 10}) {
                _id
                firstName
                lastName
                email
              }
            }
        `;
      export const getTickets = gql`
            {
              Tickets(filter: {limit: 10}) {
                _id
                title
                body
                type
                status
                userId
                user {
                  firstName
                  lastName
                }
              }
            }`;
      export const validateLogin = gql`
            {
                self {
                    _id
                }
            }`;
      export const getToken = gql`
            query Login($email: String!, $password: String!) {
              login(filter: {email:$email,password:$password})
            }
        `;
      export const createTicket = gql`
      mutation newTicket($title:String!,$body:String!,$type:String!){
      addTicket(input: {
        title: $title,
        body: $body,
        type: $type,
      }) {_id}
      }`;
      export const getTicketTypes = gql`
      {
      types: __type(name: "types") {
        values:enumValues {
          name
        }
      }
      }`;
      export const getTicketStates = gql`
      {
      states: __type(name: "states") {
        values:enumValues {
          name
        }
      }
      }`;
      export const getAllEnums = gql`
      {
      types: __type(name: "types") {
        values:enumValues {
          name
        }
      }
      states: __type(name: "states") {
        values:enumValues {
          name
        }
      }
      }`;
      export const EditTicket = gql`
      mutation EditTicket($title:String!,$body:String!,$type:String!){
      Ticket(input: {
        title: $title,
        body: $body,
        type: $type,
      }) {_id}
      }`;
      export const EditTicketTypes = gql`
      {
      types: __type(name: "types") {
        values:enumValues {
          name
        }
      }
      }`;
      export const EditTicketStates = gql`
      {
      states: __type(name: "states") {
        values:enumValues {
          name
        }
      }
      }`;
      export const EditAllEnums = gql`
      {
      types: __type(name: "types") {
        values:enumValues {
          name
        }
      }
      states: __type(name: "states") {
        values:enumValues {
          name
        }
      }
      }`;

      export const DELETE_Ticket = gql`
      mutation DeleteTicket($id: String!){
      deleteTicket(id: $id)
       }`;
