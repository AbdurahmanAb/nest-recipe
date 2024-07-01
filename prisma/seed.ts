import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient(
  
);

async function main() {
  // create two dummy recipes
  const recipe1 = await prisma.recipe.create({
    data:
      {
      
        title: 'Spaghetti Bolognese',
        description: 'A classic Italian dish',
        ingeridents:   'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
        instructions:
          '1. Cook the spaghetti. 2. Fry the minced beef. 3.  Add the tomato sauce to the beef 4. Serve the spaghetti with the sauce.',
        RecipeComment: {
  create:{
    comment:{
      create:{
        comment:'This is a delicious recipe',
       
      }
    
    }
  }
        }  
          
      },
     
 
  });

  const recipe2 = await prisma.recipe.create({
    data:
      {
      
        title: 'Enjera FrFr',
        description: 'A classic Italian dish',
        ingeridents:   'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
        instructions:
          '1. Cook the spaghetti. 2. Fry the minced beef. 3.  Add the tomato sauce to the beef 4. Serve the spaghetti with the sauce.',
        RecipeComment: {
  create:{
    comment:{
      create:{
        comment:'This is From Related Recipe 2',
       
      }
    
    }
  }
        }  
          
      },
     
 
  });
 

  console.log({ recipe1, recipe2 });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });