import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import NextAuth from "next-auth/next";
import handleUserCreation from "@/controllers/Credentials_controller";
import handleGoogleUser from "@/controllers/GoogleUser_controller";
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

          // Hash the password before saving it
          const hashedPassword = await bcrypt.hash(password, 10);

          // Create and save the new User
          handleUserCreation({ email, password: hashedPassword });
          
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
        token.id = user._id;
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
      try {
        if (profile && profile.email && profile.name) {
          await handleGoogleUser(profile);
          return true; // Successful sign-in
        }
        console.error("Invalid profile data:", profile);
        return false; // Return false if profile is undefined
      } catch (error) {
        console.error("Error in signIn:", error);
        return false; // Return false if an error occurs
      }
    }
  },    
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
