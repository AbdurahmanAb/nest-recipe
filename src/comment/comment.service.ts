import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {

  constructor(private readonly prisma :PrismaService){

  }
 async create(createCommentDto: CreateCommentDto)  {
   const comment = await this.prisma.comment.create({
      data:{comment: createCommentDto.comment


      },
  
    
    });

    const commentRecipe = await this.prisma.recipeComment.create({
      data:{
        commentId:comment.id,
        recipeId:createCommentDto.recipeId
      }
    
    })
    return this.prisma.comment.findUnique({where:{id:comment.id,

      
    },
  include:{
    RecipeComment:{
      include:{
        recipe:true
      }
    }
  }
  
  })
  }

  findAll() {
    return this.prisma.comment.findMany({
      include:{
        RecipeComment:{
          include:{
            recipe:true
          }
        }
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
