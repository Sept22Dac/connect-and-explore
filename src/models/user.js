export default class User {
  constructor(
    id,
    fname,
    lname,
    dob,
    email,
    password,
    gender,
    city,
    zipCode,
    contact,
    role,
    token
  ) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.dob = dob;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.city = city;
    this.zipCode = zipCode;
    this.contact = contact;
    this.role = role;
    this.token = token;
  }
}
