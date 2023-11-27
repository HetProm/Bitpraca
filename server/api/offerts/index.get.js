import OffertModel from "~/server/models/Offert";


export default defineEventHandler(async (event) => {

    try {
        const query = getQuery(event)
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const skip = (page - 1) * limit;
        const remotework = query.remotework === 'true' ? "Remote": false;
        const pricepool = query.pricepool === 'true' ? true : false ;
        const technologies = query.technologies ? decodeURIComponent(query.technologies).split(',') : false;
        const searchOfferts = query.searchOfferts;

        
        let remoteworkFilter = {};
        let pricepoolFilter = {};
        let experienceLevelFilter = {};
        let technologiesFilter = {};
        let searchFilter = {};


        if(remotework !== false) {
            remoteworkFilter = {expectedWorkmode: remotework};
        }

        if(pricepool){
            pricepoolFilter = {expectedSalary: {$exists: true}};
        }
        if (technologies) {
            technologies.forEach(tech => {
                technologiesFilter[`expectedQualifications.${tech}`] = { $exists: true };
            })
        }
        if (searchOfferts) {
            searchFilter = {expectedTitle: {$regex: searchOfferts, $options: 'i'}};           
        }
       
 
        switch (parseInt(query.experienceLevel)) {
            case 0:
                break;
            case 1:
                experienceLevelFilter = {expectedLevel: {$regex: 'junior' , $options: 'i'}};
                break;
            case 2:
                experienceLevelFilter = {expectedLevel: {$regex: 'mid' , $options: 'i'}};
                break;
            case 3:
                experienceLevelFilter = {expectedLevel: {$regex: 'senior' , $options: 'i'}};
                break;
        
            default:
                break;
        }
        let result = null;
        let total = 0;
        if (searchOfferts) {
            result = await OffertModel.find(searchFilter);
            total = await OffertModel.countDocuments(searchFilter);
        }else{
            result = await OffertModel.find({...remoteworkFilter, ...pricepoolFilter, ...experienceLevelFilter, ...technologiesFilter}).skip(skip).limit(limit);
            total = await OffertModel.countDocuments({...remoteworkFilter, ...pricepoolFilter, ...experienceLevelFilter, ...technologiesFilter});
        }
        

        return {
            offerts : result,
            total,
            page,
            limit,
            totalPages: Math.ceil(total/limit)
        }
    } catch (error) {
        console.log(error)
    }
})

// /api/offerts?page=1&limit=10