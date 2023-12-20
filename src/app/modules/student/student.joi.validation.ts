import Joi from 'joi'

/*________________Joi Schema str____________________*/
const userNameValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string(),
  lastName: Joi.string().required(),
})

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
})

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
})

// main
const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  password: Joi.string(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other'),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required(),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
  isDeleted: Joi.boolean(),
})
/*________________Joi Schema end____________________*/

export default studentValidationSchema
