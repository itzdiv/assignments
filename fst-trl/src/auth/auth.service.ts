import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService,
        private readonly jwtService:JwtService
    ){}
    async register(registerDto:RegisterDto){
        const{email,password,fname,lname}=registerDto;
        const existingUser=await this.userService.findByEmail(email);
        if(existingUser){
            throw new BadRequestException('Email already exist!');
        }

        //hashing wassword
        const  hashedPassword = await bcrypt.hash(password,10);

        //create it in databse now
        const user=await this.userService.create({
            email,
            password:hashedPassword,
            fname,
            lname
        });

        //removing password to be more secured:
        function remove(){
            const { password, ...safeUser } = user;
            return safeUser;
        }
        const resposne = remove();
        
        return({message:"User Registered Succesfully!",resposne})
    }

    async login(loginDto:LoginDto){
        const{email,password}=loginDto;

        //finding user by email
        const user = await this.userService.findByEmail(email);

        //if user email doest exist (we dont wanna reveal email)
        if(!user){
            throw new UnauthorizedException('Invalid Credentials');
        }

        //comparing password
        const isPasswordValid=await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            throw new UnauthorizedException('Invalid Credentials');
        }
        //jwt payload
        const payload={
            sub:user.id,
            email:user.email
        };

        const aceses_token=this.jwtService.sign(payload);
        return{
            message:"Login Sucessfull!",
            aceses_token,
        };


        
    }
}
