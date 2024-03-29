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
	@ApiResponse({status: 201, type: UserDto })
	@Post('')
	async createUser(@Body() dto: CreateUserDto): Promise<UserDto> {
		const user = await this.userSercice.createUser(dto)
		return user
	}
    
	@ApiOperation({summary: 'Получение данных пользователя'})
	@ApiResponse({status: 200, type: UserDto})
	@Get(':userID')
	async readUser(@Param('userID') userID: number) {
		const user = await this.userSercice.readUser(userID)
		return user
	}

	@ApiOperation({summary: 'Обновление данных пользователя'})
	@ApiResponse({status: 200, type: UserDto})
	@Put('')
	async updateUser(@Body() dto: UpdateUserDto) {
		const user = await this.userSercice.updateUser(dto)
		return user
	}

	@ApiOperation({summary: 'Удаление пользователя'})
	@ApiResponse({status: 200, type: UserDto})
	@Delete(':userID')
	async deleteUser(@Param('userID') userID: number) {
		const user = await this.userSercice.deleteUser(userID)
		return user
	}
}
