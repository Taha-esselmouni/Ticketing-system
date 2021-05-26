# NOTE
This repository is still undergoing development. and not ready to be used yet.
## Progress so far
1) Defined GraphQL Schema
2) Connected GraphQL schema to MongoDB for data persistence using mongoose
3) Validate user authentication using ApolloServer
4) Authenticate users using jwt
5) Connect React app to redux store
6) React query ApolloServer using ApolloClient

# Application
A simple ticketing system where multiple users create and assign tickets and update ticket statues

# Implementation
The system exposes ApolloServer using NodeJs. Using schemas to define GraphQL and Mongoose to persist data to MongoDB server.

As a front-end, react connects to the ApolloServer using react-apollo and using Bootstrap 4 implements the UI of the ticketing system.


# Installation notes
## Dependencies
Install `concurrently`
        
    sudo npm install -g concurrently
Install `mongodb`
        
    sudo apt install mongodb-server-core

Install `nodemon`
    sudo npm install -g nodemon
Install `apollo`

    npm i -g apollo@2.4.4
## ReactStrap: Bootstrap 4
    npm install --save bootstrap
    npm install --save reactstrap

# Generating the types from schema
    apollo schema:download --endpoint http://localhost:4000 schema.json    
    apollo client:codegen --localSchemaFile schema.json --target typescript __generated__

# picteur of project
![add-user.png](./screen-shot/add-user.png)
![login.png](./screen-shot/login.png)
![creat-ticket](./screen-shot/Creat-ticket.png)
![screen-home-page](./screen-shot/screen-home-page.png)
![screen-ticket-user](./screen-shot/screen-ticketing.user.png)
![screen-collection](./screen-shot/screen-collection.png)

![ticketing_tickets-screen](https://user-images.githubusercontent.com/44399342/119634862-0b64b880-be0b-11eb-876d-a166602dc443.png)
![add-user](https://user-images.githubusercontent.com/44399342/119634865-0bfd4f00-be0b-11eb-81c0-1d7c35e32ef9.png)
![Creat-ticket](https://user-images.githubusercontent.com/44399342/119634866-0c95e580-be0b-11eb-9f45-566d9742c2be.png)
![login](https://user-images.githubusercontent.com/44399342/119634867-0c95e580-be0b-11eb-83d0-1e60a2fed92c.png)
![screen-collection](https://user-images.githubusercontent.com/44399342/119634869-0d2e7c00-be0b-11eb-85cc-95aa2179cab8.png)
![screen-home-page](https://user-images.githubusercontent.com/44399342/119634871-0dc71280-be0b-11eb-86f7-4d15de5d5d3a.png)
![screen-ticketing user](https://user-images.githubusercontent.com/44399342/119634874-0e5fa900-be0b-11eb-95a0-d52809daa8b2.png)
# Create From 
                                                                           Taha Esselmouni
