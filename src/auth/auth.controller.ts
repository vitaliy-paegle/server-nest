import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto.js';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
	
	@Post('register')
	async register(@Body() dto: AuthDto) {
		
	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {

	}
  
	@Get('env')
	async testEnv() {
		return process.env.PORT
	}
}
