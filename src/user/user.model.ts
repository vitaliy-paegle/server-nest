import { Column, DataType, Table, Model } from "sequelize-typescript";

interface CreationAttributs {
	email: string,
	password: string
}

@Table({tableName: 'users'})
export class UserModel extends Model<UserModel, CreationAttributs> {

	@Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
	id: number;

	@Column({type: DataType.STRING})
	email: string;

	@Column({type: DataType.STRING})
	passwordHash: string;

	@Column({type: DataType.STRING})
	firstName?: string;

	@Column({type: DataType.STRING})
	familyName?: string;

}
