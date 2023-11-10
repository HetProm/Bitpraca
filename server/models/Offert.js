import mongoose from "mongoose";

const offertSchema = new mongoose.Schema({
    url: {type: String, required: true},
    expectedTitle:  {type: String, required: true},
    expectedSalary:  {type: Object, required: false},
    expectedLocation:  {type: Array, required: true},
    expectedContract:  {type: Array, required: true},
    expectedSchedules:  {type: String, required: true},
    expectedLevel:  {type: String, required: true},
    expectedWorkmode:  {type: String, required: true},
    expectedQualifications:  {type: Object, required: true},
    logo: {type: String, required: true}

  })

  const OffertModel = mongoose.model('offert', offertSchema)

  export default OffertModel