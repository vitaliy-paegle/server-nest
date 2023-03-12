import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'mail@mail.ru', description: 'Почта'})
    email: string;

    @ApiProperty({example: 12345, description: 'Пароль'})
    password: string;

    @ApiPropertyOptional({example: 'Иван', description: 'Имя пользователя'})
    firstName?: string;

    @ApiPropertyOptional({example: 'Иванов', description: 'Фамилия пользователя'})
    familyName?: string;
}