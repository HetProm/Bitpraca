// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "static"
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'bitpraca.pl',
      meta: [{
        name: 'description',
        content: 'A platform enabling efficient searching through thousands of job offers. Available filters include experience levels, technologies, salary ranges, and remote opportunities. It provides clear browsing and easy applications for specific positions.'
      }],
      
    }
  },
  serverHandlers: [
    { route: '/api/search', handler: '~/server/api/search/index.get.js'}
  ],
  runtimeConfig: {
    dburl: process.env.DATABASE_URL,
    dbName: process.env.DBNAME,
    dbUsername: process.env.DBUSERNAME,
    dbPassword: process.env.DBPASSWORD,
    dbAuthSource: process.env.DBAUTHSOURCE,
    dbAPI: process.env.APIKEY
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
