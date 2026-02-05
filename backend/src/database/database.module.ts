import { Module, Global } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigModule } from '@nestjs/config';

@Global() // makes it available everywhere without re-importing
@Module({
  providers: [
    {
      provide: 'PG_POOL',
      useFactory: async () => {
        const pool = new Pool({
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        //  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
        });

        return pool;
      },
    },
  ],
  exports: ['PG_POOL'],
})
export class DatabaseModule {}

