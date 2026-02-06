import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class UsersService {
    constructor(
        @Inject('PG_POOL') private readonly pool: Pool,
    ) {}

    async findByEmail(email: string):Promise<string> {
        const { rows } = await this.pool.query('SELECT password FROM "user" WHERE email = $1 LIMIT 1',[email]);
        if (rows[0]===undefined)
            return '';
        return rows[0]['password']??'';
    }
}

