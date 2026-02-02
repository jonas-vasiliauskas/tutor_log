import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'vas.jonas@gmail.com',
      //password: '$2b$16$Tpcz/Xhf976vepWiD/8apOdR3w4AYgX5JMhFafC/muQWrV0GXnrDK',
      password: 'msmsms',
    },
    {
      userId: 2,
      username: 'testas@testas.lt',
     // password: '$2b$16$os3hrfef1cKQ6QuIzJAfg.EuEYAW4KTLweKsBQSztmamkETJ2E0Oa',
     password: 'labas',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
