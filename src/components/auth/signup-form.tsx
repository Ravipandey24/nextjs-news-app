"use client";

import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { SignUpSchema, SignUpSchemaType } from "@/lib/validators/client-vals";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerNewUser } from "@/lib/api/auth";
import { z } from "zod";

function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const toast = useToast();

  async function onSubmit(formData: SignUpSchemaType) {
    try {
      const validatedData = SignUpSchema.parse(formData);
      const res = await registerNewUser(validatedData);
      if (res.success) {
        toast({
          title: "Account created!",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
          colorScheme: "teal",
        });
        reset({
          username: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast({
          title: res.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <FormControl isInvalid={!!errors.username}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          placeholder="username"
          {...register("username")}
          focusBorderColor="teal.400"
        />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="password"
          {...register("password")}
          focusBorderColor="teal.400"
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.confirmPassword}>
        <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
        <Input
          id="confirm-password"
          type="password"
          placeholder="confirm password"
          {...register("confirmPassword")}
          focusBorderColor="teal.400"
        />
        <FormErrorMessage>
          {errors.confirmPassword && errors.confirmPassword.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        className="w-full"
        colorScheme="teal"
        isLoading={isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default SignUpForm;
