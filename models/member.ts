import { Schema, model, models } from 'mongoose'

const MemberSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
})

const Member = models.Member || model('Member', MemberSchema)

export default Member
