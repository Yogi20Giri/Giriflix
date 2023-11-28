"use server"
import React from 'react'
import dbCon from "@/lib/dbCon";
import Contact from "@/models/contact";

export const submitContact = async (data) => {
    try {
        await dbCon();
        await Contact.create(data);
        return { status: 200, message: "Message sent successfully!", };

    }
    catch (error) {
        return {
            status: "ERROR",
            message: "Server error, Please try again letter."
        };
    }

};
