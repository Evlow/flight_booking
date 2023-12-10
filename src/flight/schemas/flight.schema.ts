import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FlightDocument = HydratedDocument<Flight>;

@Schema()
export class Flight {

  @Prop()
  flightNumber: string;

  @Prop()
  flightFrom: string

  @Prop()
  flightDestination: string;

  @Prop()
  flightDateTime: string;

  @Prop()
  flightSeatsCapacity: number;

  @Prop()
  flightPlaneName: string;

  @Prop()
  flightSeatNumber : string;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);