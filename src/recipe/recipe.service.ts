import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {

constructor(private readonly prisma:PrismaService){}

  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({data:
      {
        title:createRecipeDto.title,
        description:createRecipeDto.description,
      ingeridents:createRecipeDto.ingeridents,
        instructions:createRecipeDto.instructions
      }
    });
  }

  findAll() {
    return this.prisma.recipe.findMany(
     {
      include:{
        RecipeComment:{
          include:{
            comment:true
          }
        }
       
      }
     }
    );
  }

  findOne(id: number) {
    return this.prisma.recipe.findUnique({where:{Id:id}});
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
