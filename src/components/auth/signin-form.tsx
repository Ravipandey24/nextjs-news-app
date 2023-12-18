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
import { SignInSchema, SignInSchemaType } from "@/lib/validators/client-vals";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { useRouter } from "next/navigation";

function SignInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });
  const toast = useToast();
  const router = useRouter();

  async function onSubmit(formData: SignInSchemaType) {
    try {
      const payload = SignInSchema.parse(formData);
      const response = await signIn("credentials", {
        redirect: false,
        ...payload,
      });
      if (response?.error) {
        toast({
          title: response?.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login successfull!",
          status: "success",
          duration: 3000,
          isClosable: true,
          colorScheme: "teal",
        });
        router.push("/articles");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          colorScheme: "red.400",
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

export default SignInForm;
