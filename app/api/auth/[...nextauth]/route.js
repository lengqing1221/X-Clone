import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User.model";
import connectDB from "@/lib/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import NextAuth from "next-auth/next";
// import { redirect } from 'next/navigation'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials

        try {
          // Ensure DB is connected
          await connectDB();

          // Hash the password before saving it
          const hashedPassword = await bcrypt.hash(password, 10);

          // Create and save the new User
          const newUser = new User({
            email,
            password: hashedPassword,
            name: 'defaukt',
            image: '', 
          });
          await newUser.save();

          // Generate JWT token
          console.log(newUser);
          
          const tokenData = jwt.sign(
            { id: newUser._id,
              email: newUser.email,
              name: newUser.name,   
              image: newUser.image,
             },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          if (!tokenData) {
            throw new Error("Failed to create token");
          }

          // Return the new user object with JWT token
          return { id: newUser._id, email: newUser.email, token: tokenData };
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // Set the cookie expiration time (1 day in this example)
    updateAge: 60 * 60,
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    // jwt callback is correct, so no change needed here.
    async jwt({ token, user }) {
      if (user) { 
        token.id = user.id;
        token.email = user.email;
        token.name = user.name || '';
        token.image = user.image || '';
      }
      return token;
    },
    
    // session callback is also correct
    async session({ session, token }) {
      console.log(session);
      
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.image;
      return session;
    },
  
    // signIn callback needs to accept the correct parameters
    async signIn({ profile }) {
      if (profile) {
        await connectDB();
        console.log(profile);
        
        const existingUser = await User.findOne({ email: profile.email });
    
        if (!existingUser) {
          const newUser = new User({
            email: profile.email,
            name: profile.name,
            image: profile.image,
          });
    
          await newUser.save();
          console.log("New user created:", newUser);
        }
    
        return true; // Ensure to return true for a successful sign-in
      }
    
      return false; // Return false if something goes wrong
    }
  },    
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
