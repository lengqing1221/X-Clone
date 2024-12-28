import connectDB from "./mongodb"

type FormData = {
    username: string;
    password: string;
}

export const login = async (formData: FormData) => {
    try {   
        const { username, password } = formData
        if (username.findOne({ username })) === true {
            console.log('User already exists');
        }
        connectDB()
    } catch (err) {
        console.log(err);
    }
}

export const signup = async () => {
    try {
        connectDB()
    } catch (err) {
        console.error(err); 
    }
}