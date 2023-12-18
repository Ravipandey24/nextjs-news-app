import { Card, CardBody, CardFooter, Skeleton, Stack } from "@chakra-ui/react";

const ArticleSkeleton = ({}) => {
  return (
    <Card maxW="lg">
      <CardBody>
        <Skeleton borderRadius="lg" height="200px" />
        <Stack mt="6" spacing="3">
          <Skeleton height='10px'></Skeleton>
          <Skeleton height='10px'></Skeleton>
          <Skeleton height='10px' mt='3'></Skeleton>
          <Skeleton height='10px'></Skeleton>
          <Skeleton height='10px'></Skeleton>
          <Skeleton height='10px'></Skeleton>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ArticleSkeleton;
