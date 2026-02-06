import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './modules/book/book.module';
import { DatabaseModule } from 'src/modules/database/database.module';
import { AuthorModule } from 'src/modules/author/author.module';

@Module({
  imports: [DatabaseModule, AuthorModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
