import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from 'src/user/user.model';

@Module({
	imports: [
		SequelizeModule.forRootAsync({
			useFactory: () => ({
				dialect: 'postgres',
				host: process.env.POSTGRES_HOST,
				port: Number(process.env.POSTGRESS_PORT),
				username: process.env.POSTGRES_USER,
				password: process.env.POSTGRES_PASSWORD,
				database: process.env.POSTGRES_DB,
				models: [UserModel],
				autoLoadModels: true
			})
		})
	]
})
export class PostgresConfig {}