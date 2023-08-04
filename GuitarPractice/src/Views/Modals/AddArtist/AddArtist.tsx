import {
  As,
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
  Text,
  useToast,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostArtists } from "../../../api/openApi/artist/artist";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

interface AddArtistProps {
  isOpen: boolean;
  close: () => void;
}

interface IFormInput {
  name: string;
}

export function AddArtist(props: AddArtistProps) {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
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
      query.invalidateQueries();
      props.close();
      reset();
    });
  };

  useEffect(() => {
    reset();
  }, [props.isOpen])

  const { isLoading, mutateAsync } = usePostArtists();
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
              <ModalHeader>Add Artist</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  placeholder="Artist"
                  {...register("name", { required: true })}
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
