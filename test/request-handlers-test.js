'use strict';
var request = require('supertest');
var express = require('express');
var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var app = require('../server/config/requests.js');
var handlers = require('../server/config/request-handlers.js');

describe ('request handlers', function () {
//   var serverSpy;
//   before(function(done){
//     serverSpy = sinon.stub(request, 'post')
//       .yields(null, null, JSON.stringify({}));
//     done();
//   });
	
// 	after(function(done){
//     request.get.restore();
//     done();
//   });
  describe('PhotoAnalysisReq', function() {
    var options = {
	  'method': 'POST',
	  'url': 'https://api.imagga.com/v1/content',
	  'imagePath': '../client/assets/empty_plate.jpg'
	};
		
	it('should accept an image file', function (done) {
      
	  app.photoAnalysisReq(options, function (error, res, body) {
        expect(res.body).to.be.an('object');
		done();
	  });
	  
	  options.imagePath = 'clearly not an image';
	  
	  app.photoAnalysisReq(options, function (error, res, body) {
        expect(res.body).to.be.an('error');
		done();
	  });
	});
	
	it ('should post image to Immga', function () {
		
	});
	
	it ('should receive a JSON object', function () {
		
	});
	
	it ('should parse the JSON object for an ingredient', function () {
		
	});
	
	it ('should return the ingredient name', function () {
		
	});

  });

  describe('recipesReq', function() {
    it('takes in an array', function() {
		
	});
	
	it ('should stringify ingredient list', function () {
		
	});
	
	it ('should post ingredient to Food2Fork', function () {
		
	});
	
	it ('should return an array of recipe objects', function () {
		
	});

});


  describe('recipesReq', function() {
	it('Takes in a URL', function(done) {
		request(app)
		.post('/recipes')
		.send({
			'url': 'not a url'})
		.expect(404)
		.end(done);
	});
});
		
});