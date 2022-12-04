const express = require('express');
const inquirer = require('inquirer');
const consoleTable = require('console.table')
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql2.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'abc123',
    database: 'employee_tracker'
  },
  console.log(`Connected to the employee_tracker database.`)
);


