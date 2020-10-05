function repoInformation(userName) {
  const user = new Promise((resolve, reject) => {
    resolve(
      fetch(
        `https://api.github.com/search/repositories?q=user:${userName}`
      ).then((response) => response.json())
      /*.then((data) => {
        console.log(data);
      })*/
    );
  });
  return user;
}
const promise1 = repoInformation("shruthidasarapu");
const promise2 = repoInformation("kamalrsa");
const promise3 = repoInformation("arya56");
/*const promise2 = new Promise((resolve, reject) => {
  resolve(
    fetch(
      "https://api.github.com/search/repositories?q=user:arya56"
    ).then((response) => response.json())
    .then((data) => {
        console.log(data);
      })
  );
});

const promise3 = new Promise((resolve, reject) => {
  resolve(
    fetch(
      "https://api.github.com/search/repositories?q=user:shruthidasarapu"
    ).then((response) => response.json())
    .then((data) => {
        console.log(data);
      })
  );
});*/

Promise.all([promise1, promise2, promise3]).then((data) => {
  console.log(data);
  renderRepo(data);
});

const reposOwner = document.querySelector("ul");
function renderRepo(data) {
  data.forEach((e) => {
    const li = document.createElement("li");
    li.innerHTML = `
    ${e.items[0].owner.login} `;
    reposOwner.appendChild(li);
    e.items.forEach((element) => {
      const repos = document.createElement("ul");
      //const reposList = document.createElement("li");
      repos.innerHTML = `Fullname of Repo ${element.name}, URl : ${element.git_url}`;
      li.appendChild(repos);
    });
  });
}
