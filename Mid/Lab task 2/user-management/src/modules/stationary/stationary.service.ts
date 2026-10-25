import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Stationary } from "./entities/stationary.entity";
import { Repository } from "typeorm";
import { CreateStationaryDto, UpdateStationaryDto } from "./dto/stationary.dto";


@Injectable()
export class StationaryService {
constructor(
  @InjectRepository(Stationary) private readonly stationaryRepository: Repository<Stationary>,
) {}

async getStationaries() {
try {
  const stationaries = await this.stationaryRepository.find();
  return stationaries;}
  catch (error) {
    throw error;
}
}

async createStationary(dto: CreateStationaryDto) {
try{
  const responce = await this.stationaryRepository.create(dto);
  return await this.stationaryRepository.save(responce);
}
catch (error) {
  throw error;
}}

async updateStationary(id: string, dto: UpdateStationaryDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Stationary with ID not found");
    }
    const stationary = await this.stationaryRepository.findOne({ where: { id:id } });
    if (!stationary) {
      throw new NotFoundException("Stationary with ID not found");
    }
    Object.assign(stationary, dto);
    const {id: uid, ...rest}=stationary;
    return await this.stationaryRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteStationary(id: string) {
  try{
  const stationary = await this.stationaryRepository.findOne({ where: { id:id } });
if (!stationary) {
  throw new NotFoundException("Stationary with ID not found");  
}
return await this.stationaryRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}