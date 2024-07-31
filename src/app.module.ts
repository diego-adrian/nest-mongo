import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:mongo@localhost:27017/admin'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
