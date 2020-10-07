// Перепиши функцию toggleUserState() так, чтобы она не использовала
// callback - функцию callback, а принимала всего два параметра allUsers
// и userName и возвращала промис.

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  const promise = new Promise((res) => {
    res(updatedUsers);
  });
  return promise;
};
const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
