import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.PageCreateInput[] = [
  {
      "title": "Seed - Node Js",
      "description": "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following \"hello world\" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.",
      "img": "https://miro.medium.com/max/800/0*UvTRONPqVq7Igw7i.jpg",
      "visits": 0
  },
  {
      "title": "Seed - Database",
      "description": "A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.",
      "img": "https://www.hn.cl/wp-content/uploads/2020/11/BDM-1.png",
      "visits": 0
  },
  {
      "title": "Seed - Vue.js",
      "description": "Vue.js is another open-source progressive JavaScript framework for building user interfaces, similar to React. The USP of Vue.js is its adaptability, integration into projects that use other JavaScript libraries is very easy with Vue because it is designed to be incrementally adoptable. It also supports declarative rendering using template syntax to provide data to the DOM. For beginners, Nuxt.js — Vue.js on Steroids is a good place to start with and find more information.",
      "img": "https://miro.medium.com/max/800/0*hKTJaPVvVsi6dANB.jpeg",
      "visits": 0
  },
  {
      "title": "Seed - Ember js",
      "description": "Ember.js is another popular, open-source JavaScript web framework that is based on the Model and View pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework itself. It has integrated features like templates also known as handlebars that helps in writing less code and have the ability to update themselves with a change in data. Ember.js can be installed via NPM.",
      "img": "https://miro.medium.com/max/540/0*U_cuke8P-STuLNRF.png",
      "visits": 0
  },
  {
      "title": "Seed - Angular Js",
      "description": "Angular previously known as Angular JS is a single web development framework developed by Google for both desktop and mobile web applications. Angular aims at creating progressive web apps by offering dependency injection that helps in data service assembly for applications while an HTML template is used for composing templates.",
      "img": "https://miro.medium.com/max/800/0*ut0M6I7IqssV3iZH.png",
      "visits": 0
  },
  {
      "title": "Seed - Polymer JS",
      "description": "The polymer is another open-source JavaScript library that helps you create custom reusable HTML elements, which can be used to build performant, maintainable web applications. If you compare Angular with Polymer as both are developed by Google, then Angular is a complete framework for building web apps, whereas Polymer is just a library for creating Web Components.",
      "img": "https://miro.medium.com/max/800/0*bPtXKR3dlBSMeLQt.jpg",
      "visits": 0
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.page.create({
      data: u,
    })
    console.log(`Created Page with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })