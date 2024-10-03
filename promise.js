// const { reject } = require("async");

const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

myLoader()
  .then((data) => console.log("Resolved data", data))
  .catch((err) => console.log("Rejected with value", err));

// fetch("URL")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// good process
async function loadData() {
  const res = await fetch("URL");
  const data = await res.json();
  console.log(data);
}
loadData();

// arrow function
const taskLoader = async () => {
  const res = await fetch("URL");
  const data = await res.json();
  console.log(data);
};
taskLoader();
