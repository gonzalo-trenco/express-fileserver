'use strict';

var supertest = require('supertest');
var should = require('should');
var app = require('../app.js').app;

var server = supertest.agent(app);

describe('Server Init', function () {

  it('should return home page', function (done) {
    server
      .get('/')
      .expect('Content-type', /text/)
      .expect(200)
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        done();
      });
  });

});