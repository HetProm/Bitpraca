// components/YourComponent.vue

<template>
  <div>
    <h1>HALOOOOO</h1>
  </div>
</template>

<script>
import axios from 'axios';

async function fetchData23() {
  try {
    const response = await axios.post(
      'https://eu-central-1.aws.data.mongodb-api.com/app/data-phkxf/endpoint/data/v1/action/findOne',
      {
        'collection': 'offerts',
        'database': 'dbOfferts',
        'dataSource': 'bitpraca',
        'projection': {
          '_id': 1,
          'url': 1
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': process.env.APIKEY
        }
      }
    );
    console.log(response.data.document);
    } catch (error) {
    console.error(error);
    }
}

fetchData23();

</script>
