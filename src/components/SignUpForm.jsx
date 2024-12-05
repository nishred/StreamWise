import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Link } from "react-router-dom";

import { StyledInput, FormError } from "./StyledFormComponents";

const signUpLabels = ["name", "email", "password", "age"];

const signUpSchema = z
  .object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email().nonempty("Email is required"),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
        "Password doesn't meet the criteria"
      )
      .nonempty("Password is required"),

    age: z.number(),
  })
  .strict();

const SignUpForm = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute top-20 flex flex-col gap-4 p-16 bg-black bg-opacity-75
 w-1/3"
    >
      <h1 className="text-3xl text-white font-bold mb-3">{"Sign Up"}</h1>

      {Object.keys(errors).length > 0 && (
        <div className="bg-yellow-600 p-4">
          {signUpLabels.map((label, idx) => {
            return errors[label] ? (
              <FormError>{errors[label].message}</FormError>
            ) : null;
          })}
        </div>
      )}

      <StyledInput type="text" {...register("name")} placeholder="Name" />

      <StyledInput
        type="text"
        placeholder="Email or mobile number"
        {...register("identifier")}
      />

      <StyledInput
        type="password"
        placeholder="password"
        {...register("password")}
      />

      <StyledInput
        type="number"
        {...register("age", { isValidNumber: true })}
        placeholder="Age"
      />

      <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md">
        {"Sign Up"}
      </button>

      <span className="text-slate-300">
        {"Already a User?"}{" "}
        <Link
          to={"login"}
          className="cursor-pointer hover:underline text-white"
        >
          {"Sign In Now"}
        </Link>
      </span>
    </form>
  );
};

export default SignUpForm;