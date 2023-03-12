import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserModel } from './user.model.js';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto.js';

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
	constructor(private userSercice: UserService) {}

	@ApiOperation({summary: 'Создание пользователя'})
	@ApiResponse({status: 201, type: UserModel })
	@Post('')
	async createUser(@Body() dto: CreateUserDto): Promise<UserDto> {
		const user = await this.userSercice.createUser(dto)
		return user
	}

	@Get(':userID')
	async readUser(@Param('userID') userID: number) {
		const user = await this.userSercice.readUser(userID)
		return user
	}

	@Put(':userID')
	async updateUser(@Param('userID') userID: number, @Body() dto: UpdateUserDto) {
		const user = await this.userSercice.updateUser(dto, userID)
		return user
	}

	@Delete(':userID')
	async deleteUser(@Param('userID') userID: number) {
		const user = await this.userSercice.deleteUser(userID)
		return user
	}
}
