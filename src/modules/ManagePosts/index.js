import React, { useMemo} from 'react'
import CustomeTable from '/src/components/CustomeTable'
import CreateButton from '/src/components/CreateButton'

import { StatusCell, TimeCell, ActionCell, STTCell } from '/src/components/RenderColumn'

import * as S from './styles'

export const ManagePosts = () => {
  const data = useMemo(() => [], [])
  const columns = useMemo(
    () => [
      {
        Header: "Partner",
        accessor: "title",
        Cell: ({ row }) => (
          <FeedCell
            options={{ thumbnail: row?.original.logo, title: row?.original.name }}
            config={{ size: "45px"}}
          />
        )
      },
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <StatusCell value={value} options={[
            {type: "active", color: "successColor", text: "Active"},
            {type: "inactive", color: "failedColor", text: "Block"},
          ]} />
        )
      },
      {
        Header: "Create At",
        accessor: "createdAt",
        Cell: ({value}) => <TimeCell options={{day: value, hour: value}} />,
      },
      {
        Header: "Update At",
        accessor: "updateAt",
        Cell: ({value}) => <TimeCell options={{day: value, hour: value}} />,
      },
      {
        Header: "",
        accessor: "_id",
        id: "action",
        Cell: ({ value }) => (
          <ActionCell 
            value={value}
            config={[
              {action: "Update", method: () => onChangePageUpdate(value)},
            ]}
          />
        )
      },
    ],
    []
  );

  return (
    <>
      <S.Wrapper>
        <S.Top>
          <S.Title>Quản lý bài đăng</S.Title>
          <CreateButton name="Tạo" />
        </S.Top>

        <S.Content>
          <S.TableHeader>
            <S.TableTitle>Danh sách</S.TableTitle>
          </S.TableHeader>
          <S.CustomeTableWrapper>
            <CustomeTable
              columns={columns}
              data={data}
              checkBox={false}
            />
          </S.CustomeTableWrapper>
        </S.Content>
      </S.Wrapper>
    </>
  )
};