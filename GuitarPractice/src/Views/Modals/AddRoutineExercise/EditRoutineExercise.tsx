import { useQueryClient } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { usePutRoutineExercisesId } from "../../../api/openApi/routine-exercise/routine-exercise";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Spinner,
  useToast,
} from "@chakra-ui/react";

interface EditRoutineExerciseProps {
  isOpen: boolean;
  close: () => void;
  routineExerciseId: number;
}

interface IFormInput {
  practiceTime: number;
}

export function EditRoutineExercise(props: EditRoutineExerciseProps) {
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const query = useQueryClient();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    mutateAsync({
      id: props.routineExerciseId,
      data: {
        data: {
          practiceTime: data.practiceTime,
        },
      },
    }).then(() => {
      toast({
        title: "Practice Time Edited.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      props.close();
      query.invalidateQueries();
    });
  };

  const { isLoading, mutateAsync } = usePutRoutineExercisesId();
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
              <ModalHeader>Add Song</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Controller
                  name="practiceTime"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <NumberInput
                      placeholder="Practice Time (Minutes)"
                      value={value}
                      onChange={onChange}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  )}
                  rules={{ required: true }}
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
