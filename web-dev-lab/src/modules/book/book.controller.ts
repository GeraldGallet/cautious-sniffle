import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  CreateBookDto,
  DeleteBooksDto,
  GetBooksQueryDto,
} from 'src/modules/book/book.dto';
import type { BookId } from 'src/modules/book/book.entity';
import {
  GetBooksModel,
  sortDirections,
  SortDirection,
  FilterBooksModel,
  sortProperties,
  SortProperty,
} from 'src/modules/book/book.model';
import { BookService } from 'src/modules/book/book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public async getBooks(
    @Query() input: GetBooksQueryDto,
  ): Promise<GetBooksModel> {
    const { sort, ...rest } = input;
    let computedInput: FilterBooksModel = {
      ...rest,
    };

    if (sort) {
      // 'title,ASC'
      const [property, direction] = sort.split(',');
      if (sortDirections.includes(direction as SortDirection)) {
        computedInput = {
          ...computedInput,
          sort: {
            ...(computedInput.sort ? computedInput.sort : {}),
            direction: direction as SortDirection,
          },
        };
      }

      if (sortProperties.includes(property as SortProperty)) {
        computedInput = {
          ...computedInput,
          sort: {
            ...(computedInput.sort ? computedInput.sort : {}),
            property: property as SortProperty,
          },
        };
      }
    }
    const result = await this.bookService.getBooks(computedInput);

    return {
      data: result[0],
      totalCount: result[1],
    };
  }

  @Get(':id')
  public async getBookById(@Param('id') id: BookId) {
    return this.bookService.getBookById(id);
  }

  @Post()
  public async createBook(@Body() input: CreateBookDto) {
    return this.bookService.createBook(input);
  }

  @Patch(':id')
  public async updateBookById(
    @Param('id') id: BookId,
    @Body() input: CreateBookDto,
  ) {
    return this.bookService.updateBookById(id, input);
  }

  @Delete('bulk')
  public deleteBooks(@Body() input: DeleteBooksDto) {
    console.log('bulk');
    return this.bookService.deleteBooks(input.ids);
  }

  @Delete(':id')
  public async deleteBookById(@Param('id') id: string) {
    console.log('single');
    return this.bookService.deleteBookById(id);
  }
}
