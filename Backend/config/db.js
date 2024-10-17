import mongoose from "mongoose";

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Echec Veuiller verrifier la conncation a la db:", error.message);
    }
}
export default dbconnect;