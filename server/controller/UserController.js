import UserModel from "../models/UserModel.js";

const Createuser = async (req, res) => {
  try {
    const { name, fathername, email, phone } = req.body;

    const NewUser = UserModel({
      name,
      fathername,
      email,
      phone,
    });

    await NewUser.save();
    res
      .status(200)
      .json({ success: true, message: "User Created Successfully ", NewUser });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Error", NewUser });
  }
};

const GetUser = async (req, res) => {
  try {
    const user = await UserModel.find();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Search User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error", User });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id)
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Search User not found" });
    }
    res.status(200).json({ success: true, message: "User Successfully Found",user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error", user });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    res
      .status(200)
      .json({ success: true, message: "User Updated Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUser = await UserModel.findByIdAndDelete(userId);
    if (!deleteUser) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    res
      .status(200)
      .json({ success: true, message: "User Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const DeleteAllUser = async (req, res) => {
  try {
    const deleteUser = await UserModel.deleteMany();
    if (!deleteUser) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    res
      .status(200)
      .json({ success: true, message: "All User Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { Createuser, GetUser, DeleteUser, UpdateUser, getSingleUser, DeleteAllUser };
