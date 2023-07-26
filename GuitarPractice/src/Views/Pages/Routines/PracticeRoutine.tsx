import { useParams } from "react-router-dom";
import { useGetRoutinesId } from "../../../api/openApi/routine/routine";
import { useGetRoutineExercises } from "../../../api/openApi/routine-exercise/routine-exercise";
import {
  Button,
  Card,
  CardBody,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { ExerciseCardNoDnD } from "../../../components/ExerciseCardNoDnD";
import { useState } from "react";
import { ExercisePracticeCard } from "../../../components/ExercisePracticeCard";
import { FinishedPractice } from "../../Modals/FinishedPractice/FinishedPractice";
import { ExercisesComments } from "../../../components/ExerciseComments";
import { RoutineComments } from "../../../components/RoutineComments";
import { ListOfSongs } from "../../../components/ListOfSongs";

interface Status {
  id: number;
  complete: boolean;
}

export function PracticeRoutine() {
  const id = parseInt(useParams().id!);

  const [statusList, setStatusList] = useState<Status[]>([]);
  const [curRoutineExerciseId, setCurRoutineExerciseId] = useState<number>();

  const [totalPracticeTime, setTotalPracticeTime] = useState(0);

  const routine = useGetRoutinesId(id);
  const routineExercises = useGetRoutineExercises({
    filters: {
      routine: id,
    },
    populate: "exercise,exercise.songStatus",
  });

  const finishedPracticeDisclosure = useDisclosure();

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
    console.log("not fin");
    console.log(notFinished);
    if (notFinished.length === 0) {
      finishedPracticeDisclosure.onOpen();
    } else {
      setCurRoutineExerciseId(notFinished[0].id);
    }
  };

  return (
    <>
      <div>
        <Card>
          <CardBody>
            <Button
              colorScheme="red"
              onClick={finishedPracticeDisclosure.onOpen}
            >
              Finish Practice Early
            </Button>
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
      />
    </>
  );
}
