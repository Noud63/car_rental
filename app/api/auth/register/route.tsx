import User from "@/models/usersModel";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import bcrypt from "bcrypt"


export const POST = async (req: NextRequest, res: NextResponse) => {

    const { fullName, userName, address, city, phone, email, password, isAdmin } = await req.json()

    await dbConnect()

    const existingUser = await User.findOne({email})

    if(existingUser) {
        return NextResponse.json({message:"User already exists"}, {status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await User.create({
    fullName,
    userName,
    address,
    city,
    phone,
    email,
    password: hashedPassword,
    isAdmin
  });

  if(newUser) {
    const user = {
      fullName,
      userName,
      address,
      city,
      phone,
      email,
      isAdmin,
    };
    return NextResponse.json(user, { status: 200 });
  }

try {
  return NextResponse.json("User created", {status: 200});
} catch (error: any) {
  return NextResponse.json(error, { status: 500 });
}
}