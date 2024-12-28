import mongoose from 'mongoose';

// process.env.MONGODB_URL || 
const connectDB = async () => {
    try {
        const mongoURI = 'mongodb+srv://danielxu122178:xCN1aZuvkTrIuL2T@cluster0.kin6s.mongodb.net/XClone?retryWrites=true&w=majority&appName=Cluster0';
        
        if (!mongoURI) {
            throw new Error('MONGODB_URL is not defined in the environment variables.');
        }

        await mongoose.connect(mongoURI, {
        });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB');
        console.log(error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB;
