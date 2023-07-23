import {
  Card,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  Box,
  Text,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { RoutineExerciseListResponseDataItem } from "../api/model";
import { usePostExercisePractices } from "../api/openApi/exercise-practice/exercise-practice";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTimer } from "../hooks/useTimers";

interface ExercisePracticeCardProps {
  routineExercise: RoutineExerciseListResponseDataItem;
  finishExercise: (seconds: number) => void;
}

interface IFormInput {
  comments: string;
}

export function ExercisePracticeCard(props: ExercisePracticeCardProps) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useTimer();

  const { register, handleSubmit, control } = useForm<IFormInput>();

  const toast = useToast();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    mutateAsync({
      data: {
        data: {
          notes: data.comments,
          time: totalSeconds / 60,
          exercise: props.routineExercise.attributes?.exercise?.data?.id,
        },
      },
    }).then(() => {
      toast({
        title: "Exercise Saved.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      props.finishExercise(totalSeconds);
    });
  };

  const { isLoading, mutateAsync } = usePostExercisePractices();

  return (
    <Card className="m-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="bg-gray-300 rounded-lg shadow-lg hover:cursor-pointer">
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {
                  props.routineExercise.attributes?.exercise?.data?.attributes
                    ?.name
                }
              </Heading>
              <Text pt="2" fontSize="sm">
                {
                  props.routineExercise.attributes?.exercise?.data!.attributes
                    ?.description
                }
              </Text>
              <Text>
                Practice Time: {props.routineExercise.attributes?.practiceTime}{" "}
                Minutes
              </Text>
            </Box>
            <Box>
              Practice Stopwatch {hours} hours : {minutes} minutes : {seconds}{" "}
              seconds
              <br />
              <Button
                onClick={start}
                colorScheme={!isRunning ? "green" : "gray"}
              >
                {totalSeconds === 0 ? "Start" : "Continue"}
              </Button>
              <Button onClick={pause} colorScheme={isRunning ? "red" : "gray"}>
                Pause
              </Button>
            </Box>
            <Box>
              <Textarea
                {...register("comments", { required: true })}
                placeholder="Comments"
              />
            </Box>
            <Box>
              <Button
                type="submit"
                colorScheme={
                  totalSeconds >
                  props.routineExercise.attributes?.practiceTime! * 60
                    ? "green"
                    : "gray"
                }
              >
                Finish Exercise
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </form>
    </Card>
  );
}
