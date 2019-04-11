
const faker = require('faker');
var fs = require('fs');
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({
  accessKeyId: '',
  secretAccessKey: ''
});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'deepfryd',
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
    const baseUrl = 'https://s3.ap-south-1.amazonaws.com/deepfryd/';
  }
});


var dummyData = [];


var generateData = () => {
  s3.listObjects(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
      const baseUrl = 'https://s3.ap-south-1.amazonaws.com/deepfryd/';
      data.Contents.forEach((image, index) => {
        dummyData.push({
          id: index,
          'image_url': `${baseUrl}/${image.Key}`
        });
      });

      var json = JSON.stringify(dummyData);
      fs.writeFile('data.json', json, 'utf8', ()=> {
        console.log('done');
      });
    }
  });
};





module.exports = generateData;
