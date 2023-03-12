export default class Concert {
    constructor(
        id,
        
        fromLocation,
        toLocation,
        onDate,
        
        mediumType,
        required,
        joined,
        description
      ){
        this.id=id;
        
        this.fromLocation=fromLocation;
        this.toLocation=toLocation;
        this.onDate=onDate;
        
        this.mediumType=mediumType;
        this.required=required;
        this.joined=0;
        this.description=description;
      }
}