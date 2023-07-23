import { useParams } from "react-router-dom";
import { useGetRoutinesId } from "../../../api/openApi/routine/routine";
import {
  Button,
  Heading,
  IconButton,
  Spinner,
  Text,
  VisuallyHidden,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  useGetRoutineExercises,
  usePutRoutineExercisesId,
} from "../../../api/openApi/routine-exercise/routine-exercise";
import { ExerciseCard } from "../../../components/ExerciseCard";
import { AddIcon } from "@chakra-ui/icons";
import { AddRoutineExercise } from "../../Modals/AddRoutineExercise/AddRoutineExercise";
import { useCallback, useEffect, useState } from "react";
import { EditRoutineExercise } from "../../Modals/AddRoutineExercise/EditRoutineExercise";
import { RoutineExerciseListResponseDataItem } from "../../../api/model";
import { useQueryClient } from "@tanstack/react-query";

interface Order {
  new: number;
  old: number;
}

export function ViewOneRoutine() {
  const id = parseInt(useParams().id!);
  const [editId, setEditId] = useState<number>();

  const { data, isLoading } = useGetRoutinesId(id);

  const [orderChange, setOrderChange] = useState<Order[]>([]);

  const exerciseData = useGetRoutineExercises({
    filters: {
      routine: id,
    },
    populate: "exercise",
    "pagination[pageSize]": 1000,
  });

  const updateOrder = usePutRoutineExercisesId();

  const addExerciseDisclosure = useDisclosure();
  const editExerciseDisclosure = useDisclosure();

  const toast = useToast();
  const query = useQueryClient();

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setOrderChange((arr) => [...arr, { old: dragIndex, new: hoverIndex }]);
  }, []);

  const renderCard = useCallback(
    (data: RoutineExerciseListResponseDataItem, index: number) => {
      return (
        <ExerciseCard
          key={data.id}
          exerciseId={data.attributes?.exercise?.data?.id!}
          routineExerciseId={data.id!}
          exerciseTime={data.attributes?.practiceTime!}
          openEdit={() => {
            clickEdit(data.id!);
          }}
          id={data.id}
          index={index}
          moveCard={moveCard}
        />
      );
    },
    []
  );

  if (isLoading || exerciseData.isLoading || updateOrder.isLoading) {
    return <Spinner scale="xl" />;
  }

  exerciseData.data!.data.data!.sort(
    (a, b) => a.attributes?.order! - b.attributes?.order!
  );

  const clickEdit = (id: number) => {
    setEditId(id);
    editExerciseDisclosure.onOpen();
  };

  if (isLoading || exerciseData.isLoading) {
    return <Spinner size="xl" />;
  }

  let orderedExerciseData = [...exerciseData.data?.data.data!];
  for (const o of orderChange) {
    const removed = orderedExerciseData.splice(o.old, 1)[0];
    orderedExerciseData = [
      ...orderedExerciseData.slice(0, o.new),
      removed,
      ...orderedExerciseData.slice(o.new),
    ];
  }

  const clickSave = () => {
    for (const [idx, d] of orderedExerciseData.entries()) {
      if (idx + 1 !== d.attributes?.order) {
        updateOrder.mutate({
          id: d.id!,
          data: {
            data: {
              order: idx + 1,
            },
          },
        });
      }
    }
    toast({
      title: "Updated Exercise Order",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    query.invalidateQueries();
  };

  return (
    <>
      <div>
        <Heading>Routine - {data?.data.data?.attributes?.name}</Heading>
        <Text fontSize="lg">{data?.data.data?.attributes?.description}</Text>
        <Text>Number of exercises {exerciseData.data?.data.data?.length}</Text>
        <Button
          colorScheme="green"
          onClick={clickSave}
          aria-label="Save Exercise"
        >
          Save Exercise Changes
        </Button>
        <div className="w-8/12">
          {orderedExerciseData.map((re, i) => renderCard(re, i))}
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
