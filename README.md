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



`Setup NODE_ENV Variable Windows` 

```
SET NODE_ENV=development
```

`Setup NODE_ENV Variable Linux` 

```
export NODE_ENV=development
```

**Please Install docker and docker-compose before proceed**

Windows : 
```
https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe
```
Mac(Intel)
```
 https://desktop.docker.com/mac/main/amd64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-amd64

```
Mac(M1)
```
 https://desktop.docker.com/mac/main/arm64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-arm64


```
Linux/Ubuntu :
```
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io

```
Setup PostgreSQL Manually

```
docker run --name postgresdb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -d -p 5432:5432 postgres:alpine
```

Add Dependencies

```
npm install || yarn
```

Start Server Windows
```
npm start || yarn start
```

Start Server Linux
```
npm run start:linux || yarn start:linux
```

ES Lint

```
yarn lint || npm run lint
```

Test with Jest

```
yarn jest || npm run jest
```

Swagger Documentation

```
http://localhost:5000/api-docs
```
## OR

Run With Docker Compose

```
docker-compose up -d
```


Visit here for API's

```
http://localhost:5000/api-docs
```




directory Structure
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