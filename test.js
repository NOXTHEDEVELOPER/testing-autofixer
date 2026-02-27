// test.js

// BUG 1: Missing dependency. Node will crash immediately saying "Cannot find module 'axios'"
const axios = require('axios');
const fs = require('fs');

async function processData() {
    console.log("Starting data processor...");
    
    // Simulating database load
    const userDB = [
        { id: 1, name: "Alice", active: true },
        { id: 2, name: "Bob", active: false }
    ];

    // BUG 2: ReferenceError. Tries to use 'userDatabase' instead of 'userDB'
    const activeUsers = userDatabase.filter(u => u.active);
    console.log(`Found ${activeUsers.length} active users.`);

    // BUG 3: TypeError. Arrays don't have a .save() method in vanilla JS
    activeUsers.save();
    
    console.log("Data processing complete.");
}

processData().catch(err => {
    console.error("Fatal exception during processData:");
    throw err;
});
