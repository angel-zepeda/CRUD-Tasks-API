var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:5000/api/v1/");

describe("Task index function", function () {
    it("should return status 200", function (done) {
        server
            .get("/tasks")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
    });
});

describe("Task create function", function () {
    it("should return status 200 and task propery", function (done) {
        server
            .post("/task")
            .send({ title: '10', description: '20' })
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.should.have.property('task')
                done();
            });
    });
});
