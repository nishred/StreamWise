import { z } from "zod";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import ReactDOM from "react-dom";

import styled from "styled-components";

const StyledInput = styled.input`
  padding: 16px 16px;
  background-color: rgba(71, 85, 105, 0.8);
  color: white;
`;

const FormError = styled.div`
  color: black;
`;

const formSchema = z
  .object({
    identifier: z.union([
      z
        .string()
        .regex(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email"
        )
        .nonempty("Field can't be empty"),
      z
        .string()
        .regex(/^[0-9]{10}$/, "Invalid phone number")
        .nonempty("Field can't be empty"),
    ]),

    password: z.string().nonempty("Password cannot be empty"),
  })
  .strict();

const LoginForm = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(formSchema),
  });

  const { errors } = formState;
  console.log("errors", errors);

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute top-20 flex flex-col gap-4 p-16 bg-black bg-opacity-75
 w-1/3"
    >
      <h1 className="text-3xl text-white font-bold mb-3">Sign In</h1>

      {Object.keys(errors).length > 0 && (
        <div className="bg-yellow-600 p-4">
          {errors.identifier && (
            <FormError>{errors.identifier.message}</FormError>
          )}
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </div>
      )}

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

      <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
