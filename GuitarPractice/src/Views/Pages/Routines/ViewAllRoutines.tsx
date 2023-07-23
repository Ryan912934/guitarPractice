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
  IconButton,
  Input,
  Spacer,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RoutineListResponseDataItem } from "../../../api/model";
import { useDebouncedCallback } from "use-debounce";
import { StyledTable } from "../../../components/StyledTable";
import { useGetRoutines } from "../../../api/openApi/routine/routine";
import { AddRoutine } from "../../Modals/AddRoutine/AddRoutine";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export function ViewAllRoutines() {
  const columnHelper = createColumnHelper<RoutineListResponseDataItem>();

  const navigate = useNavigate();

  const columns = [
    columnHelper.accessor((row) => row.attributes?.name, {
      id: "Routine Name",
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
    columnHelper.accessor((row) => row.id, {
      id: "View",
      cell: (info) => {
        return (
          <IconButton
            onClick={() => {
              navigate(`${info.getValue()}`);
            }}
            colorScheme="blue"
            aria-label="View Routine"
            icon={<SearchIcon />}
          />
        );
      },
    }),
  ];

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const addRoutineDisclosure = useDisclosure();

  const [val, setVal] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const debouncedSearch = useDebouncedCallback(
    useCallback((val) => {
      setSearchVal(val);
    }, []),
    750,
    { maxWait: 2000 }
  );

  const { data, isLoading, isError } = useGetRoutines({
    sort: "name",
    "pagination[page]": pageIndex + 1,
    "pagination[pageSize]": pageSize,
    filters: {
      "$or][0][name][$containsi": searchVal,
      "$or][1][description][$containsi": searchVal,
    },
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
              <Button colorScheme="red" onClick={addRoutineDisclosure.onOpen}>
                Add Routine
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
      <AddRoutine
        close={addRoutineDisclosure.onClose}
        isOpen={addRoutineDisclosure.isOpen}
      />
    </>
  );
}
