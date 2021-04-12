export class Bid{
    id: number;
    job_id: number;
    user_id: number;
    quotation: number;
    comment: string;

    constructor(
        id: number,
        job_id: number,
        user_id: number,
        quotation: number,
        comment: string
    ){
        this.id = id;
        this.job_id = job_id;
        this.user_id = user_id;
        this.quotation = quotation;
        this.comment = comment;
    }
}