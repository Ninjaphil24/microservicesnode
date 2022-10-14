import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;
   
    @Column()
    title:string;

    @Column()
    image:string;

    @Column(options: {default:0})
    likes:number;

}