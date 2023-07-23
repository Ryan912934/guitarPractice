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
import { useQueryClient } from "@tanstack/react-query";
import { usePostRoutines } from "../../../api/openApi/routine/routine";

interface AddRoutineProps {
  isOpen: boolean;
  close: () => void;
}

interface IFormInput {
  name: string;
  description: string;
}

export function AddRoutine(props: AddRoutineProps) {
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const query = useQueryClient();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutateAsync({
      data: {
        data: data,
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

  const { isLoading, mutateAsync } = usePostRoutines();
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
