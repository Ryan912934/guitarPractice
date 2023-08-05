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
import { Controller, set, SubmitHandler, useForm } from "react-hook-form";
import { usePostExercises, usePutExercisesId } from "../../../api/openApi/exercise/exercise";
import { useQueryClient } from "@tanstack/react-query";
import Select from "react-select";
import { useEffect } from "react";
import { ExerciseListResponseDataItem } from "../../../api/model";

interface AddExerciseProps {
  isOpen: boolean;
  close: () => void;
  updateId?: number;
  exerciseData?: ExerciseListResponseDataItem
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
  const { register, handleSubmit, control, reset, setValue } = useForm<IFormInput>();
  const query = useQueryClient();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (props.updateId) {
      updateExercise.mutateAsync({
        id: props.updateId,
        data: {
          data: {
            ...data,
            songStatus: {
              status: data.songStatus?.value as any,
            },


          }
        }
      }).then(() => {
        toast({
          title: "Exercise Updated",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        props.close();
        query.invalidateQueries();
      })

    } else {
      createExercise.mutateAsync({
        data: {
          data: {
            ...data,
            songStatus: {
              status: data.songStatus?.value as any,
            },
          },
        },
      }).then(() => {
        toast({
          title: "Exercise Added",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        props.close();
        query.invalidateQueries();
      });
    }
  };

  const createExercise = usePostExercises();
  const updateExercise = usePutExercisesId();
  const toast = useToast();

  useEffect(() => {
    reset();
    if (props.updateId) {
      setValue('name', props.exerciseData!.attributes?.name || '')
      setValue('description', props.exerciseData!.attributes?.description || '')
      setValue('songStatus.value', props.exerciseData!.attributes?.songStatus?.status || '')
    }
  }, [props.isOpen])

  const isLoading = createExercise.isLoading || updateExercise.isLoading;

  return (
    <Modal
      size="xl"
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
                      placeholder="Show Songs?"
                      isClearable={true}
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
