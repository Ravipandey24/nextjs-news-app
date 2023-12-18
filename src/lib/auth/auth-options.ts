import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SignInSchema } from "../validators/client-vals";
import { getUserData } from "../api/auth";


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "username", type: "username", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        const { username, password } = SignInSchema.parse(credentials);
        const profile = await getUserData(username);
        if (profile) {
          const isPasswordCorrect = profile.password === password
          if (isPasswordCorrect) {
            return profile 
          }
          throw new Error('incorrect password!');
        }
        throw new Error("user doesn't exists!");
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session({ session, token }) {
      session.user.username = token.username;
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      if(user){
        //@ts-ignore
        token.username = user.username
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
};
