export class BusinessAddress{
    id: number;
    business_id: number;
    country: string;
    state: string;
    lga: string | null;
    street_address: string;
    timestamp: number;

    constructor(
        id: number,
        business_id: number,
        country: string,
        state: string,
        lga: string | null,
        street_address: string,
        timestamp: number
    ){
        this.id = id;
        this.business_id = business_id;
        this.country = country;
        this.state = state;
        this.lga = lga;
        this.street_address = street_address;
        this.timestamp = timestamp;
    }
}