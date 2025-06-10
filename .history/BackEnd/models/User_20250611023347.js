import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  idUser: {type: String, required: true, unique: true}, // unique để tránh trùng
  Ten: {type: String, required: true}, // tên người dùng
  email: {type: String, required: true},
  image: {type: String, required: true},
  role: {type: String, enum: ["Admin", "User"], default: "User"},
  recentSearchedRoomType: [{type: String, require: }],
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;