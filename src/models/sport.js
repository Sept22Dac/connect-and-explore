export default class Concert {
    constructor(
        eventId,
        eventType,
        name,
        location,
        date,
        time,
        required,
        joined,
        
      ){
        this.eventId=eventId;
        this.eventType=eventType;
        this.name=name;
        this.location=location;
        this.date=date;
        this.time=time;
        this.required=required;
        this.joined=joined;
        
      }
}