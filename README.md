# RESTfull API todo

## How to use
(_prerequisites: Node.js, v12+_)
`npm install` in the root dir to install dependencies.
`npm test` to run the tests.
`npm start` (default port is 3000) to start the server.




## API Endpoints

|HTTP method|Path|Usage|Request schema|Response schema|
|-----------|---|-----|----------------|--------------|
|GET|'api/todos'|Returns all the saved todos| NA| `Todo[]`|
|POST|'api/todos'|Saves an array of todos|body:`[{description:"..."},...]`| NA|
|PUT|'api/todos/:id'|Changes the state of a todo to isDone=true|`id(number)`| NA|
|DELETE|'api/todos/:id'|Deletes a todo|`id(number)`| NA|

In the PUT route i've decided to not send body and just pass param since the required action is specific.

## Main Decisions
* Express will be the server framework.
* TypeScript will be used to add typings and provide tighter feedback loop while adding code.
* The API will be RESTfull:
    * The routes will be built around the concept of resources (e.g. Todos).
    * The actions will be called by HTTP methods.
    * The relevant status code for each response will be returned.
* Persistence will be maintained by SQLITE, so it will work anywhere immediately without the need of a server.
* Mocha will be used as the testing framework alongside with chai.



## Data model
We will be saving all the data about the Todo's in the next schema:
```
    id: number (auto generated)
    description: string (required)
    isDone: boolean (Defaults to False)
    creationTime: Date (Defaults to now)
```



## Design
The design of the system as as follows:
Router -> Logic -> Data-Access-Object -> Persistence(DB)

Example of a flow in the system:
Incoming request ->
Router routes to relevant logic ->
Logic interacts with the Data-Access-Object (DAO) ->
The DAO queries the persistence layer (DB) ans returns data->
Logic builds a response and sends back to client (through the router)



 ### Notes
 * To keep the logic easily testable I have used dependency injection of the DB instance.
 



 ### Development environment
 * Used knex as a library for querying the db in JavaScript.
 * I have used nodemon to auto restart my server while coding, hence the nodemon.json config file.
 * Added morgan as logger for requests in dev env.
 * Added helmet for security in production env.


