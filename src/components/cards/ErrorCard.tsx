import { Card, CardBody, Text } from "@chakra-ui/react";

const ErrorCard = ({}) => {
  return (
    <Card color="red.500" backgroundColor='red.100'>
      <CardBody>
        <Text fontWeight='600'>Something Went Wrong with API!!</Text>
      </CardBody>
    </Card>
  );
};

export default ErrorCard;
