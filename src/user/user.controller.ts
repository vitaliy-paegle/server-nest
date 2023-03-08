import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserModel } from './user.model.js';

@Controller('user')
export class UserController {

	@Post('')
	async createUser(@Body() dto: Omit<UserModel, 'id'>) {
		
	}

	@Get(':userID')
	async readUser(@Param('userID') userID: number) {

	}

	@Put(':userID')
	async updateUser(@Param('userID') userID: number, @Body() dto: UserModel) {

	}

	@Delete(':userID')
	async deleteUser(@Param('userID') userID: number) {
		
	}
}
