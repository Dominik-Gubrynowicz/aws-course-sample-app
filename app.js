// Import required modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();

// Set the static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server and listen on port 80
app.listen(80, () => {
  console.log('Server running at http://localhost:80/');
});