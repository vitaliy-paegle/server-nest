
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService { 
    constructor(@InjectModel(UserModel) private usersRepo: typeof UserModel) {}
    
    async createUser(dto: CreateUserDto) {
        const user = await this.usersRepo.create(dto)
        return user
    }

    async readUser(userID: number) {
        const user = await this.usersRepo.findOne({where: {id: userID}})
        return user
    }

    async updateUser(dto: UpdateUserDto, userID: number) {
        const user = await this.usersRepo.update(dto, {where: {id: userID}, returning: true})
        return user
    }

    async deleteUser(userID: number) {
        const user = await this.usersRepo.destroy({where: {id: userID}})
        return user
    }

}
