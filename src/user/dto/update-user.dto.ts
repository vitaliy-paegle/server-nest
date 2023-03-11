export class UpdateUserDto {
    id: number;
    email: string;
    password: string;
    firstName?: string;
    familyName?: string;
}