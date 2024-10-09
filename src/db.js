import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('Conectado')
    } catch (error) {
        console.log(error)
    }
})