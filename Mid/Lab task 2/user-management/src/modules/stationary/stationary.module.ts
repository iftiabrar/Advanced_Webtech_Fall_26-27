import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Stationary } from "./entities/stationary.entity";
import { StationaryController } from "./stationary.controller";
import { StationaryService } from "./stationary.service";

@Module({
  imports: [TypeOrmModule.forFeature([Stationary])],
  controllers: [StationaryController],
  providers: [StationaryService],
  exports: [StationaryService],
})
export class StationaryModule {}
