import { Entity, OneToOne } from "typeorm";
import { AbstractModel } from "../AbstractModel";

@Entity({ name: "fuels" })
export class Fuel extends AbstractModel {}
