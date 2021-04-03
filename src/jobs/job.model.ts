export class Job{

    id : number;
    added_by : string;
    title : string;
    description : string;
    country : string;
    state : string;
    lga : string;
    street_address : string;
    is_available : boolean;
    budget : number;
    date_added : number;

    constructor(
        id : number,
        added_by : string,
        title : string,
        description : string,
        country : string,
        state : string,
        lga : string,
        street_address : string,
        is_available : boolean,
        budget : number,
        date_added : number,
    ){
        this.id = id;
        this.added_by = added_by;
        this.title = title;
        this.description = description;
        this.country = country;
        this.state = state;
        this.lga = lga;
        this.street_address = street_address;
        this.is_available = is_available;
        this.budget = budget;
        this.date_added = date_added;
    }
}