import {
  CardBody,
  Stack,
  StackDivider,
  Heading,
  Box,
  Text,
  Card,
  Flex,
  IconButton,
  Spacer,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useGetExercisesId } from "../api/openApi/exercise/exercise";
import { useDeleteRoutineExercisesId } from "../api/openApi/routine-exercise/routine-exercise";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useQueryClient } from "@tanstack/react-query";

interface ExerciseCardProps {
  id: number;
  routineExerciseId: number;
  exerciseTime: number;
  openEdit: () => void;
}

export function ExerciseCard(props: ExerciseCardProps) {
  const query = useQueryClient();
  const { data, isLoading } = useGetExercisesId(props.id, {
    axios: {
      params: {
        "populate[0]": "exercise",
      },
    },
  });

  const deleteRoutineExercise = useDeleteRoutineExercisesId();
  const toast = useToast();

  const clickDelete = () => {
    deleteRoutineExercise
      .mutateAsync({
        id: props.routineExerciseId,
      })
      .then(() => {
        query.invalidateQueries();
        toast({
          title: "Exercise Removed.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  if (isLoading || deleteRoutineExercise.isLoading) {
    return (
      <div>
        <Spinner scale="xl" />
      </div>
    );
  }

  return (
    <Card colorScheme="blue" className="m-3">
      <CardBody className="bg-blue-200 rounded-lg shadow-lg">
        <Stack divider={<StackDivider />} spacing="4">
          <Flex>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {data?.data.data?.attributes?.name}
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.data.data?.attributes?.description}
              </Text>
              <Text>Practice Time: {props.exerciseTime} Minutes</Text>
            </Box>
            <Spacer />
            <IconButton
              colorScheme="yellow"
              onClick={props.openEdit}
              aria-label="Edit Exercise"
              icon={<EditIcon />}
            />
            <IconButton
              colorScheme="red"
              aria-label="Delete row "
              icon={<DeleteIcon />}
              onClick={clickDelete}
            />
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}
