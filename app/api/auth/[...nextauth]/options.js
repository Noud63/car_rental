import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import User from "../../../../models/usersModel";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        /*console.log("Google profile", profile);*/

        let userRole = "Google User";

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),

    GithubProvider({
      profile(profile) {
        /*console.log("Profile of Github:", profile);*/

        let userRole = "Github User";
        if (profile?.email == "noudvandun@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email:", type: "text", placeholder: "email" },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          const userExists = await User.findOne({ email: credentials.email });

            if (userExists) {
              console.log("User exists!");

              const match = await bcrypt.compare(
                credentials.password,
                userExists.password
              );

              if (match) {
                console.log("You are logged in!");

                delete userExists.password;

                if (userExists.email === "noudvandun@gmail.com") {
                  userExists["role"] = "admin";
                } else {
                  userExists["role"] = "user";
                }

                return userExists;
              }
            }

        } catch (error) {
          console.log(error);
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      // now we can use the role property server side
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
