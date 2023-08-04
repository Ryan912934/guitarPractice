import {
  ColumnDef,
  PaginationState,
  createColumnHelper,
} from "@tanstack/react-table";
import { useCallback, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Flex,
  Input,
  Spacer,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ExerciseListResponseDataItem } from "../../../api/model";
import { useDebouncedCallback } from "use-debounce";
import { useGetExercises } from "../../../api/openApi/exercise/exercise";
import { StyledTable } from "../../../components/StyledTable";
import { AddExercise } from "../../Modals/AddExercise/AddExercise";

export function ViewAllExercises() {
  const columnHelper = createColumnHelper<ExerciseListResponseDataItem>();

  const columns = [
    columnHelper.accessor((row) => row.attributes?.name, {
      id: "Exercise Name",
      cell: (info) => {
        return <Text fontSize="xl">{info.getValue()}</Text>;
      },
    }),
    columnHelper.accessor((row) => row.attributes?.description, {
      id: "Description",
      cell: (info) => {
        return <Text fontSize="xl">{info.getValue()}</Text>;
      },
    }),
    columnHelper.accessor((row) => row.attributes, {
      id: "Show Song?",
      cell: (info) => {
        return <Text fontSize="xl">{info.getValue()?.songStatus?.status || "-"}</Text>;
      },
    }),
  ];

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const addExerciseDisclosure = useDisclosure();

  const [val, setVal] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const debouncedSearch = useDebouncedCallback(
    useCallback((val) => {
      setSearchVal(val);
    }, []),
    750,
    { maxWait: 2000 }
  );

  const { data, isLoading, isError } = useGetExercises({
    sort: "name",
    "pagination[page]": pageIndex + 1,
    "pagination[pageSize]": pageSize,
    filters: {
      "$or][0][name][$containsi": searchVal,
      "$or][1][description][$containsi": searchVal,
    },
    populate: "songStatus"
  });

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  return (
    <>
      <div>
        <Card variant="elevated" className="w-5">
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
              <Input
                variant="filled"
                placeholder="Search"
                value={val}
                onChange={(e) => {
                  setVal(e.target.value);
                  debouncedSearch(e.target.value);
                }}
              />
            </Box>
            <Spacer />
            <ButtonGroup gap="2">
              <Button colorScheme="red" onClick={addExerciseDisclosure.onOpen}>
                Add Exercise
              </Button>
            </ButtonGroup>
          </Flex>
        </Card>
        <div>
          <StyledTable
            columns={columns as ColumnDef<unknown, any>[]}
            data={data?.data.data as unknown[]}
            pageCount={data?.data.meta?.pagination?.pageCount!}
            pagination={{ pageIndex, pageSize }}
            setPagination={setPagination}
          />
        </div>
      </div>
      <AddExercise
        close={addExerciseDisclosure.onClose}
        isOpen={addExerciseDisclosure.isOpen}
      />
    </>
  );
}
