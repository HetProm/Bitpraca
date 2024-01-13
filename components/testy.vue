// components/YourComponent.vue

<template>
  <div>
    <h1>HALOOOOO</h1>
  </div>
</template>

<script>
import mongoose from 'mongoose';
 async function nuxtServerInit() {
    try {
      await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Connection error:', error);
    }
  }


  nuxtServerInit()

</script>
