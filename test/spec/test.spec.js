/* eslint-disable no-undef */
const app = require("../../app");
const supertest = require("supertest");

import { getUserService, putUserService, postUserService, deleteUserService } from '../../src/services/index'


// Sucess case : Create User
test("CREATE User", async () => {
  const user = await postUserService.create({ 
    givenName: "mahesh", 
    familyName: "Kariya", 
    email: "mahesh@gmail.com", 
    password: "mahesh@gmail.com" })
  await supertest(app).get("/users/" + user.dataValues.id)
    .expect(200)
    .then((response) => {
      expect(response.body.id).toBe(user.dataValues.id);
      expect(response.body && typeof response.body === 'object').toBe(true)
    });
  return user
})

// Error Case: Create user with invalid email
test("CREATE User with invalid email", async () => {
  await supertest(app).post("/users/")
  .send({ 
    givenName: "mahesh", 
    familyName: "Kariya", 
    email: "invalid_email", 
    password: "mahesh@123" })
    .expect(500)
    .then((response) => {
      expect(response.body.error.details[0].message === '"email" must be a valid email').toBe(true)
    });
})

// Error Case : Create user with empty password
test("CREATE User with empty password", async () => {
  await supertest(app).post("/users/")
  .send({ 
    givenName: "mahesh", 
    familyName: "Kariya", 
    email: "mahesh@gmail.com", 
    password: "" })
    .expect(500)
    .then((response) => {
      expect(response.body.error.details[0].message === '"password" is not allowed to be empty').toBe(true)
    });
})


// Error Case : Create user with invalid password
test("CREATE User with empty password", async () => {
  await supertest(app).post("/users/")
  .send({ 
    givenName: "mahesh", 
    familyName: "Kariya", 
    email: "mahesh@gmail.com", 
    password: "12" })
    .expect(500)
    .then((response) => {
      expect(response.body.error.details[0].message === '"password" length must be at least 6 characters long').toBe(true)
    });
})


test("GET User By Is", async () => {
  const user = await getUserService.byId(1)
  return user
})

test("GET All Users", async () => {
  const result = await getUserService.all()
  return result
})

// Update User Success case
test("PUT User", async () => {
  const result = await putUserService.byId(1, { 
    givenName: "newMahesh", 
    familyName: "newKariya", 
    email: "newMahesh@gmail.com", 
    password: "newMahesh@123" })
  await supertest(app).get("/users/1")
    .expect(200)
    .then((response) => {
      if(response.body && response.body.id){
        expect(response.body && response.body.id).toBe(1);
        expect(response.body && response.body.givenName).toBe('newMahesh');
        expect(response.body && response.body.familyName).toBe('newKariya');
        expect(response.body && response.body.email).toBe('newMahesh@gmail.com');
      }
      expect(response.body && typeof response.body === 'object').toBe(true)
    });
  return result
})





// Error Case: Update User with invalid parameter
test("PUT User", async () => {
  await supertest(app).put("/users/invalid_parameter")
    .send({ 
      givenName: "newMahesh", 
      familyName: "newKariya", 
      email: "newMahesh@gmail.com", 
      password: "newMahesh@gmail.com" })
    .expect(500)
    .then((response) => {
      expect(response.body.error.details[0].message === '"value" must be a number').toBe(true)
    });
})

// Error Case: Update User with invalid email
test("PUT User with invalid email", async () => {
  await supertest(app).put("/users/1")
    .send({ 
      givenName: "newMahesh", 
      familyName: "newKariya", 
      email: "invalid_email", 
      password: "newMahesh@123" })
    .expect(500)
    .then((response) => {
      expect(response.body.error.details[0].message === '"email" must be a valid email').toBe(true)
    });
})

// Error Case: Update User with empty password
test("PUT User With empty password", async () => {
  await supertest(app).put("/users/1")
    .send({ 
      givenName: "newMahesh", 
      familyName: "newKariya", 
      email: "mahesh@gmail.com", 
      password: "" })
    .expect(500)
    .then((response) => {
      expect(response.body.error.details[0].message === '"password" is not allowed to be empty').toBe(true)
    });
})


// Error Case: Update User with invalid password 
test("PUT User With invallid password", async () => {
  await supertest(app).put("/users/1")
    .send({ 
      givenName: "newMahesh", 
      familyName: "newKariya", 
      email: "mahesh@gmail.com", 
      password: "ps" })
    .expect(500)
    .then((response) => {
      expect(response.body.error.details[0].message === '"password" length must be at least 6 characters long').toBe(true)
    });
})

// Delete User Success case
test("DELETE User", async () => {
  const deletedUser = await deleteUserService.byId(1)
  await supertest(app).delete("/users/5")
    .expect(200)
    .then((response) => {
      expect(response.body).toStrictEqual({});
    });
  return deletedUser
})

// Invalid parameter test in DELETE User
test("DELETE User with invalid parameter", async () => {
  const deletedUser = await deleteUserService.byId(1)
  await supertest(app).delete("/users/invalid_parameter")
    .expect(500)
    .then((response) => {
      expect(response.body.error.details[0].message === '"value" must be a number').toBe(true)
    });
  return deletedUser
})