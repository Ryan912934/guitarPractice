import {
  Text,
  Spinner,
  Input,
  Card,
  Button,
  Flex,
  Box,
  ButtonGroup,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";

import {
  PaginationState,
  ColumnDef,
  createColumnHelper,
} from "@tanstack/react-table";

import { useGetSongs, usePutSongsId } from "../../../api/openApi/song/song";
import { useCallback, useMemo, useState } from "react";
import { SongListResponseDataItem } from "../../../api/model";
import { StyledTable } from "../../../components/StyledTable";
import { useDebouncedCallback } from "use-debounce";
import { AddArtist } from "../../Modals/AddArtist/AddArtist";
import { AddSong } from "../../Modals/AddSong/AddSong";
import { useQueryClient } from "@tanstack/react-query";

export function Songs() {
  const columnHelper = createColumnHelper<SongListResponseDataItem>();

  const updateSong = usePutSongsId();
  const query = useQueryClient();

  const updateStatus = (songId: number, status: string) => {
    updateSong
      .mutateAsync({
        id: songId,
        data: {
          data: {
            status: {
              status: status as any,
            },
          } as any,
        },
      })
      .then(() => {
        query.invalidateQueries();
      });
  };

  const columns = [
    columnHelper.accessor(
      (row) => row.attributes?.artist?.data?.attributes?.name,
      {
        id: "ArtistName",
        cell: (info) => {
          return <Text fontSize="xl">{info.getValue()}</Text>;
        },
      }
    ),
    columnHelper.accessor((row) => row.attributes?.title, {
      id: "SongName",
      cell: (info) => {
        return <Text fontSize="xl">{info.getValue()}</Text>;
      },
    }),
    columnHelper.accessor((row) => row, {
      id: "Status",
      cell: (info) => {
        return (
          <>
            <Button
              onClick={() => {
                updateStatus(info.getValue().id!, "TO-LEARN");
              }}
              className="m-1"
              colorScheme={
                info.getValue().attributes?.status?.status === "TO-LEARN"
                  ? "green"
                  : "red"
              }
            >
              To Learn
            </Button>
            <Button
              onClick={() => {
                updateStatus(info.getValue().id!, "LEARNING");
              }}
              className="m-1"
              colorScheme={
                info.getValue().attributes?.status?.status === "LEARNING"
                  ? "green"
                  : "red"
              }
            >
              Learning
            </Button>
            <Button
              onClick={() => {
                updateStatus(info.getValue().id!, "PRACTISING");
              }}
              className="m-1"
              colorScheme={
                info.getValue().attributes?.status?.status === "PRACTISING"
                  ? "green"
                  : "red"
              }
            >
              Practising
            </Button>
            <Button
              onClick={() => {
                updateStatus(info.getValue().id!, "FORGOT");
              }}
              className="m-1"
              colorScheme={
                info.getValue().attributes?.status?.status === "FORGOT"
                  ? "green"
                  : "red"
              }
            >
              Forgot
            </Button>
          </>
        );
      },
    }),
  ];

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [val, setVal] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const debouncedSearch = useDebouncedCallback(
    useCallback((val) => {
      setSearchVal(val);
    }, []),
    750,
    { maxWait: 2000 }
  );

  const { data, isLoading, isError } = useGetSongs({
    populate: "artist,status",
    sort: "artist.name",
    "pagination[page]": pageIndex + 1,
    "pagination[pageSize]": pageSize,
    filters: {
      "$or][0][title][$containsi": searchVal,
      "$or][1][artist.name][$containsi": searchVal,
    },
  });

  const addArtistDisclosure = useDisclosure();
  const addSongDisclosure = useDisclosure();

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  return (
    <>
      <div>
        <Card variant="elevated" className="w-11/12">
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
              <Button colorScheme="red" onClick={addArtistDisclosure.onOpen}>
                Add Artist
              </Button>
              <Button colorScheme="teal" onClick={addSongDisclosure.onOpen}>
                Add Song
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
      <AddArtist
        isOpen={addArtistDisclosure.isOpen}
        close={addArtistDisclosure.onClose}
      />
      <AddSong
        isOpen={addSongDisclosure.isOpen}
        close={addSongDisclosure.onClose}
      />
    </>
  );
}
