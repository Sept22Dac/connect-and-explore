export default class Concert {
    constructor(
        id,
        name,
        location,
        date,
        
        required,
        joined,
        paid,
        charges
      ){
        this.id=id;
        
        this.name=name;
        this.location=location;
        this.date=date;
        
        this.required=required;
        this.joined=joined;
        this.paid=paid;
        this.charges=charges;
      }
}