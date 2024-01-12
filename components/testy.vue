// components/YourComponent.vue

<template>
  <div>
    <h1>HALOOOOO</h1>
  </div>
</template>

<script>
import axios from 'axios';

try {
  const response = await axios.post(
    'https://eu-central-1.aws.data.mongodb-api.com/app/data-phkxf/endpoint/data/v1/action/findOne',
    {
      collection: 'offerts',
      database: 'dbOfferts',
      dataSource: 'bitpraca',
      projection: {
        _id: 1,
        url: 1
      }
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.APIKEY
      }
    }
  );

  console.log(response.data.document);
} catch (error) {
  console.error(error);
}

</script>
