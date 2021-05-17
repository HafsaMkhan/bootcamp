require('dotenv').config();

export const config =  {
    port: process.env.PORT || 5000,
    mongoUrl: process.env.MONGO_URI || "" 
}