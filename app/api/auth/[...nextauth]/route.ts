// import NextAuth from 'next-auth';
// import { NextResponse } from 'next/server';
// import GoogleProvider from 'next-auth/providers/google';
// import GitHubProvider from 'next-auth/providers/github';
// import Credentials from 'next-auth/providers/credentials';

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//     }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//     Credentials({
//       name: 'Credentials',
//       credentials: {
//         username: { label: '邮箱', type: 'text', placeholder: 'aa@163.com' },
//         password: { label: '密码', type: 'password' },
//       },
//       async authorize(credentials) {
//         const user = { id: 1, name: 'admin', password: 'admin' };

//         if (credentials?.username === user.name && credentials?.password === user.password) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
// });

// export { handler as GET, handler as POST };
