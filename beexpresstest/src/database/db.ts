import mongoose from 'mongoose'

const connectdb = async (url: string) => {
  try {
    await mongoose.connect(url)

    console.log('Connected to Database')
  } catch (error) {
    console.log(error)
  }
}

export default connectdb
