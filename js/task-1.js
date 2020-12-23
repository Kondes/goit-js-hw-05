function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`login: ${this.login}, Email: ${this.email}`);
};
const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
mango.getInfo();
poly.getInfo();
