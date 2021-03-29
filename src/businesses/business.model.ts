export class Business{
    
    id : number;
    name : string;
    description : string;
    added_by: number;


    constructor( 
        name : string,
        description: string,
        added_by: number    
    ){
        this.name = name;
        this.description = description;
        this.added_by = added_by
    }
}