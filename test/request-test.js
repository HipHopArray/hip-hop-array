'use strict';
var request = require('supertest');
var express = require('express');
var assert = require('chai').assert;
var expect = require('chai').expect;
var request = require('../server/config/requests.js');

describe ('Request handler function', function () {
  describe('PhotoAnalysisReq', function() {
    this.timeout(5000);

    it('posts an image to Immaga', function (done) {
      request.photoAnalysisReq('https://nuwildroots.files.wordpress.com/2010/06/asparagus.jpg')
      .then(function (res) {
        expect(res).to.be.an('object'); //status something 200
        done();
      })
      .catch(done);
    });
  });
});


