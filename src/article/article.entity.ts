export class Article{
    id: number;
    user_id: number;
    title: string;
    body: string;
    timestamp: number;

    constructor(
        id: number,
        user_id: number,
        title: string,
        body: string,
        timestamp: number
    ){
        this.id = id;
        this.user_id = user_id;
        this.title = title;
        this.body = body;
        this.timestamp = timestamp
    }
}