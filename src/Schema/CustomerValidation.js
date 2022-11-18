import * as Yup from "yup";

export const signUpSchema =  Yup.object({
    Name: Yup.string().min(2).max(25).required("Please enter your name"),
    // CustomerType: Yup.array.required("required"),
    // AddressCheckbox: Yup.array.required("required")
    // EmailAddress: yup.string.email().required("Please enter your email address"),
    // Contact: yup.number.min(11).max(20).required("Please enter your contact")
});