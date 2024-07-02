import { Role } from "@prisma/client";
import { IsEmail, IsEnum, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    name:string
     
  
    role:Role
    @IsEmail()
    email:string

    @IsPhoneNumber()
    phoneNumber:string

    @IsString()
    password:string

}
