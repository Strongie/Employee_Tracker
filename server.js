const express = require('express');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql2 = require('mysql2');

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

function init(){
    employee_questions();
}

    function employee_questions(){
        inquirer.prompt([
          {
            type: "list",
            name: 'prompt',
            message: 'what would you like to do?',
            choices: ['view all departments', 'add a new department', 'view all roles', 'add a new role', 'view all employees', 'edit a current employee', 'view employees by their manager', 'view an employee by department', 'Log Out']
          }
      ])
      .then((data) => {
        switch(data.choice){
          case 'view all departments':
            view_departments();
          break;
          case 'add a new department':
            new_departments() 
          break;
          case 'view all roles':
            view_roles();
          break;
          case 'add a new role':
            new_roles();
          break;
          case 'view all employees':
            view_employees();
          break;
          case 'edit a current employee':
            edit_employees();  
          break;
          case 'view employees by their manager':
            employee_manager();
          break;
          case 'view an employee by department':
            employee_department();
          default:
            log_out();
            console.log("Finished");
    
        }
      });
        
function view_departments(){
    db.query('SELECT * FROM departments', (err, result)=>{
        if(err) throw err;
        console.log('Viewing all departments');
    console.table(result);
    employee_questions();    

});
}

function new_departments(){
    db.query('SELECT * FROM department', (err, result)=>{
        if(err) throw err;
        console.table(result);
    employee_questions();    
});
}

function view_roles(){
    db.query('SELECT * FROM roles', (err, result)=>{
        if(err) throw err;
        console.log('Viewing all roles');
        console.table(result);
    employee_questions();    

});
}

function new_roles(){
    db.query('SELECT * FROM department', (err, result)=>{
        if(err) throw err;
        console.table(result);
    employee_questions();    

});
}

function view_employees(){
    db.query('SELECT * FROM employees', (err, result)=>{
        if(err) throw err;
        console.log('Viewing all employees');
        console.table(result);
    employee_questions();    
});
}

function edit_employees(){
    db.query('SELECT * FROM department', (err, result)=>{
        if(err) throw err;
        console.table(result);
    employee_questions();    
});
}

function employee_manager(){
    db.query('SELECT * FROM department', (err, result)=>{
        if(err) throw err;
        console.table(result);
    employee_questions();    
});
}

function employee_department(){
    db.query('SELECT * FROM department', (err, result)=>{
        if(err) throw err;
        console.table(result);
    employee_questions();    
});
}

function log_out(){
    db.end();
    console.log("Finished");

}


}

init()