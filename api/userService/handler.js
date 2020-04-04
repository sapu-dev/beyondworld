"use strict";
const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({apiVersion: "2012-08-10"});
const uuid = require("uuid/v4");

const usersTable = process.env.USERS_TABLE;
// Create a response
function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
}
function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else return 1;
}
// Create a user
module.exports.createuser = (event, context, callback) => {
  const reqBody = JSON.parse(event.body);

  const user = {
    id: uuid(),
    createdAt: new Date().toISOString(),
    type: reqBody.type
  };

  return db
    .put({
      TableName: usersTable,
      Item: user
    })
    .promise()
    .then(() => {
      callback(null, response(201, user));
    })
    .catch(err => response(null, response(err.statusCode, err)));
};
// Get all users
module.exports.getAllusers = (event, context, callback) => {
  return db
    .scan({
      TableName: usersTable
    })
    .promise()
    .then(res => {
      callback(null, response(200, res.Items.sort(sortByDate)));
    })
    .catch(err => callback(null, response(err.statusCode, err)));
};
// Get number of users
module.exports.getusers = (event, context, callback) => {
  const numberOfusers = event.pathParameters.number;
  const params = {
    TableName: usersTable,
    Limit: numberOfusers
  };
  return db
    .scan(params)
    .promise()
    .then(res => {
      callback(null, response(200, res.Items.sort(sortByDate)));
    })
    .catch(err => callback(null, response(err.statusCode, err)));
};
// Get a single user
module.exports.getuser = (event, context, callback) => {
  const id = event.pathParameters.id;

  const params = {
    Key: {
      id: id
    },
    TableName: usersTable
  };

  return db
    .get(params)
    .promise()
    .then(res => {
      if (res.Item) callback(null, response(200, res.Item));
      else callback(null, response(404, {error: "user not found"}));
    })
    .catch(err => callback(null, response(err.statusCode, err)));
};
// Update a user
module.exports.updateuser = (event, context, callback) => {
  const id = event.pathParameters.id;
  const reqBody = JSON.parse(event.body);
  const {body, title} = reqBody;

  const params = {
    Key: {
      id: id
    },
    TableName: usersTable,
    ConditionExpression: "attribute_exists(id)",
    UpdateExpression: "SET title = :title, body = :body",
    ExpressionAttributeValues: {
      ":title": title,
      ":body": body
    },
    ReturnValues: "ALL_NEW"
  };
  console.log("Updating");

  return db
    .update(params)
    .promise()
    .then(res => {
      console.log(res);
      callback(null, response(200, res.Attributes));
    })
    .catch(err => callback(null, response(err.statusCode, err)));
};
// Delete a user
module.exports.deleteuser = (event, context, callback) => {
  const id = event.pathParameters.id;
  const params = {
    Key: {
      id: id
    },
    TableName: usersTable
  };
  return db
    .delete(params)
    .promise()
    .then(() =>
      callback(null, response(200, {message: "user deleted successfully"}))
    )
    .catch(err => callback(null, response(err.statusCode, err)));
};
