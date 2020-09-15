try {
  console.log("start try");
  // throw new Error("error message");
  console.log("try end");
} catch (e) {
  console.error(e);
} finally {
  console.log("finally");
}

async function fetchUsers() {
  const response = await fetch("users.json");
  if (response.ok) {
    const json = await response.json();
    if (!json.length) {
      throw new Error("no dataaaaaaaaaa");
      // throw new NodataError("no dataaaaaaaaaa");
    }
    return json;
  }
}

class NodataError extends Error {
  constructor(message) {
    super(message);
    this.name = "NoDataError";
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for (const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`);
    }
  } catch (e) {
    if (e instanceof NodataError) {
      console.log(e);
    } else {
      console.log("えっち");
    }
  } finally {
    console.log("finally");
  }
}
init();
