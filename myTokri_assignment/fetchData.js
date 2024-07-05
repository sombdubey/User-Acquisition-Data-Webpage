const axios = require('axios');

const apiEndpoint = 'https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/';
const headers = {
  'Authorization': 'Bearer 0e186445-0647-417c-ae27-8098533f1914',
  'Encryption-Key': 'FtmJ7frzTyWOzintybbqIWzwwclcPtaI',
  'Content-Type': 'application/json'
};

// Sample request body, check documentation for exact parameters
const requestBody = {
  campaignId: '6a0fa162-fb4c-4074-a6d4-402744e3590b',
  country: 'IRAQ'
};

// Logging the request details
console.log('Request Headers:', headers);
console.log('Request Body:', requestBody);

axios.post(apiEndpoint, requestBody, { headers })
  .then(response => {
    if (response.status === 200) {
      console.log('Success:', response.data);
      const fs = require('fs');
      fs.writeFileSync('data.json', JSON.stringify(response.data, null, 2));
    } else {
      console.error(`Failed to retrieve data: ${response.status}`);
      console.error('Response:', response.data);
    }
  })
  .catch(error => {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Error response:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Error request:', error.request);
    } else {
      // Something else happened
      console.error('Error message:', error.message);
    }
  });


