
const managerCard = function(Manager) {
    return `
    <div>
        <div class = "card">
            <div class="cardHead">
                <h3>${Manager.name}</h3>
                <h4>☕ Manager</h4>
            </div>
            <div class="cardMain">
                <p class="id">ID Number: ${Manager.id}</p>
                <p class="email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
                <p class="office">Office #: ${Manager.officeNum}</p>
            </div>
        </div>
    </div>`
};


const internCard = function(Intern) {
    return `
    <div>
        <div class = "card">
            <div class="cardHead">
                <h3>${Intern.name}</h3>
                <h4>🎓 Intern</h4>
            </div>
            <div class="cardMain">
                <p class="id">ID Number: ${Intern.id}</p>
                <p class="email">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></p>
                <p class="school">School: ${Intern.school}</p>
            </div>
        </div>
    </div>`
};


const engineerCard = function(Engineer) {
    return `
    <div>
        <div class = "card">
            <div class="cardHead">
                <h3>${Engineer.name}</h3>
                <h4>👓 Engineer</h4>
            </div>
            <div class="cardMain">
                <p class="id">ID Number: ${Engineer.id}</p>
                <p class="email">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
            </div>
        </div>
    </div>`
};



const createCard = function(data) {


    teamArray = [];

    for (let a = 0; a < data.length; a ++) {

        const worker = data[a];


        const role = worker.getRole();


        if (role === "Manager") {
            const manCard = managerCard(worker);
            teamArray.push(manCard);
        }

        if (role === "Engineer") {
            const engCard = engineerCard(worker);
            teamArray.push(engCard);
        }

        if (role === "Intern") {
            const intCard = internCard(worker);
            teamArray.push(intCard);
        }
    }

    const teamCard = teamArray.join('');
    const generateCard = generateTeamPage(teamCard);
    return generateCard;
};



const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile List</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header id="header">
            <h1>Team Profile List</h1>
        </header>

        <main>
            <div id = "testbox">
                <div id = "container">
                    <div id = "containerCard">
                        ${employeeCards}
                    </div>
                </div>
            <div>
        </main>

    </body>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>`
};

module.exports = createCard;