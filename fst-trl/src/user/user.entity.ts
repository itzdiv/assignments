import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    fname:string;

    @Column()
    lname:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @CreateDateColumn()
    created_at: Date;
}