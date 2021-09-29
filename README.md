# User Persistence Assignment in NodeJS and PostgreSQL 

In this project we have used following dependencies

- [x] node 
- [x] express 
- [x] sequelize
- [x] babel
- [x] cors
- [x] eslint
- [x] jest
- [x] Cors
- [x] dotenv  
- [x] bcryptjs  
- [x] cors  
- [x] joi  
- [x] nanoid  
- [x] pg  
- [x] swagger-ui-express  
- [x] docker


## API End Points

1. __Create User__ - _POST_ : `{url}`/users 
2. __Get User__ -  _GET_: `{url}`/users/`{userId}`
3. __Get All Users__ - _GET_: `{url}`/users
4. __Update User__ - _PUT_: `{url}`/users/`{userId}`
5. __Delete User__ - _DELETE_: `{url}`/users/`{userId}`
6. __Swagger Definition__ - _GET_: `{url}`/api-docs



## Set NODE_ENV Variable (Windows)

```
SET NODE_ENV=development
```

## Set NODE_ENV Variable (Linux)

```
export NODE_ENV=development
```

## Install PostgreSQL

https://www.postgresql.org/download/

## Add Dependencies

```
npm install || yarn
```

## Start Server Windows
```
npm start || yarn start
```

## Start Server Linux
```
npm run start:linux || yarn start:linux
```

## ES Lint

```
yarn lint || npm run lint
```

## Test with Jest

```
yarn jest || npm run jest
```

## Test with mocha

```
yarn test || npm run test
```

## Swagger Documentation

```
http://localhost:5000/api-docs
```

## Postman collection :
```
File available in root directory with name (postman.json)
```

## OR

## Install Docker:

https://docs.docker.com/engine/install/

## Install Docker compose:

https://docs.docker.com/compose/install/


## Run With Docker Compose

```
docker-compose up -d
```


## Swagger Documentation

```
http://localhost:5000/api-docs
```



## Postman collection :
```
File available in root directory with name (postman.json)
```

##directory Structure

```
 |-src
 | |-config
 | | |-index.js
 | |-constants
 | | |-index.js
 | |-controllers
 | | |-index.js
 | | |-user
 | | | |-index.js
 | | | |-index.spec.js
 | |-configurations
 | | |-encrypt.js
 | |-models
 | | |-index.js
 | | |-user
 | | | |-index.js
 | |-routes
 | | |-index.js
 | | |-user
 | | | |-index.js
 | |-services
 | | |-index.js
 | | |-user
 | | | |-delete.js
 | | | |-get.js
 | | | |-post.js
 | | | |-put.js
 | |-validators
 | | |-index.js
 | | |-user
 | | | |-index.js
 |-stack.yml
 |-swagger.json
 |-yarn-error.log
 |-yarn.lock
 |-.babelrc
 |-.eslintrc.yml
 |-.gitignore
 |-app.js
 |-development.env
 |-Dockerfile
 |-jest.config.js
 |-package.json
 |-production.env
 |-README.md
 ```

Clear Docker :

```sudo docker system prune -af```