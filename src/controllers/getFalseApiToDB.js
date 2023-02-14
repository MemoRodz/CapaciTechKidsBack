const tblCourses = require("../models/tblCourses");
const falseAPi = require("../utils/falseApi")

const getFalseApiToDB = async() => {
    try {
 const mapeados = falseAPi.map((result) => {
    let courseArray = {};
    courseArray.Title = result.Title;
    courseArray.Description = result.Description;
    courseArray.Category = result.Category;
    courseArray.Start_Date = result.Start_Date;
    courseArray.End_Date = result.End_Date;
    courseArray.Image = result.Image;
    courseArray.Duration = result.Duration;
    return courseArray;
  })

  for (const data of mapeados) {  
    await tblCourses.create({
        Title : data.Title,
        Description : data.Description,
        Category : data.Category,
        Start_Date: data.Start_Date,
        End_Date : data.End_Date,
        Image : data.Image,
        Duration : data.Duration
    })}

    return tblCourses.findAll()
    }
    catch(error){
        return error.message
    }
}

/* [{Title: string,
Description : string,
Category : ENUM 'Design',
                'Development',
                'Business',
                'Marketing',
                'Other ,
Start_Date : Dateonly(fechas),
End_Date: Dateonly(fechas),
Image: string,
Duration: integer
}]*/ 