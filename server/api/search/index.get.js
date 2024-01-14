import axios from 'axios';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const searchTerm = query.searchTerm;

    try {
        if (searchTerm) {
            const apiUrl = 'https://eu-central-1.aws.data.mongodb-api.com/app/data-phkxf/endpoint/data/v1/action/find';
            const response = await axios.post(apiUrl, {
                collection: 'offerts',
                database: 'dbOfferts',
                dataSource: 'bitpraca',
                projection: {
                    '_id': 0,
                    'expectedTitle': 1,
                    // Dodaj inne pola, których potrzebujesz
                },
                filter: {
                    expectedTitle: { $regex: searchTerm, $options: 'i' },
                },
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': process.env.APIKEY,
                },
            });
            const uniqueExpectedTitles = [...new Set(response.data.documents.map(item => item.expectedTitle))];
            console.log(uniqueExpectedTitles)
            return {uniqueExpectedTitles}
        }
    } catch (error) {
        console.error(error);
        throw createError({
            statusCode: 400,
            statusMessage: 'Wystąpił błąd podczas przetwarzania zapytania.',
        })
        
    }
});
