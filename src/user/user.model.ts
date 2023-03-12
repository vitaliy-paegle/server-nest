import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Column, DataType, Table, Model } from "sequelize-typescript";



@Table({tableName: 'users'})
export class UserModel extends Model<UserModel> {

	@Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
	id: number;

	@Column({type: DataType.STRING})
	email: string;

	@Column({type: DataType.STRING, defaultValue: 'hash777'})
	passwordHash: string;

	@Column({type: DataType.STRING})
	firstName?: string;
    
	@Column({type: DataType.STRING})
	familyName?: string;
}
