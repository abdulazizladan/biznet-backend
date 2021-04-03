import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Job{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    posted_by: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    country: string;

    @Column()
    state: string;

    @Column()
    lga: string;

    @Column()
    street_address: string;

    @Column()
    is_available: boolean;

    @Column()
    budget: number;

}