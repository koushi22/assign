import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // you can add callbacks etc here
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
