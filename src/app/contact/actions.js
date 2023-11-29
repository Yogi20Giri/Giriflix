"use server";
import dbCon from "@/lib/dbCon";
import Contact from "@/models/contact";

export const submitContact = async (data) => {
  try {
    await dbCon();
    await Contact.create(data);
    return { status: 200, message: "Message sent successfully!" };
  } catch (error) {
    return {
      status: 500,
      message: "Server error, Please try again letter.",
    };
  }
};
