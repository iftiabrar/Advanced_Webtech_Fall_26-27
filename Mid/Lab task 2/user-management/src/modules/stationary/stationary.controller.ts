import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { StationaryService } from "./stationary.service";
import { CreateStationaryDto } from "./dto/stationary.dto";

@Controller("stationaries")
export class StationaryController {
  constructor(private readonly stationaryService: StationaryService) {}

  @Get()
  async getStationaries() {
    return await this.stationaryService.getStationaries();
  }

  
  @Post()
  async createStationary(@Body() dto: CreateStationaryDto) {
    return await this.stationaryService.createStationary(dto);
  }

  @Patch(":id")
  async updateStationary(@Param("id") id: string, @Body() dto: CreateStationaryDto) {
    return await this.stationaryService.updateStationary(id, dto);
  }

  @Delete(":id")
  async deleteStationary(@Param("id") id: string) {
    return await this.stationaryService.deleteStationary(id);
  }
}

