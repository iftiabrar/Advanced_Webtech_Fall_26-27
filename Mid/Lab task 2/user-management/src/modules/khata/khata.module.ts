import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Khata } from "./entities/khata.entity";
import { KhataController } from "./khata.controller";
import { KhataService } from "./khata.service";

@Module({
  imports: [TypeOrmModule.forFeature([Khata])],
  controllers: [KhataController],
  providers: [KhataService],
  exports: [KhataService],
})
export class KhataModule {}
