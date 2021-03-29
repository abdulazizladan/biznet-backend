import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessesModule } from './businesses/businesses.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    BusinessesModule,
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : 'localhost',
      port : 3306,
      username : 'biznet_user',
      password : '2wo1ne8ight',
      database : 'biznet_db',
      autoLoadEntities : true,
      synchronize : true
    }),
    AuthModule,
    UsersModule,
    JobsModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
