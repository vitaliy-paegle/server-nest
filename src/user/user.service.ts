
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { log } from 'console';
import { UserDto } from './dto/user.dto';


@Injectable()
export class UserService { 
    constructor(@InjectModel(UserModel) private usersRepo: typeof UserModel) {}
    
    async createUser(dto: CreateUserDto): Promise<UserDto> {
        const user = await this.usersRepo.create(dto)
        delete user.dataValues['passwordHash']
        return user as UserDto
    }

    async readUser(userID: number): Promise<UserDto> {
        const user = await this.usersRepo.findOne({
            attributes: {
                exclude: ['passwordHash']
            },
            where: {id: userID}
        })
        return user as UserDto
    }

    async updateUser(dto: UpdateUserDto) {
        const user = await this.usersRepo.sequelize.query(`
        UPDATE users 
        SET firstName = ${dto.firstName} 
        WHERE id = ${dto.id}`)
    }

    async deleteUser(userID: number) {
        const user = await this.usersRepo.destroy({where: {id: userID}})
        return user
    }

}
