import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(
			`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
		);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.bold.underline);
		process.exit(1);
	}
};

export default connectDB;
