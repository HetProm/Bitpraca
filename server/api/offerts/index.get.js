import OffertModel from "~/server/models/Offert";

export default defineEventHandler(async () => {
    try {
        const result = await OffertModel.find()
        return result
    } catch (error) {
        console.log(error)
    }
})