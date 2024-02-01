const sinon = require('sinon');
const assert = require('assert');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20.54);
    assert(calculateNumberSpy.calledOnce);
    calculateNumberSpy.restore();
  });
});
