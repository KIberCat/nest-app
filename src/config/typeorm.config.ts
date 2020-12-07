import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'maxim1488',
  database: 'taskmanagment',
  entities: ['dist/**/*.entity{.ts,.js}'],
  // entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
