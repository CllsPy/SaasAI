import { connect, disconnect } from 'mongoose'

async function connectToDataBase() {
    try{ 
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error);
        throw new Error("Try Again - Could Not Connect");
    }
}

async function disconnectFromDataBase() {
    try {
        await disconnect();
    } catch (error){
        console.log(error)
        throw new Error("Try Again - Could Not Disconect")
    }
}

export {connectToDataBase, disconnectFromDataBase}