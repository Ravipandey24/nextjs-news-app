import SignInForm from "@/components/auth/signin-form";
import { headingFont } from "@/config/layout";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import Link from "next/link";

const page = ({}) => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Card size='md' className="w-96">
        <CardHeader className="flex justify-center py-1">
          <h2 className={headingFont.className + " text-2xl font-semibold"}>
            NewsApp
          </h2>
        </CardHeader>
        <CardBody>
          <SignInForm></SignInForm>
        </CardBody>
        <CardFooter className="flex justify-end">
          <span>don't have an account? <Link href='/signup' className="hover:underline text-teal-500">signup</Link></span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
