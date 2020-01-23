const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:4000");

describe("POST /", () => {
  before(done => {
    api
      .post("/")
      .set("Accept", "application/json")
      .send({
        name: "Jen",
        thought: "this is a thought"
      })
      .end(done);
  });
  it("should add a new thought to the collection of thoughts and return it", function(done) {
    api
      .get("/")
      .set("Accept", "application/json")
      .end(function(err, res) {
        expect(res.body[res.body.length - 1]).to.include({
          name: "Jen",
          thought: "this is a thought"
        });
        done();
      });
  });
});

describe("GET /", () => {
  it("Should return a 200 response", done => {
    api
      .get("/")
      .set("Accept", "application/json")
      .expect(200, done);
  });
  it("should return an array", done => {
    api
      .get("/")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body).to.be.an("array");
        done();
      });
  });
  it("should return an array of objects that have a field called 'thought'", done => {
    api
      .get("/")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body.every(i => i.thought)).to.be.true;
        done();
      });
  });
});

describe("GET /:id", () => {
  let testId;
  before(done => {
    api
      .get("/")
      .set("Accept", " application/json")
      .end((err, res) => {
        testId = res.body[res.body.length - 1]._id;
        done();
      });
  });
  it("Should return one result based off of id", done => {
    api
      .get(`/${testId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body._id).to.equal(testId);
        done();
      });
  });
});

describe("POST /comment/", () => {
  let testId;
  before(done => {
    api
      .get("/")
      .set("Accept", " application/json")
      .end((err, res) => {
        testId = res.body[res.body.length - 2]._id;
        done();
      });
  });
  before(done => {
    api
      .post(`/comment/${testId}`)
      .set("Accept", "application/json")
      .send({
        comment: "This is a comment"
      })
      .end(done);
  });
  it("should add a new comment to the collection of comments in the thought and return it", function(done) {
    api
      .get(`/${testId}`)
      .set("Accept", "application/json")
      .end(function(err, res) {
        expect(res.body.comments[0]).to.equal("This is a comment");
        done();
      });
  });
});

describe("PUT /update/", () => {
  let testId;
  before(done => {
    api
      .get("/")
      .set("Accept", " application/json")
      .end((err, res) => {
        testId = res.body[res.body.length - 1]._id;
        done();
      });
  });
  before(done => {
    api
      .put(`/update/${testId}`)
      .send({
        comments: ["That's legit", "hmmm"],
        _id: testId,
        name: "JenV",
        thought: "This is a thought"
      })
      .set("Accept", "application/json")
      .end(done);
  });
  it("should change the name value in a thought and return it", done => {
    api
      .get(`/${testId}`)
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body.name).to.equal("JenV");
        done();
      });
  });
});

describe("DELETE /", () => {
    let testId;
  before(done => {
    api
      .get("/")
      .set("Accept", " application/json")
      .end((err, res) => {
        testId = res.body[res.body.length - 1]._id;
        done();
      });
  });
  before(done => {
    api
      .delete(`/${testId}`)
      .set("Accept", "application/json")
      .end(done);
  });
  it("should delete the object from the array based on id", done => {
    api
      .get("/")
      .set("Accept", "application/json")
      .end((err, res) => {
        expect(res.body[0]._id).to.not.include(testId);
        done();
      });
  });
});
