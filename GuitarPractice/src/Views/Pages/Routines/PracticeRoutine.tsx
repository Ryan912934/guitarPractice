import { useParams } from "react-router-dom";
import { useGetRoutinesId } from "../../../api/openApi/routine/routine";
import { useGetRoutineExercises } from "../../../api/openApi/routine-exercise/routine-exercise";
import {
  Button,
  Card,
  Text,
  CardBody,
  Spinner,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { ExerciseCardNoDnD } from "../../../components/ExerciseCardNoDnD";
import { useEffect, useState } from "react";
import { ExercisePracticeCard } from "../../../components/ExercisePracticeCard";
import { FinishedPractice } from "../../Modals/FinishedPractice/FinishedPractice";
import { ExercisesComments } from "../../../components/ExerciseComments";
import { RoutineComments } from "../../../components/RoutineComments";
import { ListOfSongs } from "../../../components/ListOfSongs";
import { useTimer } from "../../../hooks/useTimers";

interface Status {
  id: number;
  complete: boolean;
}

export function PracticeRoutine() {
  const id = parseInt(useParams().id!);

  const [statusList, setStatusList] = useState<Status[]>([]);
  const [curRoutineExerciseId, setCurRoutineExerciseId] = useState<number>();

  const [totalPracticeTime, setTotalPracticeTime] = useState(0);
  const timer = useTimer()
  const routine = useGetRoutinesId(id);
  const routineExercises = useGetRoutineExercises({
    filters: {
      routine: id,
    },
    populate: "exercise,exercise.songStatus",
  });

  const finishedPracticeDisclosure = useDisclosure();

  useEffect(() => {
    timer.reset();
    timer.start();
  }, [curRoutineExerciseId])

  if (routine.isFetching || routineExercises.isFetching) {
    return <Spinner size="xl" />;
  }

  routineExercises.data!.data.data!.sort(
    (a, b) => a.attributes?.order! - b.attributes?.order!
  );

  const currentExerciseStatus = () => {
    if (!curRoutineExerciseId) {
      return;
    }
    return routineExercises.data?.data.data!.filter(
      (i) => i.id === curRoutineExerciseId
    )[0].attributes?.exercise?.data?.attributes?.songStatus?.status;
  };

  const routineExerciseComplete = (id: number) => {
    return statusList.filter((s) => s.id === id)?.[0]?.complete;
  };

  if (!curRoutineExerciseId) {
    setCurRoutineExerciseId(routineExercises.data!.data.data![0].id);
  }

  const finishExercise = (seconds: number) => {
    setTotalPracticeTime((p) => p + seconds);

    setStatusList((prev) => [
      ...prev,
      {
        id: curRoutineExerciseId!,
        complete: true,
      },
    ]);

    const notFinished = routineExercises.data!.data.data!.filter(
      (i) => !routineExerciseComplete(i.id!) && i.id !== curRoutineExerciseId
    );
    console.log(notFinished);
    if (notFinished.length === 0) {
      finishedPracticeDisclosure.onOpen();
    } else {
      setCurRoutineExerciseId(notFinished[0].id);
    }
  };

  const pastTime = () => {

    const d = routineExercises.data?.data.data!.filter(
      (d) => d.id === curRoutineExerciseId
    )[0]

    if (!d) return false;

    return timer.totalSeconds > (d.attributes!.practiceTime! * 60)

  }

  return (
    <>
      <div>
        <Card>
          <CardBody>
            <Flex>
              <Text>
              Total Current Practice Time {((totalPracticeTime/60) + (timer.seconds/60)).toFixed(2) }
              </Text>
            </Flex>
            <Flex>
              {timer.isRunning ? <Text fontSize='4xl' as='i'> Timer Running </Text> : <Text fontSize='4xl' as='b' color='red'> Timer Paused </Text>}
              {pastTime() && <Text fontSize='4xl' as='i'> - Past Suggested Time </Text>}
            </Flex>
            <Flex>
              <Button
                colorScheme="red"
                onClick={finishedPracticeDisclosure.onOpen}
              >
                Finish Practice Early
              </Button>
            </Flex>
          </CardBody>
        </Card>
        <div className="flex">
          <div className="w-[20%]">
            {routineExercises.data?.data.data?.map((re) => (
              <ExerciseCardNoDnD
                selected={re.id === curRoutineExerciseId}
                key={re.id}
                colour={
                  routineExerciseComplete(re.id!)
                    ? "bg-green-200"
                    : re.id! === curRoutineExerciseId
                      ? "bg-yellow-300"
                      : "bg-yellow-200"
                }
                exerciseData={re}
                onClick={() => {
                  setCurRoutineExerciseId(re.id);
                }}
              />
            ))}
          </div>
          <div className="grid col-span-2 grid-cols-2 w-[70%]">
            <div>
              {curRoutineExerciseId &&
                !routineExerciseComplete(curRoutineExerciseId) && (
                  <ExercisePracticeCard
                    timer={timer}
                    routineExercise={
                      routineExercises.data?.data.data!.filter(
                        (d) => d.id === curRoutineExerciseId
                      )[0]!
                    }
                    finishExercise={finishExercise}
                  />
                )}
            </div>

            {currentExerciseStatus() && (
              <ListOfSongs status={currentExerciseStatus()!} />
            )}

            {curRoutineExerciseId && (
              <>
                <ExercisesComments
                  exerciseId={
                    routineExercises.data?.data.data!.filter(
                      (d) => d.id === curRoutineExerciseId
                    )[0]!.attributes?.exercise?.data?.id!
                  }
                />
                <RoutineComments routineId={id} />
              </>
            )}
          </div>
        </div>
      </div>
      <FinishedPractice
        isOpen={finishedPracticeDisclosure.isOpen}
        close={finishedPracticeDisclosure.onClose}
        routineId={id}
        totalTimeSeconds={totalPracticeTime}
        completedExercises={statusList.filter((i) => i.complete).length}
        skippedExercises={
          routineExercises.data!.data.data!.length -
          statusList.filter((i) => i.complete).length
        }
        expectedTime={routineExercises.data!.data.data!.reduce((acc, cur) => {
          return acc + (cur.attributes?.practiceTime || 0)
        }, 0)}
      />
    </>
  );
}
