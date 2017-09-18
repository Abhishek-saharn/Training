# Nojde.js Task 3

The task was based on Node.js, express, MondoDB

### APIs Used

Created POST, GET, PUT, DELETE APIs for create, fetch, Update and delete users from MongoDb.   

#### Working 

Open postman, and make 


##### For Creating user :
a post request on
    
    localhost:8000/api/user

and provide name, username and email in body. Response will contain id of new user created.
    

##### For Fetching user :
a get request on

    localhost:8000/api/user/(a_user_id)

and provide user_id in URL. Response will contain data of user.
##### For Updating user's name :
a put request on

    localhost:8000/api/user/(a_user_id)/(name_to_update)

and provide user_id/name in URL. Response will contain id of user.

##### For Deleting user :
a delete request on

    localhost:8000/api/user/(a_user_id_to_delete)

and provide user_id of user to delete in URL. Response will contain null.


## Getting Started

Clone the repository from github ([Here](https://github.com/Abhishek-saharn/Training/tree/node.js3/node.js3))

### Prerequisites

Must have preinstalled npm, node.js and mongoDB

Can be dodnloaded [here](https://nodejs.org/en/download/) 


### Installing

After cloning git repo. 

download node modules:

```
npm install
```

after installing, Run following command

```
node start
```



## Deployment

This task is on runnable on Local Machine

## Built With

* [Node.js](https://nodejs.org) 
* [MongoDb](https://www.mongodb.com/) - Database used
* [Babel](https://babeljs.io/) - Used to making app available for browsers.

## Authors

* [**Abhishek Saharn**](https://github.com/Abhishek-saharn)

## Things Learned

* Promises
* Babel
* Implemented ES6.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you Prabal, Rahul for guidance.
* [Stackoverflow](https://www.stackoverflow.com)
