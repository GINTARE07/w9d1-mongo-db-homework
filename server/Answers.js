// answers to quastions:


// 1. What is responsible for defining the routes of the games resource?
// game form /(client)

// 2. What do you notice about the folder structure? Whats the client responsible for? Whats the server responsible for?
// client is respondible for data Input, server is responsible for accesing database and pullimng information of database and returning it to the client.

// 3. What are the the responsibilities of server.js?
// Accesing dabatabse and updating details in it.

// 4. What are the responsibilities of the gamesRouter?
// to manage post requests to database (get data, input, update, show, delete)

// 5. What process does the the client (front-end) use to communicate with the server?
// Restfull routes

// 6.What optional second argument does the fetch method take? And what is it used for in this application? Hint: See Using Fetch on the MDN docs
// Which of the games API routes does the front-end application consume (i.e. make requests to)?
// mongoClient

// 8. What are we using the MongoDB Driver for?
// It allows us to interact with MongoDB using Promises or via traditional callbacks