// test.js
const fs = require('fs');
const crypto = require('crypto');

function initializeApp() {
    console.log("Booting system...");
    loadConfig();
}

function loadConfig() {
    console.log("Loading configuration...");
    setupDatabase();
}

function setupDatabase() {
    console.log("Connecting to database...");
    processDataPipeline();
}

function processDataPipeline() {
    console.log("Initializing data pipeline...");
    // Let's generate a bunch of noise in the console to fill up the logs
    for(let i = 0; i < 50; i++) {
        console.log(`[DATA STREAM ${i}] Processing chunk: ${crypto.randomBytes(64).toString('hex')}`);
    }
    
    executeCoreLogic();
}

function executeCoreLogic() {
    console.log("Executing Core Logic...");
    
    // The actual error: trying to require a package that isn't in package.json
    // Node will throw an ERR_MODULE_NOT_FOUND with a long stack trace.
    // The LLM should realize it needs to run `npm install axios` or remove the require.
    const axios = require('axios'); 
    
    axios.get('https://api.github.com').then(res => {
        console.log("Success");
    });
}

// Start the app
initializeApp();
