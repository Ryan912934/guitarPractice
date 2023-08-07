import { IconButton } from "@chakra-ui/button";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Stack,
  StackDivider,
  Flex,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { RoutineExerciseListResponseDataItem } from "../api/model";

interface ExerciseCardNoDnDProps {
  exerciseData: RoutineExerciseListResponseDataItem;
  colour: string;
  onClick: () => void;
  selected: boolean;
}

export function ExerciseCardNoDnD(props: ExerciseCardNoDnDProps) {
  return (
    <Card
      className={`m-3 ${!props.selected && "pr-5"}`}
      onClick={props.onClick}
    >
      <CardBody
        className={`${props.colour} rounded-lg shadow-lg ${
          !props.selected && "hover:cursor-pointer"
        }`}
      >
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {props.exerciseData.attributes?.exercise?.data!.attributes?.name}
            </Heading>
            <Text pt="2" fontSize="sm">
              {
                props.exerciseData.attributes?.practiceTime
              } Minutes
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
