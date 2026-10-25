import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Khata } from "./entities/khata.entity";
import { Repository } from "typeorm";
import { CreateKhataDto, UpdateKhataDto } from "./dto/khata.dto";


@Injectable()
export class KhataService {
constructor(
  @InjectRepository(Khata) private readonly khataRepository: Repository<Khata>,
) {}

async getKhatas() {
try {
  const khatas = await this.khataRepository.find();
  return khatas;}
  catch (error) {
    throw error;
}
}

async createKhata(dto: CreateKhataDto) {
try{
  const responce = await this.khataRepository.create(dto);
  return await this.khataRepository.save(responce);
}
catch (error) {
  throw error;
}}

async updateKhata(id: string, dto: UpdateKhataDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Khata with ID not found");
    }
    const khata = await this.khataRepository.findOne({ where: { id:id } });
    if (!khata) {
      throw new NotFoundException("Khata with ID not found");
    }
    Object.assign(khata, dto);
    const {id: uid, ...rest}=khata;
    return await this.khataRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteKhata(id: string) {
  try{
  const khata = await this.khataRepository.findOne({ where: { id:id } });
if (!khata) {
  throw new NotFoundException("Khata with ID not found");  
}
return await this.khataRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}