const CourseSchema = require('../models/CourseSchema')


const coursepost = async(request,response)=>{

    let data = await CourseSchema(response.body).save()
}




module.exports = coursepost