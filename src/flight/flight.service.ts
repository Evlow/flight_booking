import { Injectable } from '@nestjs/common';
import { Flight } from './schemas/flight.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFlightDto } from './dto/createFlight.dto';
import { UpdateFlightDto } from './dto/updateFlight.dto';

@Injectable()
export class FlightService {
  [x: string]: any;
  constructor(@InjectModel(Flight.name) private FlightModel: Model<Flight>) {}

  async create(createFlight: CreateFlightDto): Promise<Flight> {
    const createdFlight = new this.FlightModel(createFlight);
    return createdFlight.save();
  }

  async getAllFlight(): Promise<Flight[]> {
    return this.FlightModel.find().exec();
  }

  async findByFlightNumber(flightNumber: string): Promise<Flight> {
    return this.FlightModel.findOne({ flightNumber: flightNumber });
  }

  async deleteFlight(flightNumber: string) {
    return this.FlightModel.deleteOne({ flightNumber: flightNumber });
  }

  async updateFlight(updateFlight: UpdateFlightDto, flightNumber: string) {
    return this.FlightModel.findOneAndUpdate(
      { flightNumber: flightNumber },
      updateFlight,
    );
  }
}
