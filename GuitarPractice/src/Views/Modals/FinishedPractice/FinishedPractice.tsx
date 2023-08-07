import { SubmitHandler, useForm } from "react-hook-form";
import { usePostRoutinePractices } from "../../../api/openApi/routine-practice/routine-practice";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  Text,
  Spinner,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useToast,
  Textarea,
} from "@chakra-ui/react";

interface FinishedPracticeProps {
  isOpen: boolean;
  close: () => void;
  routineId: number;
  totalTimeSeconds: number;
  completedExercises: number;
  skippedExercises: number;
  expectedTime: number;
}

interface IFormInput {
  comments: string;
}

export function FinishedPractice(props: FinishedPracticeProps) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutateAsync({
      data: {
        data: {
          routine: props.routineId,
          time: props.totalTimeSeconds / 60,
          comments: data.comments,
          numberOfExercises: props.completedExercises,
          numberOfSkippedExercises: props.skippedExercises,
          expectedTime: props.expectedTime
        },
      },
    }).then(() => {
      toast({
        title: "Practice Saved.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      props.close();
      navigate("/routines");
    });
  };

  const { isLoading, mutateAsync } = usePostRoutinePractices();
  const toast = useToast();

  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={props.isOpen}
      onClose={props.close}
    >
      {isLoading && <Spinner size="xl" />}
      {!isLoading && (
        <>
          <ModalOverlay />
          <ModalContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader>Save Practice Routine</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Textarea
                  placeholder="Comments"
                  {...register("comments", { required: true })}
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="gray" mr={3} onClick={props.close}>
                  Cancel
                </Button>
                <Button colorScheme="blue" type="submit">
                  Save
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </>
      )}
    </Modal>
  );
}
