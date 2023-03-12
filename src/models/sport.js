export default class Sport {
  constructor(
    id,
    stype,
    name,
    location,
    date,

    required,
    joined
  ) {
    this.id = id;
    this.stype = stype;
    this.name = name;
    this.location = location;
    this.date = date;

    this.required = required;
    this.joined = 0;
  }
}
