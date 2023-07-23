import { Card, CardBody, Spinner, Text } from "@chakra-ui/react";
import {
  ColumnDef,
  PaginationState,
  createColumnHelper,
} from "@tanstack/react-table";
import { ExercisePracticeListResponseDataItem } from "../api/model";
import { useState } from "react";
import { useGetExercisePractices } from "../api/openApi/exercise-practice/exercise-practice";
import { StyledTable } from "./StyledTable";

interface ExercisesCommentsProps {
  exerciseId: number;
}
export function ExercisesComments(props: ExercisesCommentsProps) {
  const columnHelper =
    createColumnHelper<ExercisePracticeListResponseDataItem>();

  const columns = [
    columnHelper.accessor((row) => row.attributes?.notes, {
      id: "Previous Exercise Comments",
      cell: (info) => {
        return <Text>{info.getValue()}</Text>;
      },
    }),
  ];

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const { data, isLoading, isError } = useGetExercisePractices({
    "pagination[page]": pageIndex + 1,
    "pagination[pageSize]": pageSize,
    filters: {
      exercise: props.exerciseId,
    },
  });

  data?.data.data!.sort(
    (a, b) =>
      (new Date(b.attributes?.createdAt!) as any) -
      (new Date(a.attributes!.createdAt!) as any)
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Card className="m-3">
      <CardBody className="bg-gray-200 rounded-lg shadow-lg">
        <StyledTable
          columns={columns as ColumnDef<unknown, any>[]}
          data={data?.data.data as unknown[]}
          pageCount={data?.data.meta?.pagination?.pageCount!}
          pagination={{ pageIndex, pageSize }}
          setPagination={setPagination}
          removePagination={true}
        />
      </CardBody>
    </Card>
  );
}
