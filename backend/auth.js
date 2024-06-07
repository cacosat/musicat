import NextAuth from 'next-auth';
import Google from "next-auth/providers/google"

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // authorization: {
            //     params: {
            //         prompt: "consent",
            //         access_type: "offline",
            //         response_type: "code"
            //     }
            // }
        }),
        // For normal credentials: username and password: 
        // Credentials({
        //     // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        //     // e.g. domain, username, password, 2FA token, etc.
        //     credentials: {
        //       email: {},
        //       password: {},
        //     },
        //     authorize: async (credentials) => {
        //       let user = null
       
        //       // logic to salt and hash password
        //       const pwHash = saltAndHashPassword(credentials.password)
       
        //       // logic to verify if user exists
        //       user = await getUserFromDb(credentials.email, pwHash)
       
        //       if (!user) {
        //         // No user found, so this is their first attempt to login
        //         // meaning this is also the place you could do registration
        //         throw new Error("User not found.")
        //       }
       
        //       // return user object with the their profile data
        //       return user
        //     },
        // }),
    ],
    callbacks: {
        async signIn(user, account, profile) {
            return true;
        },
        async redirect(url, baseUrl) {
            return baseUrl;
        }
    },
    secret: process.env.SECRET,
})