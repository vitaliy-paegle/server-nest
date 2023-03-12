import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Model } from "sequelize-typescript";

export class UserDto{

    @ApiProperty({example: 1, description: 'ID'})
    id: number;

    @ApiProperty({example: 'mail@mail.ru', description: 'Почта'})
    email: string;

    @ApiPropertyOptional({example: 'Иван', description: 'Имя пользователя'})
    firstName?: string;

    @ApiPropertyOptional({example: 'Иванов', description: 'Фамилия пользователя'})
    familyName?: string;

    @ApiProperty({description: 'Дата создания пользователя'})
    createdAt: string;

    @ApiProperty({description: 'Дата обновления данных пользователя'})
    updatedAt: string;
}