const { type } = require("express/lib/response");

//generate cards for each employee
const generateManager = (member) => {
  return `<li>Office Number: ${member.office}</li>`;
};

const generateEngineer = (member) => {
  return `<li>GitHub:<a href="https://github.com/${member.github}" class="card-link"> ${member.github}</a></li>`;
};

const generateIntern = (member) => {
  return `<li>School: ${member.school}</li>`;
};

const genMemberHtml = (member) => {
  var typeAttrs = "";
  switch (member.type) {
    case "Intern":
      typeAttrs = generateIntern(member);
      break;
    case "Manager":
      typeAttrs = generateManager(member);
      break;
    case "Engineer":
      typeAttrs = generateEngineer(member);
      break;
    default:
      console.error("unknown member type provided: " + member.type);
      return "";
  }

  return `<div class="card" style="width: 18rem;">
    <div class="card-header text-white bg-primary mb-3">
      <h5>${member.name}</h5>
      <h6 class="card-subtitle mb-2">${member.type}</h6>
    </div>
    <div class="card-info"> 
        <ul>
        <li>Employee ID: ${member.id}</li>
        <li>Email: <a href="mailto:${member.email}" class="card-link">${member.email}</a></li>
        ${typeAttrs}
        </ul>
    </div>
  </div>`;
};

//generate site

//export function to generate entire page
module.exports = (members) => {
  return `<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Members</title>
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  />
  <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
  />
  <link rel="stylesheet" href="./stylesheet.css" />
</head>
<body>
  <div class ="header bg-danger">
  <h1 class="display-5 text-white mx-auto">Team Members</h1>
  </div>
  <div class="card-container container-fluid row">
     ${members.map(genMemberHtml).join("")}
  </div>
</body>`;
};
