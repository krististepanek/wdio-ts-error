/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');

// Ensure PLATFORM is set for the environment
process.env.PLATFORM = 'IOS',

exports.config = {
  user: '**',
  key: process.env.BROWSERSTACK_KEY,
  runner: 'local',

  specs: [
    '../test/spec/*.e2e.*'
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  // Capabilities
  maxInstances: 1,
  capabilities: [{
    'bstack:options': {
      projectName: 'BS Project',
      buildName: 'Build',
      sessionName: 'Session',
      deviceName: 'iPhone 14 Pro Max',
      osVersion: '16',
      debug: true,
      networkLogs: false
    }
  }],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'warn',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    ['browserstack', {
      app: 'bs://***'
    }]
  ],
  framework: 'mocha',
  reporters: [
    ['spec', { showPreface: false }]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
