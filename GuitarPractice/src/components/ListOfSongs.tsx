import {
  ColumnDef,
  PaginationState,
  createColumnHelper,
} from "@tanstack/react-table";
import { useState } from "react";
import { useGetSongs } from "../api/openApi/song/song";
import { SongListResponseDataItem } from "../api/model";
import { Card, CardBody, Spinner, Text } from "@chakra-ui/react";
import { StyledTable } from "./StyledTable";

interface ListOfSongsProps {
  status: string;
}
export function ListOfSongs(props: ListOfSongsProps) {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const { data, isFetching } = useGetSongs({
    "pagination[page]": pageIndex + 1,
    "pagination[pageSize]": pageSize,
    filters: {
      "status][status": props.status,
    },
    populate: "artist,status",
  });

  const columnHelper = createColumnHelper<SongListResponseDataItem>();

  const columns = [
    columnHelper.accessor((row) => row.attributes, {
      id: "Songs",
      cell: (info) => {
        return (
          <Text>
            {info.getValue()?.title} -{" "}
            {info.getValue()?.artist?.data?.attributes?.name}
          </Text>
        );
      },
    }),
  ];

  if (isFetching) {
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
