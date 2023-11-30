import React, { useEffect, useState } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ForumPost, GETFORUMDATA } from "../redux/Forum/action";
import FroumCard from "../components/FroumCard";
const ForumPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [question, setQuestion] = useState("");
  const [questionDescripton, setQuestionDescription] = useState("");
  const [select, setSelect] = useState("");
  const { username, avatar } = useSelector((store) => store.SignUpReducer);
  const { Forum_IsLoding, Froum_IsError, data } = useSelector(
    (store) => store.ForumReducer
  );
  // console.log(data)
  const birthday = new Date();
  const date1 = birthday.getDate();
  const year = birthday.getFullYear();
  const month = birthday.getMonth();
  const usedispatch = useDispatch();
  const toast = useToast();
  const handlePost = () => {
    let obj = {
      id: Date.now(),
      question: {
        userAvatar: avatar,
        username: username,
        questionTitle: question,
        questionDescription: questionDescripton,
        language: select,
        upvotes: 0,
        answers: 1,
        postedDate: `${year}-${month}-${date1}`,
      },
      answers: [
        {
          userAvatar: avatar,
          username: username,
          answerText:
            "To sort an array in JavaScript, you can use the built-in 'sort' method...",
          postedDate: `${year}-${month}-${date1}`,
        },
      ],
    };
    console.log(obj);
    usedispatch(ForumPost(obj));
    toast({
      title: "New Data Added.",
      description: "New Data Added.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  useEffect(() => {
    usedispatch(GETFORUMDATA());
  }, [data]);
  return (
    <>
      <Button onClick={onOpen}>Ask Question</Button>
      {/* Model */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="" value={username} isDisabled={true} />
            <FormControl>
              <FormLabel>Question</FormLabel>
              <Input
                type="text"
                placeholder="Enter Question "
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Question Description</FormLabel>
              <Textarea
                placeholder="Question Description"
                value={questionDescripton}
                onChange={(e) => {
                  setQuestionDescription(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Language</FormLabel>
              <Select
                placeholder="Select option"
                value={select}
                onChange={(e) => {
                  setSelect(e.target.value);
                }}>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handlePost} variant="outline">
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* card maping */}
      {data?.map((item) => (
        <FroumCard {...item} />
      ))}
    </>
  );
};

export default ForumPage;
