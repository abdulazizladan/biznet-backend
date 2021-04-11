export class Messgae{
    id: number;
    sender_id: number;
    recipient_id: number;
    subject: string;
    body: string;
    timestamp: number;

    constructor(
        id: number,
        sender_id: number,
        recipient_id: number,
        subject: string,
        body: string,
        timestamp: number
    ){

    }
}