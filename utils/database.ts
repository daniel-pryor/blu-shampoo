//IMPORT MONGOOSE
import mongoose from 'mongoose'

let isConnected = false // track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(
      'mongodb+srv://buildstudiodan:PzFZuJ3uBP5zYTA9@cluster0.j6rqacv.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'blushampoo',
      }
    )

    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}
