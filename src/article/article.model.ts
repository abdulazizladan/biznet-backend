import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    title: string;

    @Column()
    body: string;

    @Column()
    timestamp: number;

}