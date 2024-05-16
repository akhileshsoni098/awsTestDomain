
// credentials = require('./middi/credentials.js');
// const corsOptions = require('./config/corsOptions.js');
const express =require("express")

const cors = require("cors")
const app = express()

 
app.use(express.json())

 


app.use(cors());


app.get('/', async (req, res) => {
    res.status(200).json({message:"App is working fine"})
})



//////////// routing will be here ///////////

const routes = require("./routes.js")

app.use("/",routes)


module.exports = app;











/* 
const blogData = require("./routes/blogRoute")
app.use("/admin", blogData)



const user = require("./routes/userRoute")
app.use("/user", user)




const adminSuggestion = require("./routes/adminSuggesstionRoute.js")
app.use("/admin", adminSuggestion)


const admin = require("./routes/adminRoute")
app.use("/admin", admin)


const dummyTemplate = require("./routes/adminDummy")
app.use("/adminDummy", dummyTemplate)


const ResumeExample = require("./routes/resumeExampleRoute")
app.use("/adminContent", ResumeExample)


 */
