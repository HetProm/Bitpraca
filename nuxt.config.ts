// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  runtimeConfig: {
    dburl: process.env.DATABASE_URL,
    dbName: process.env.DBNAME,
    dbUsername: process.env.DBUSERNAME,
    dbPassword: process.env.DBPASSWORD,
    dbAuthSource: process.env.DBAUTHSOURCE,
    dbAPI: process.env.APIKEY,
    dbApiEntry: process.env.DATABASE_URL2
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
