import { useQueryClient } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { usePostRoutineExercises } from "../../../api/openApi/routine-exercise/routine-exercise";
import {
  Button,
  Input,
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
  Spinner,
  useToast,
} from "@chakra-ui/react";
import Select from "react-select";
import { useGetExercises } from "../../../api/openApi/exercise/exercise";

interface AddRoutineExerciseProps {
  isOpen: boolean;
  close: () => void;
  routineId: number;
  order?: number;
}

interface IFormInput {
  practiceTime: number;
  exercise: number;
}
export function AddRoutineExercise(props: AddRoutineExerciseProps) {
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const query = useQueryClient();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    mutateAsync({
      data: {
        data: {
          practiceTime: data.practiceTime,
          exercise: data.exercise.value,
          routine: props.routineId,
          order: props.order! + 1,
        },
      },
    }).then(() => {
      toast({
        title: "Song Added.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      props.close();
      query.invalidateQueries();
    });
  };

  const { isLoading, mutateAsync } = usePostRoutineExercises();
  const toast = useToast();

  const { data, isFetching } = useGetExercises();

  if (isFetching) {
    return <Spinner />;
  }

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
                  name="exercise"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      options={data?.data.data!.map((i) => ({
                        label: i.attributes?.name,
                        value: i.id,
                      }))}
                      value={value}
                      onChange={onChange}
                    />
                  )}
                  rules={{ required: true }}
                />
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
