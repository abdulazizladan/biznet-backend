import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bid {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    job_id: number;

    @Column()
    user_id: number;

    @Column()
    quotation: number;

    @Column()
    comment: string;
    
}