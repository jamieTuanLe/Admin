import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useRouter} from 'next/router'
import CreateButton from '/src/components/CreateButton'
import CustomeTable from '/src/components/CustomeTable'
import Pagination from '/src/components/Pagination'

import { FeedCell, StatusCell, ActionCell, TimeCell } from '/src/components/RenderColumn'
import { getListPartner, selectListPartner, getDetailPartner } from '/src/store/slice/partner'
import * as S from './styles'

export const ManagePartner = () => {
  const [query, setQuery] = useState({limit: 10, page: 0})
  const dispatch = useDispatch()
  const router = useRouter()
  const list = useSelector(selectListPartner)
  const { rows, pagination } = list

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

  const onChangePageUpdate = async (id) => {
    await dispatch(getDetailPartner(id))
    await router.push(`/partner/manage/update/${id}`)
  };

  useEffect(() => {
    dispatch(getListPartner(query))
  }, [dispatch, query])

  return (
    <>
      <S.Wrapper>
        <S.Top>
          <S.Title>Manage Partners</S.Title>
          <CreateButton name="CREATE" />
        </S.Top>

        <S.Content>
          <S.TableHeader>
            <S.TableTitle>All partners</S.TableTitle>
          </S.TableHeader>
          <S.CustomeTableWrapper>
            <CustomeTable
              columns={columns}
              data={rows || []}
              checkBox={true}
            />
            <Pagination
              pagination={pagination}
              query={query}
              setQuery={setQuery}
            />
          </S.CustomeTableWrapper>
        </S.Content>
      </S.Wrapper>
    </>
  )
};
