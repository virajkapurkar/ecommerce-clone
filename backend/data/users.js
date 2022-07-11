import bcrypt from "bcryptjs";
const users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "viraj",
    email: "viraj@k.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
  {
    name: "testUser",
    email: "test@user.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
];

export default users;
