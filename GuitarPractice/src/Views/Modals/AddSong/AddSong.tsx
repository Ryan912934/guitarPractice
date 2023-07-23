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
  useToast,
} from "@chakra-ui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { usePostSongs } from "../../../api/openApi/song/song";
import { useGetArtists } from "../../../api/openApi/artist/artist";
import Select from "react-select";
import { useQueryClient } from "@tanstack/react-query";

interface AddArtistProps {
  isOpen: boolean;
  close: () => void;
}

interface IFormInput {
  name: string;
  artist: {
    label: string;
    value: number;
  };
}

export function AddSong(props: AddArtistProps) {
  const { register, handleSubmit, control } = useForm<IFormInput>();
  const query = useQueryClient();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutateAsync({
      data: {
        data: {
          title: data.name,
          artist: data.artist.value,
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

  const { isLoading, mutateAsync } = usePostSongs();
  const toast = useToast();

  const { data, isFetching } = useGetArtists();

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
                <Input
                  placeholder="Song "
                  {...register("name", { required: true })}
                />

                <Controller
                  name="artist"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      options={data?.data.data!.map(
                        (i) =>
                          ({
                            label: i.attributes?.name,
                            value: i.id,
                          } as any)
                      )}
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
