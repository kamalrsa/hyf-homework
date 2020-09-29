// rendom id generator
function makeid() {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
class Job {
  constructor(title, description, startDate, endDate) {
    this.id = makeid();
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Education {
  constructor(title, school, address, startDate, endDate) {
    this.id = makeid();
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }
  addJob(job) {
    this.jobs.push(job);
  }
  removeJob(job) {
    /*const jobIndex = this.jobs.findIndex(
      (jobElement) => jobElement.id === job.id
    );
    this.jobs.splice(jobIndex, 1);*/
    this.jobs = this.jobs.filter((jobElement) => jobElement.id !== job.id);
  }
  addEducation(education) {
    this.educations.push(education);
  }
  removeEducation(education) {
    this.educations = this.educations.filter(
      (educationElement) => educationElement.id !== education.id
    );
  }
  renderCV() {
    const email = document.getElementById("email");
    const jobs = document.getElementById("jobs");
    const educations = document.getElementById("education");
    email.innerHTML = this.email;
    this.jobs.forEach((job) => {
      const jobItem = document.createElement("li");
      jobItem.innerHTML = `
      <div> Title: ${job.title}</div>
      <div> Description: ${job.description}</div>
      <div> Start Date: ${job.startDate}</div>
      <div> Title: ${job.endDate}</div>`;
      jobs.appendChild(jobItem);
    });

    this.educations.forEach((education) => {
      const educationItem = document.createElement("li");
      educationItem.innerHTML = `
      <div> Title: ${education.title}</div>
      <div> School: ${education.school}</div>
      <div> Start Date: ${education.startDate}</div>
      <div> Title: ${education.endDate}</div>`;
      educations.appendChild(educationItem);
    });
  }
}
const myCV = new CV("kamalrsa@gmail.com");

const webJob = new Job("web-Developer", "using CSS ", "jan,2017", "feb 2020");
const cookJob = new Job("cook", "preparing food", "jan 2018", "feb 2019");
/*or 
const job= {
    title: 'cook',
    description:'serving foods',
    startDate: 'jan2014',
    endDate: feb2016'
}*/
myCV.addJob(webJob);
myCV.addJob(cookJob);
myCV.removeJob(cookJob);

const highSchool = new Education(
  "graduate",
  "jivan jyoti",
  "surkhet",
  "2005",
  "2010"
);
myCV.addEducation(highSchool);
console.log(myCV);
myCV.renderCV();
