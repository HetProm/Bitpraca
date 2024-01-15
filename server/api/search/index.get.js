import OffertModel from "~/server/models/Offert";


export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const searchTerm = query.searchTerm;


    try{
        if (searchTerm) {
            const searchResult = await OffertModel.distinct(
                'expectedTitle',
                {expectedTitle: {$regex: searchTerm, $options: 'i'}}    
                );
            return searchResult;
        }
       
       
    } catch (error) {
        console.error(error);
        return "Wystąpił błąd podczas przetwarzania zapytania."
    }
})