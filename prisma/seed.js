const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  {name:"kittisak01", username : 'andy', password, email: 'andy@ggg.mail' },

]

const run = async () => {
  try{ await prisma.user.createMany({
    data : userData
  })
  console.log('seed successfull')
  }catch(error){
    console.error('seed failed with error: ' , error)
  } finally{
    await prisma.$disconnect();
  }
}

run()
