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
  Spinner,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { usePostExercises } from "../../../api/openApi/exercise/exercise";
import { useQueryClient } from "@tanstack/react-query";
import Select from "react-select";

interface AddExerciseProps {
  isOpen: boolean;
  close: () => void;
}

interface IFormInput {
  name: string;
  description: string;
  songStatus: {
    label: string;
    value: string;
  };
}

export function AddExercise(props: AddExerciseProps) {
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const query = useQueryClient();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(
      JSON.stringify({
        data: {
          data: {
            ...data,
            songStatus: {
              status: data.songStatus as any,
            },
          },
        },
      })
    );
    mutateAsync({
      data: {
        data: {
          ...data,
          songStatus: {
            status: data.songStatus.value as any,
          },
        },
      },
    }).then(() => {
      toast({
        title: "Artist Added.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      props.close();
      query.invalidateQueries();
    });
  };

  const { isLoading, mutateAsync } = usePostExercises();
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
              <ModalHeader>Add Exercise</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <Controller
                  name="description"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Textarea
                      placeholder="Description"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                  rules={{ required: true }}
                />

                <Controller
                  name="songStatus"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      options={
                        [
                          {
                            label: "To Learn",
                            value: "TO-LEARN",
                          },
                          {
                            label: "Learning",
                            value: "LEARNING",
                          },
                          {
                            label: "Practising",
                            value: "PRACTISING",
                          },
                          {
                            label: "Forgot",
                            value: "FORGOT",
                          },
                        ] as any
                      }
                      value={value as any}
                      onChange={onChange}
                    />
                  )}
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
