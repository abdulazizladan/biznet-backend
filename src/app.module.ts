import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessesModule } from './businesses/businesses.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { ProductsModule } from './products/products.module';
import { PersonalDataModule } from './personal-data/personal-data.module';
import { BidModule } from './bid/bid.module';
import { ArticleModule } from './article/article.module';
import { BusinessAddressModule } from './business-address/business-address.module';
import { MessagesModule } from './messages/messages.module';
import { PersonalAddressModule } from './personal-address/personal-address.module';

@Module({
  imports: [
    BusinessesModule,
    TypeOrmModule.forRoot({
      type : 'mysql',
      //host: '34.121.71.70',
      host: 'localhost',
      //host : 'biznet-540c7:us-central1:biznet-db',
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
    ProductsModule,
    PersonalDataModule,
    BidModule,
    ArticleModule,
    BusinessAddressModule,
    MessagesModule,
    PersonalAddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
