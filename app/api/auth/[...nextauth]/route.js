import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { compare } from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {
                await connectDB();

                const user = await User.findOne({ username: credentials.username });
                if(!user) throw new Error("No user found");

                const isValid = await compare(credentials.password, user.password);
                if(!isValid) throw new Error("Invalid username or password");

                return {
                    id: user._id,
                    name: user.username,
                    role: user.role
                };
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user}) {
            if(user) token.role = user.role;
            return token;
        }, 
        async session({ session, token }) {
            session.user.role = token.role;
            return session;
        }
    },
    pages: {
        signIn: "/login"
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};