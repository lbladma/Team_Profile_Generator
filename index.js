
const fs = require('fs');
const inquirer = require('inquirer');


const createCard = require('./src/profileGenerator');


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const profileArray = [];



const recruitMan = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the manager's office number?"
        },
    ])


    .then(managerInfo => {
        const {name, id, email, officeNum} = managerInfo;
        const manager = new Manager(name, id, email, officeNum);
        console.log(manager);
        profileArray.push(manager);
    })
};


const recruitEm = () => {
    return inquirer.prompt([
        {

            type: 'list',
            name: 'role',
            message: "What is the employees's role?",
            choices: ['Engineer', "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Which school did the intern attend?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: "Are there any more employees to add?",
            default: false
        }
    ])



    .then(employeeInfo => {
        let {name, id, email, role, github, school, addEmployee} = employeeInfo;
        let employee;
        if (role === "Engineer"){
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        }
        else if (role === "Intern"){
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }

        profileArray.push(employee);


        if (addEmployee) {
            return recruitEm(profileArray);
        } else {
            return profileArray;
        }
    })
}


const createHTML = data => {
    fs.writeFile('./dist/index.html', data, err => {
        console.log(data),
            err ? console.log(err): console.log("HTML with team data successfully created!");
    })
}


recruitMan ()
    .then(recruitEm).then(profileArray => {
        return createCard(profileArray);
    })
    .then(pageHTML => {
        return createHTML(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });