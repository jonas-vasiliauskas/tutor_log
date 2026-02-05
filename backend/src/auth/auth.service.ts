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
    const userPassword = await this.usersService.findByEmail(eMail);
    
    const isLoggedIn = await bcrypt.compare(pass,userPassword);
   
    if(!isLoggedIn)
        throw new UnauthorizedException();
        
    const payload = {email: eMail};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
