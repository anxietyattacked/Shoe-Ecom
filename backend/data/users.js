import bcrypt from "bcryptjs"

const users = [{
    fName: "Admin",
    lName:"User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true
},
 {
    fName: "John",
    lName:"Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false
},
{
    fName: "Jane",
    lName:"Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false
},
]

export default users