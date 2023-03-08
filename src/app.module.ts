import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserModel } from './user/user.model';
import { PostgresConfig} from './config/postgres.config.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PostgresConfig,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
