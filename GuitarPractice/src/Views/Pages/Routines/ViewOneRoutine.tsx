import { useParams } from "react-router-dom";
import { useGetRoutinesId } from "../../../api/openApi/routine/routine";
import {
  Button,
  Heading,
  IconButton,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useGetRoutineExercises } from "../../../api/openApi/routine-exercise/routine-exercise";
import { ExerciseCard } from "../../../components/ExerciseCard";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { AddRoutineExercise } from "../../Modals/AddRoutineExercise/AddRoutineExercise";
import { useState } from "react";
import { EditRoutineExercise } from "../../Modals/AddRoutineExercise/EditRoutineExercise";

export function ViewOneRoutine() {
  const id = parseInt(useParams().id!);
  const [editId, setEditId] = useState<number>();

  const { data, isLoading } = useGetRoutinesId(id);

  const exerciseData = useGetRoutineExercises({
    filters: {
      routine: id,
    },
    populate: "exercise",
    "pagination[pageSize]": 1000,
  });

  const addExerciseDisclosure = useDisclosure();
  const editExerciseDisclosure = useDisclosure();

  if (isLoading || exerciseData.isLoading) {
    return <Spinner scale="xl" />;
  }

  exerciseData.data!.data.data!.sort(
    (a, b) => a.attributes?.order! - b.attributes?.order!
  );

  const clickEdit = (id: number) => {
    setEditId(id);
    editExerciseDisclosure.onOpen();
  };

  return (
    <>
      <div>
        <Heading>Routine - {data?.data.data?.attributes?.name}</Heading>
        <Text fontSize="lg">{data?.data.data?.attributes?.description}</Text>
        <div className="w-8/12">
          {exerciseData.data?.data.data?.map((e) => (
            <ExerciseCard
              key={e.id}
              id={e.attributes?.exercise?.data?.id!}
              routineExerciseId={e.id!}
              exerciseTime={e.attributes?.practiceTime!}
              openEdit={() => {
                clickEdit(e.id!);
              }}
            />
          ))}
        </div>

        <IconButton
          colorScheme="green"
          onClick={addExerciseDisclosure.onOpen}
          aria-label="Add Exercise"
          icon={<AddIcon />}
        />
      </div>
      <AddRoutineExercise
        close={addExerciseDisclosure.onClose}
        isOpen={addExerciseDisclosure.isOpen}
        routineId={id}
        order={exerciseData.data?.data.data?.length}
      />
      <EditRoutineExercise
        close={editExerciseDisclosure.onClose}
        isOpen={editExerciseDisclosure.isOpen}
        routineExerciseId={editId!}
      />
    </>
  );
}
