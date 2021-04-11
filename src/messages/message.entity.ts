import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sender_id: number;

    @Column()
    recipient_id: number;

    @Column()
    subject: string;

    @Column()
    body: string;

    @Column()
    timestamp: number;
}