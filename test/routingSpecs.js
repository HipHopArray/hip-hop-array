'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var app = require('../client/app/app.js');

describe('routing', function() {
  var $route;
  beforeEach(module('app'));

  beforeEach(inject(function($injector) {
    $route = $injector.get('$route');
  }));

  it('Should have ')
});
