/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const should = require('chai').should()
let chai = require('chai')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)
let server = require('../app')

describe('app', () => {
    describe('hooks', function () {
        before(function () {
        })

        after(function () {
            
        })

        beforeEach(function () {
        })

        afterEach(function () {
            console.log("==================================================\n")
        })

        describe('/GET', () => {
            it('Test Case: GET List of users Should return array of user object', (done) => {
                chai.request(server)
                    .get('/users')
                    .end((err, res) => {
                        describe('GET Users: is Success ?', () => {
                            it('It should return success 200', function () {
                                res.should.have.status(200)
                            })
                        })
                        describe('GET Users: is Array ?', () => {
                            it('It should return Array', function () {
                                res.body.should.be.a('array')
                            })
                        })
                        describe('GET Users: is Equal to 1?', () => {
                            it('It should return true', function () {
                                res.body.length.should.be.eql(1)
                            })
                        })
                        done()
                    })
            })
        })
        describe('/POST', () => {
            it('Test Case: Create New User should return object of created user with status code 201', (done) => {
                chai.request(server)
                    .post('/users')
                    .set('content-type', 'application/json')
                    .send({
                        givenName : 'testGivenName',
                        familyName : 'testFamilyName ',
                        email: 'test123@gmail.com',
                        password: 'test@1231'
                    })
                    .end((err, res) => {
                        describe('Create User: is Success ?', () => {
                            it('It should return success 201', function () {
                                res.should.have.status(201)
                            })
                        })
                        describe('Create User: is Object ?', () => {
                            it('It should return Object', function () {
                                res.body.should.be.a('object')
                            })
                        })

                        if (err) {
                            done(err)
                        } else {
                            done()
                        }
                    })
            })

            // Error Cases (Empty Password)

            it('Error Case : Create User with Empty Password should return error code 500 and return error message', (done) => {
                chai.request(server)
                    .post('/users')
                    .set('content-type', 'application/json')
                    .send({
                        givenName : 'mahesh',
                        familyName : 'kariya',
                        email: 'mahesh@gmail.com',
                        password: ''
                    })
                    .end((err, res) => {
                        describe('Is Error ?', () => {
                            it('It should return error 500', function () {
                                res.should.have.status(500)
                            })
                        })
                        describe('POST User: throw error if password is empty ?', () => {
                            it('Is password is empty ? :', function () {
                                res.body.error.details[0].message.should.be.eql(`"password" is not allowed to be empty`)
                            })
                        })

                        if (err) {
                            done(err)
                        } else {
                            done()
                        }
                    })
            })

            // Error Cases (Invalid Email)

            it('Error Case : For Invalid Email should return error code 500 and .', (done) => {
                chai.request(server)
                    .post('/users')
                    .set('content-type', 'application/json')
                    .send({
                        givenName : 'mahesh',
                        familyName : 'kariya',
                        email: 'mahesh_is_not_email',
                        password: 'mahesh@123'
                    })
                    .end((err, res) => {
                        describe('This check point is for status 500.', () => {
                            it('It should return error 500', function () {
                                res.should.have.status(500)
                            })
                        })
                        describe('POST User: throw error if password is empty ?', () => {
                            it('Is Password is empty ?', function () {
                                res.body.error.details[0].message.should.be.eql(`"email" must be a valid email`)
                            })
                        })

                        if (err) {
                            done(err)
                        } else {
                            done()
                        }
                    })
            })

                        // Error Cases (Duplicate Email)

                        it('Error Case: Create User With Duplicate email should return 500 status code and email duplicate message', (done) => {
                            chai.request(server)
                                .post('/users')
                                .set('content-type', 'application/json')
                                .send({
                                    givenName : 'mahesh',
                                    familyName : 'kariya',
                                    email: 'mahesh@gmail.com',
                                    password: 'mahesh@123'
                                })
                                .end((err, res) => {
                                    describe('This check point is for status 500.', () => {
                                        it('It should return error 500', function () {
                                            res.should.have.status(500)
                                        })
                                    })
                                    describe('Email is duplicate ?', () => {
                                        it('Email is duplicate Check :', function () {
                                            res.body.message.should.be.eql(`Email Already exists`)
                                        })
                                    })
            
                                    if (err) {
                                        done(err)
                                    } else {
                                        done()
                                    }
                                })
                        })
        })
        describe('/PUT', () => {
            it('Succes Case : Update User By ID should return sucess code 200 and should return message', (done) => {
                chai.request(server)
                    .put('/users/1')
                    .set('content-type', 'application/json')
                    .send({
                        name: 'test1',
                        email: 'test1@gmail.com',
                        password: 'test1@123'
                    })
                    .end((err, res) => {
                        describe('PUT User: is Success ?', () => {
                            it('It should return success 200', function () {
                                res.should.have.status(200)
                            })
                        })
                        describe('PUT User: is Object ?', () => {
                            it('It should return Object', function () {
                                res.body.should.be.a('object')
                            })
                        })

                        if (err) {
                            done(err)
                        } else {
                            done()
                        }
                    })
            })
             // Error Cases (Invalid Email)

             it('Error Case: Update User Invalid Email should return 500 status code and password should not empty error', (done) => {
                chai.request(server)
                    .put('/users/1')
                    .set('content-type', 'application/json')
                    .send({
                        givenName : 'mahesh',
                        familyName : 'kariya',
                        email: 'mahesh_is_not_email',
                        password: ''
                    })
                    .end((err, res) => {
                        describe('PUT User: throwing Error ?', () => {
                            it('It should return 500', function () {
                                res.should.have.status(500)
                            })
                        })
                        describe('PUT User: throw error if password is empty?', () => {
                            it('It should return Error: Password is empty', function () {
                                res.body.error.details[0].message.should.be.eql(`"email" must be a valid email`)
                            })
                        })

                        if (err) {
                            done(err)
                        } else {
                            done()
                        }
                    })
            })
        })
        describe('/DELETE', () => {
            it('Success Case : DELETE User By Id should return status code 200 and return object of deleted user', (done) => {
                chai.request(server)
                    .delete('/users/1')
                    .set('content-type', 'application/json')
                    .end((err, res) => {
                        describe('DELETE User: is Success ?', () => {
                            it('It should return success 200', function () {
                                res.should.have.status(200)
                            })
                        })  
                        describe('DELETE User: is Object ?', () => {
                            it('It should return Object', function () {
                                res.body.should.be.a('object')
                            })
                        })
                        if (err) {
                            done(err)
                        } else {
                            done()
                        }
                    })
            })
        })
    })
})
