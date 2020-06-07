const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Express start at http://localhost:3000");
});

/************ Model ************/
// 簡易的な実装のためオンメモリのjsonObjectの配列
let users = [{
  id: 0,
  name: "varlal",
  age: 30
}];

/************ View ************/
// jsonで返すだけなので記述無し

/************ Controller ************/
const getUsersList = () => {
  return users;
}

const createUser = (id, name, age) => {
  for (index in users) {
    if (users[index].id === id) {
      return {
        "error": "already exsist."
      }
    }
  }
  const user = {
    id: id,
    name: name,
    age: age
  }
  users.push(user)
  return user;
}

const getUser = (id) => {
  let matchedUser = {}
  for (index in users) {
    if (users[index].id === parseInt(id)) {
      matchedUser = users[index];
    }
  }
  return matchedUser;
}

const updateUser = (id, name, age) => {
  let matchedUser = {}
  for (index in users) {
    if (users[index].id === parseInt(id)) {
      users[index].name = name;
      users[index].age = age;
      matchedUser = users[index];
    }
  }
  return matchedUser;
}

const deleteUser = (id) => {
  let matchedUser = {}
  let matchedIndex = null;
  for (index in users) {
    if (users[index].id === parseInt(id)) {
      matchedUser = users[index];
      matchedIndex = index;
    }
  }
  if (matchedIndex) {
    users.splice(matchedIndex, 1);
  }
  return matchedUser;
}

/************ Route ************/
const basePath = "/api/v1/users";
const contentTypeHeader = "application/json; charset=utf-8";

app.get(basePath, (req, res, next) => {
  res.header('Content-Type', contentTypeHeader);
  res.json(getUsersList());
});

app.post(basePath, (req, res, next) => {
  res.header('Content-Type', contentTypeHeader);
  res.json(createUser(req.body.id, req.body.name, req.body.age));
});

app.get(basePath + "/:id", (req, res, next) => {
  res.header('Content-Type', contentTypeHeader);
  res.json(getUser(req.params.id));
});

app.put(basePath + "/:id", (req, res, next) => {
  res.header('Content-Type', contentTypeHeader);
  res.json(updateUser(req.params.id, req.body.name, req.body.age));
});

app.delete(basePath + "/:id", (req, res, next) => {
  res.header('Content-Type', contentTypeHeader);
  res.json(deleteUser(req.params.id));
});