import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "./entities/book.entity";
import { Repository } from "typeorm";
import { CreateBookDto, UpdateBookDto } from "./dto/book.dto";


@Injectable()
export class BookService {
constructor(
  @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
) {}

async getBooks() {
try {
  const books = await this.bookRepository.find();
  return books;}
  catch (error) {
    throw error;
}
}

async createBook(dto: CreateBookDto) {
try{
  const responce = await this.bookRepository.create(dto);
  return await this.bookRepository.save(responce);
}
catch (error) {
  throw error;
}}

async updateBook(id: string, dto: UpdateBookDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Book with ID not found");
    }
    const book = await this.bookRepository.findOne({ where: { id:id } });
    if (!book) {
      throw new NotFoundException("Book with ID not found");
    }
    Object.assign(book, dto);
    const {id: uid, ...rest}=book;
    return await this.bookRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteBook(id: string) {
  try{
  const book = await this.bookRepository.findOne({ where: { id:id } });
if (!book) {
  throw new NotFoundException("Book with ID not found");  
}
return await this.bookRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}