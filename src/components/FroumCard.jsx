import React from "react";
import {
  Card,
  Image,
  CardHeader,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Tag,
  TagLabel,
  Button,
} from "@chakra-ui/react";
const FroumCard = (props) => {
//   console.log(props);
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline">
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.question.userAvatar}
        alt={props.question.username}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{props.question.questionTitle}</Heading>

          <Tag size="lg" colorScheme="red" borderRadius="full">
            <TagLabel>{props.question.language}</TagLabel>
          </Tag>
          <Tag size="lg" colorScheme="red" borderRadius="full">
            <TagLabel>{props.question.postedDate}</TagLabel>
          </Tag>
          <Tag size="lg" colorScheme="red" borderRadius="full">
            <TagLabel>{props.question.answers}</TagLabel>
          </Tag>
        </CardBody>

        <CardFooter gap={4}>
          <Button variant="solid" colorScheme="red">
            Delete
          </Button>
          <Button variant="solid" colorScheme="green">
            EDIT
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default FroumCard;
