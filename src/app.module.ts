import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightModule } from './flight/flight.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FlightModule, MongooseModule.forRoot('mongodb://localhost/flight')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
