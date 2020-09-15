fetch("./users.json")
  .then(function (responce) {
    console.log(responce);
    return responce.json();
  })
  .then(function (json) {
    console.log(json);
    for (const user of json) {
      console.log(user.name + user.age);
    }
  });

async function fetchUsers() {
  const responce = await fetch("./users.json");
  const json = await responce.json();
  console.log(json);
  for (const user of json) {
    console.log(user.name + user.age);
  }
}

fetchUsers();
