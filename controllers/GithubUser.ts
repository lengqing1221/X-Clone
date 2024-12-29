import connectDB from "@/lib/mongodb";
import GithubUser from "@/models/User.github";

const handleGithubUser = async (profile: { email: string; name: string; picture: string }) => {
    try {
      // Connect to the database
      await connectDB();
  
      // Log the profile for debugging
      console.log("Profile received:", profile);
  
      // Safely destructure the profile object
      const { email, name, picture: image } = profile;
      console.log("Email:", email, "Name:", name, "Image:", image);
  
      // Check if the user exists
      const existingUser = await GithubUser.findOne({ email });
      if (existingUser) {
        console.log("User already exists:", existingUser);
        return { message: "User already exists" };
      }
  
      // Create a new user if not found
      const newUser = await GithubUser.create({ email, name, image });
      console.log("New user created:", newUser);
  
      return { message: "User created successfully", user: newUser };
    } catch (error) {
      console.error("Error in handleGoogleUser:", error);
      throw new Error("Error fetching or creating user: " + (error instanceof Error ? error.message : error));
    }
  };
  

export default handleGithubUser;
