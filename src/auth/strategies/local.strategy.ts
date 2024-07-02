import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local"; 
import { AuthService } from "../auth.service";
import { HttpException, Injectable } from "@nestjs/common";
import { LoginDto } from "../dto/login.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

constructor(private readonly authService:AuthService){
    super({usernameField:'email'});
    console.log("popo local strategy")
}

 async validate({email, password}:LoginDto){
    console.log("pop validate")
    console.log(email)
    console.log(password)
  const user= await  this.authService.login({email, password});
 if(!user ) throw new HttpException('Invalid credentials', 403)
   return user;
    }

}