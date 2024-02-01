const sinon = require('sinon');
const assert = require('assert');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('check that Utils.calculateNumber is stubbed', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const utilStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);

    assert(consoleSpy.withArgs('The total is: 10').calledOnce);
    assert(utilStub.withArgs('SUM', 100, 20).calledOnce);
  });
});
