import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Business {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    added_by : number;

    @Column()
    description : string;

}