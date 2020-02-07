# [COURSE] "La biblia de Node.js".

# Section 05 - Refreshing JS (ES6)

##  Basics - from callback to promises.

### -> Callback
> A function who serves as argument to another function, the second one can call it.

| Advantages                        | Disadvantages                                           |
| --------------------------------- | ------------------------------------------------------- |
| **Simple**, conceptually          | **Toscas**, when nesting many (Callback hell)           |
| **Universal**, they are JS native | **Little intuitive**, to understand the flow is tedious |

#### Notes
*· First callback argument allways will be the error.*

### -> Promise
> **_Object_** which represent the end or fail of a asinconous operation.

| Advantages                                                  | Disadvantages                                               |
| ----------------------------------------------------------- | ----------------------------------------------------------- |
| **Easily chaining**, clair and easy to chain hadling a flow | **No exceptions**, require .catch() method to handel errors |
| **Powerfull**, really capable to handle complex async ops   |

#### Notes
*· use promise instead callbacks. Watch out with promise hell.*

### -> async/await
> An **async** function returns a Promise object. If the function return a value the promise _resolve_ that value and if throws an error or falls on a exception it _reject_ that error or exception.

> The **await** stops an **async** execution until a promise will resolve or reject.                                          |

#### Notes
*· requires a tryCatch block.*

# Section 07 - Sync vs async

## Libuv, Event loop and Non-blocking IO

> Libuv it's a C++ library to manage OS events. It's who 'talks' to the OS.\
> Works togheter with V8.

Libuv has a queue of finished events (Systems events). For each loop Libuv checs that queue, if are something perform a callback to V8.

> Non-blocking IO: Capability to make actions without stop others.

**Note: V8, Libuv and Javascript are all sincronous.\
NodeJS performs actions asynchronous (if we tell to do it)**

# Section 08 - HTTP and web servers.

### -> HTTP
Protocol over which communicate the client and server.

### -> Web server
Software which delivers contents requered by the client. It's distinct to a server (hardware).

### -> NodeJS and web server.
Some details:
- Node can create it's own web server. Includes the tools for it.
- Low fault tolerance. An unhandled error can down a server.
- Frameworks vs vanilla. Both ways can be taken to mount a webserver.

### Client server basic comunication.
![alt text](./client-server-comunication.jpeg "Client server comunication.")
The client sends a request to the server, the server process it and return a response. Both, client and server, knows information about each other (like OS, browser, ports and so on) by the request and response.

### HTTP methods 

| METHOD | Standard use                              |
| :----: | ----------------------------------------- |
|  GET   | Read a resource                           |
|  POST  | Create a new resource                     |
|  PUT   | Update an existing resource               |
| PATCH  | Update a property of an existing resource |
| DELETE | Remove an existing resource               |

### Middleware

A middleware it's code that run between the start of therequest and the endpoint of the server.

### MVC
> **M**odel **V**iew **C**ontroller
Code design pattern who sepair the code about responsibilities.

# Section 09 - Databases.

SQL databases starts using at 80s. NoSQL databases are newer.

| SQL                                                                        | NoSQL                                                               |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Organize the information on chunks relating between them through unique Id | Extremely usefull when we need to store very changing data          |
| Group the info in "tables"                                                 | Group the info in "collections"                                     |
| Meets ACID props (make the system strong and less vulnerable)              |                                                                     |
| Engines: MSSQL, Oracle, Postgres, MySQL, SQLite, and more                  | Engines: MongoDB, Cassandra, RethinkDB, FirebaseDB, Redis, and more |

### ORM
**O**bject **R**elational **M**apping it's a software model which map db tables on entities for a easily handling.

### ODM
**O**bject **D**ocument **M**apping, same as ORM but document oriented.

### NodeJS - process.argv
It's the process property which store the command line arguments passed to node when the command runs.\
By default argv stores:
<ol start='0'>
 <li>node path.</li>
 <li>file which node runs path.</li>
 <li>and more, the rest of params.</li>
</ol>

# Section 10 - Frontend and backend.

### Frontend
Visual interface which can user interact with a software or process.

### Backend
Piece of software that handle business logic and data persistence.

### Frameworks
Piece of software that works as base and organization on a software development.
Frameworks examples
- Frontend: **Angular, React, Vue, Svelte, Ember**.
- Backend: **NextJS, sails, express, adonis**.

| When use a framework?               | When **NO** use a framework?        |
| ----------------------------------- | ----------------------------------- |
| Looking for community support       | Have not community support          |
| Fast developmente time              | We don't know the language          |
| Other tools transparent integration | We fall into the frameworks fashion |

### Typescript
Open source programming language, Microsoft leadered, with OOP tools for big projects. It's a **superset** of Javascript.

Note: tsc CLI for Typescript.

| **YES** TS                      | **NO** TS           |
| ------------------------------- | ------------------- |
| Big projects                    | Weak OOP knowledge  |
| Teams with strong OOP knowledge | Type it's a problem |
| Constant evolving               |                     |

### Superset
Language writen over another.

# Section 11 - APIs architecture.

### APIs
An API:
- Reduce software coupling.
- Aggregate differential value to an enterprise.

It's a group of protocols and difinitions used to develop and integrate software.
API stands for **A**pplication **P**rogramming **I**nterface.

### Software architecture
General and reusable solution to a common problem on software development.
This group of technics anwers questions like:
- What programming language use?
- What framwork?
- Use disegne patterns?
- How handle project scafolding?
- What DB to use?
- So on

Some common architectures are:
- Client/server architecture.
- N layers architecture.
- Bus events architectures.
- Master/slave architecture.
- Anothers

#### N layers architecture
Commonly used for APIs and desktop apps.

#### Client/server architecture
Low coupling apps like mobile apps and APIs

### RESTful
REST stands for **RE**presentational **S**tate **T**ransfer. REST are some principles which describe how to resources are defined and accessed through a web service.\

A web server which implements REST principles is called RESTful.

Some RESTful details:
- Clean and intuitive URIs.
- Use JSON or XML format info.

The REST architecture focus on:
- Performance.
- Scalability.
- Simplicity.
- Portability.
- Reliability.

#### REST principles
1. **Client/server**

The backend and frontend (in this case for web apps) are completly separated. Two diferent frameworks.

2. **Layers system**

The layers are sorted hierarchically and restricted to the layers next to.

3. **Stateless**

A request must contain all data for the server understand and build the context to process it.

4. **Uniform interface**
  
Are guided for:
   1.  Resource identification.
   2.  Resource manipulation.
   3.  Self-descriptive repsonses.
   4.  State administration (throught HATEOAS)

These four pilars are handled throught: **HTTP Verbs**, **Media types** and **HETEOAS.**

5. **Cache**

Derived of stateless, all responses need explicitly tagged as cacheble or not cacheble.

6. **Code on demand** (optional).

Allow a client access to resources not knowing how to process it.


---
#NodeJS\
#JavaScript\
#ES6\
#express.js\
#HTTP\
#SQL\
#NoSQL\
#sequelize\
#mongoose\
#backend\
#frontend