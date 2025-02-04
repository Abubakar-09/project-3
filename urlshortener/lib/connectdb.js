import mongoose from 'mongoose';    

export async function ConnectDB(){
    await mongoose.connect(`${process.env.mongodb}`);
}
