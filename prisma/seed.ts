import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient(
  
);

async function main() {
  // create two dummy recipes
  const recipe1 = await prisma.recipe.createMany({
    data:[
      {
        title: 'Spaghetti Bolognese',
        description: 'A classic Italian dish',
        ingeridents:   'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
        instructions:
          '1. Cook the spaghetti. 2. Fry the minced beef. 3.  Add the tomato sauce to the beef 4. Serve the spaghetti with the sauce.'
      },
      {
        title: 'Chicken Curry',
        description: 'A spicy Indian dish',
        ingeridents:'Chicken, curry powder, onions, garlic, coconut milk, olive oil, salt, pepper',
        instructions:
          '1. Fry the chicken. 2. Add the curry powder to the chicken. 3. Add the coconut milk. 4. Serve the curry with rice.'
      }
    ]
 
  });

 

  console.log({ recipe1,  });
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