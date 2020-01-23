const path = require("path");
const fs = require("fs");

//creates a path to the template folder and stores it in a variable
const templatesDir = path.resolve(__dirname, "../templates");

//creates a function that pushes and joins the html from each of the individual templates
const render = employees => {
  const html = [];

  html.push(
    employees
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => renderManager(manager))
  );
  html.push(
    employees
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => renderEngineer(engineer))
  );
  html.push(
    employees
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => renderIntern(intern))
  );
  let joined = html.join("");
  splitHTML = joined.split("</div>\n,");
  newHTML = splitHTML.join("</div>\n");
  // split on '</div>\n',
  // join with '</div>\n'
  // pass that to renderMain
  // if (html.length < 4) {
  // console.log(html.join(""));
  console.log(html);
  return renderMain(newHTML);
  // } else if ((html.length = 4)) {
  //   return renderMain(html.join("\n"));
  // }
};
//function that renders read the manager html template and replaces the placeholders with the values defined in the manager class and retuns the template with the new values
const renderManager = manager => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(
    template,
    "officeNumber",
    manager.getOfficeNumber()
  );
  return template;
};
var count = 0;
//function that renders read the engineer html template and replaces the placeholders with the values defined in the engineer class and retuns the template with the new values
const renderEngineer = engineer => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  count++;
  return template;
};
//function that renders read the intern html template and replaces the placeholders with the values defined in the intern class and retuns the template with the new values
const renderIntern = intern => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};
//function that renders read the main html template and returns the joined HMLT array in the My Team placeholder in the main html template
const renderMain = newHTML => {
  const template = fs.readFileSync(
    path.resolve(templatesDir, "main.html"),
    "utf8"
  );
  return replacePlaceholders(template, "team", newHTML);
};
//defines the replacePlaceholders function with three agruments that can be defined in the above render functions to replace the placeholder text in each template
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
