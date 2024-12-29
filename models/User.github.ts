import mongoose from 'mongoose'

const UserGithubSchema = new mongoose.Schema({ 
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email',
        ],
    },
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [50, 'Name can not be more than 50 characters'],
        minlength: [3, 'Name can not be less than 3 characters'],
    },
    profileImage: {
        type: String,
        required: [false, 'Please provide a profile image'],
    },
}, {timestamps: true})

export default mongoose.models.GithubUser || mongoose.model('GithubUser', UserGithubSchema);