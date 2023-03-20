import connectDB from "../../../../utils/connectDB";
import Users from "../../../../models/userModel";

connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req, res) => {
    try{
        const { name, email, password, cf_password} = req.body;
       
    }catch(err){
        
    }
}