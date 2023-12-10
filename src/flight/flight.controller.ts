import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/createFlight.dto';
import { Flight } from './schemas/flight.schema';
import { UpdateFlightDto } from './dto/updateFlight.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post('createFlight')
  async create(@Body() createFlight: CreateFlightDto): Promise<Flight> {
    return await this.flightService.create(createFlight);
  }

  @Get('getAllFlight')
  async getAllFlight(): Promise<Flight[]> {
    return await this.flightService.getAllFlight();
  }

  @Get('getByFlightNumber/:flightNumber')
  async getByFlightNumber(
    @Param('flightNumber') flightNumber: string,
  ): Promise<Flight> {
    return await this.flightService.findByFlightNumber(flightNumber);
  }

  @Delete('deleteFlight/:flightNumber')
  async deleteFlight(
    @Param('flightNumber') flightNumber: string,
  ): Promise<void> {
    await this.flightService.deleteFlight(flightNumber);
  }

  @Put('updateFlight/:flightNumber')
  async updateFlight(
    @Param('flightNumber') flightNumber: string,
    @Body() flightdto: UpdateFlightDto,
  ): Promise<Flight> {
    return await this.flightService.updateFlight(flightdto, flightNumber);
  }
}
