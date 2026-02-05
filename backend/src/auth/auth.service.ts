import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(eMail: string, pass: string) {
    const bcrypt = require('bcrypt');
    console.log("AuthService.signIn(string,string): eMail = "+eMail+" pass "+pass);
    const userPassword = await this.usersService.findByEmail(eMail);
    
    /*if (user?.password, pass) 
        throw new UnauthorizedException();
    if(!bcrypt.compare(userPassword, pass))
        throw new UnauthorizedException();*/
        
    //const payload = { username: user.username, sub: user.userId };
    const payload = {email: eMail};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
