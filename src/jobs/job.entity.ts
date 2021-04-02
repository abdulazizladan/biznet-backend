export class Job{

    id: number;
    posted_by: string;
    title: string;
    description: string;
    country: string;
    state: string;
    lga: string;
    street_address: string;
    is_available: boolean;
    budget: number;

    constructor(
        posted_by: string,
        title: string,
        description: string,
        country: string,
        state: string,
        lga: string,
        street_address: string,
        is_available: boolean,
        budget: number
    ){
        this.posted_by = posted_by;
        this.title = title;
        this.description = description;
        this.country = country;
        this.state = state;
        this.lga = lga;
        this.street_address = street_address;
        this.is_available = is_available;
        this.budget = budget;
    }
}