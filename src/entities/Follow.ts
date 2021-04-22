import { Field, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	RelationId,
} from "typeorm";

import { User } from "./User";

@ObjectType()
@Entity()
export class Follow extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@Column()
	subjectNumber: string;

	@Field()
	@Column()
	subjectEmail: string;

	@Field()
	@Column()
	targetNumber: string;

	@Field()
	@Column()
	targetEmail: string;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.subject, { nullable: true })
	subject: User;

	@Field(() => User)
	@ManyToOne(() => User, (user) => user.target, { nullable: true })
	target: User;
}