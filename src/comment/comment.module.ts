import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CommentMiddleware } from './comment.middleware';

@Module({
  imports:[PrismaModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CommentMiddleware).forRoutes('comment',
    
    );
 
  }

}
