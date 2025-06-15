import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/app/lib/prisma"
import { Adapter } from "next-auth/adapters"

const handler = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers:[
    GoogleProvider({
        profile(profile){
            return {
                id: profile.sub,               
                name: profile.name,
                email: profile.email,
                image: profile.picture,
                role: profile.role ?? "user"
            }
        },
        clientId:process.env.GOOGLE_CLIENT_ID as string,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  session:{
    strategy:'jwt'
  },
  callbacks:{
    async jwt({token,user}){
        if(user){
            token.role=user.role
        }
        return token
    },
    async session({session,token}){
        if(session.user){
            session.user.role=token.role as string
        }
        return session
    }
  }
})

export { handler as GET, handler as POST }