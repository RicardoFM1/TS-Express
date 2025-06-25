import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {getRounds,hashSync} from "bcryptjs"
import { Posts } from "./posts.entitie";
@Entity("usuarios")
export class Usuarios {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    name: string

    @Column({unique:true})
    email: string

    @Column()
    password: string

    
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
        this.password = hashSync(this.password, 9);
        }
    }

}