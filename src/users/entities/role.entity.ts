import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role{
    
    @PrimaryGeneratedColumn()
    @Column()
    user_email: string;

    @Column()
    can_suspend_users: boolean;
}