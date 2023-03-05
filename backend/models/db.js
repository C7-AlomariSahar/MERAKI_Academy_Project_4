
const mongoose = require ("mongoose")
mongoose.set("strictQuery", false);
console.log("------db-----")
mongoose.connect(process.env.DB_URL).then(
    ()=>{
        console.log(`you are connected to project_4 DB`)
    }
).catch(
    (err)=>{console.log("_________________".err)}
)



