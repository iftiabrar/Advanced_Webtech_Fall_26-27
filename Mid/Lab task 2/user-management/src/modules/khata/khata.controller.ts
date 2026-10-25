import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { KhataService } from "./khata.service";
import { CreateKhataDto } from "./dto/khata.dto";

@Controller("khatas")
export class KhataController {
  constructor(private readonly khataService: KhataService) {}

  @Get()
  async getKhatas() {
    return await this.khataService.getKhatas();
  }

  
  @Post()
  async createKhata(@Body() dto: CreateKhataDto) {
    return await this.khataService.createKhata(dto);
  }

  @Patch(":id")
  async updateKhata(@Param("id") id: string, @Body() dto: CreateKhataDto) {
    return await this.khataService.updateKhata(id, dto);
  }

  @Delete(":id")
  async deleteKhata(@Param("id") id: string) {
    return await this.khataService.deleteKhata(id);
  }
}

