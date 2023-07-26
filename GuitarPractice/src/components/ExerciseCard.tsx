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
import { FC, useRef } from "react";
import { XYCoord, useDrag, useDrop } from "react-dnd";
import { Identifier } from "dnd-core";

export const ItemTypes = {
  CARD: "card",
};

interface ExerciseCardProps {
  exerciseId: number;
  routineExerciseId: number;
  exerciseTime: number;
  openEdit: () => void;
  id: any;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

// export function ExerciseCard(props: ExerciseCardProps): FC<ExerciseCardProps> {
export const ExerciseCard: FC<ExerciseCardProps> = (
  props: ExerciseCardProps
) => {
  const query = useQueryClient();
  const { data, isLoading } = useGetExercisesId(props.exerciseId, {
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

  //dnd stuff
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      props.moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id: props.id, index: props.index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  //end

  return (
    <div
      ref={ref}
      className="hover:cursor-move"
      style={{ opacity }}
      data-handler-id={handlerId}
    >
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
    </div>
  );
};
