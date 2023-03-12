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
        this.joined=0;
        this.paid=0;
        this.charges=charges;
      }
}