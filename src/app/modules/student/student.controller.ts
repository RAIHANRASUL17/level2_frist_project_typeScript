import { Request, Response } from 'express'
import { StudentServices } from './student.service'
// import studentValidationSchema from './student.joi.validation'
import studentZodSchema from './student.zod.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    // console.log(studentData)
    // main result
    //  const result = await StudentServices.createStudentIntoDB(studentData)

    // /*_______________ joi validation str_________________*/
    //   const { error, value } = studentValidationSchema.validate(studentData)
    //   // main with joi
    //   const result = await StudentServices.createStudentIntoDB(value)
    //   // joi error response
    //   if (error) {
    //     res.status(500).json({
    //       success: false,
    //       message: 'something is wrong in joi, please check',
    //       error: error.details,
    //     })
    //   }
    // /*_______________ joi validation end_________________*/

    /*_______________ zod validation str_________________*/
    const zodParsedData = studentZodSchema.parse(studentData)
    // main with zod
    const result = await StudentServices.createStudentIntoDB(zodParsedData)
    /*_______________ zod validation str_________________*/

    // main response
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something is wrong, please check',
      error: error,
    })
  }
}

// get all students
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentIntoDB()
    res.status(200).json({
      success: true,
      message: 'student is retrieved  successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

// get single Student
const getSingleStudent = async (req: Request, res: Response) => {
  // console.log(req.params)
  const { studentId } = req.params
  const result = await StudentServices.getSingleStudentIntoDB(studentId)
  res.status(200).json({
    success: true,
    message: 'student is retrieved  successfully!',
    data: result,
  })
}

// delete student
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.deleteStudentIntoDB(studentId)
    // console.log('--------79',result)
    res.status(200).json({
      success: true,
      message: 'student is deleted successfully!',
      data: result,
    })
  } catch (error) {
    console.log('----delete error', error)
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteStudent,
}
