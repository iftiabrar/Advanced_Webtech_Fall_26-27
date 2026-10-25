import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { CreateBookDto } from "./dto/book.dto";

@Controller("books")
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks() {
    return await this.bookService.getBooks();
  }

  
  @Post()
  async createBook(@Body() dto: CreateBookDto) {
    return await this.bookService.createBook(dto);
  }

  @Patch(":id")
  async updateBook(@Param("id") id: string, @Body() dto: CreateBookDto) {
    return await this.bookService.updateBook(id, dto);
  }

  @Delete(":id")
  async deleteBook(@Param("id") id: string) {
    return await this.bookService.deleteBook(id);
  }
}

