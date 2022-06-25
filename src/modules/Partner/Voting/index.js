import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from "react-toastify"

import CustomeTable from '/src/components/CustomeTable'
import Pagination from '/src/components/Pagination'
import ModalDelete from "/src/components/Modal/Delete";

import CreateButton from '/src/components/CreateButton'
import { FeedCell, ActionCell, TimeCell, StatusCell } from '/src/components/RenderColumn'
import { getListVoting, selectListVoting, deleteVoting, getDetailVoting } from '/src/store/slice/voting'
import * as S from './styles'

export const ManageVoting = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [query, setQuery] = useState({ limit: 10, page: 0 })
  const dispatch = useDispatch()
  const router = useRouter()
  const list = useSelector(selectListVoting)
  const { rows, pagination } = list

  const columns = useMemo(
    () => [
      {
        Header: "Voting",
        accessor: "title",
        Cell: ({ row }) => (
          <FeedCell
            options={{ thumbnail: row?.original.image, title: row?.original.title }}
            config={{ size: "45px" }}
          />
        )
      },
      {
        Header: "Partner",
        accessor: "partner.name",
      },
      {
        Header: () => <div style={{textAlign: "center"}}>Number Votings</div>,
        accessor: "totalVoting",
        Cell: ({ value }) => <div style={{textAlign: "center"}}>{value}</div> 
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({value}) => (
          <StatusCell value={value} options={[
            {type: "active", color: "successColor", text: "Active"},
            {type: "inactive", color: "failedColor", text: "Block"},
          ]} />
        )
      },
      {
        Header: "Create At",
        accessor: "createdAt",
        Cell: ({ value }) => <TimeCell options={{ day: value, hour: value }} />,
      },
      {
        Header: "Update At",
        accessor: "updateAt",
        Cell: ({ value }) => <TimeCell options={{ day: value, hour: value }} />,
      },
      {
        Header: "",
        accessor: "_id",
        id: "action",
        Cell: ({ value }) => (
          <ActionCell
            value={value}
            config={[
              { action: "Update", method: () => onChangePageUpdate(value) },
              { action: "Delete", method: () => onOpenModalDelete(value) },
            ]}
          />
        )
      },
    ],
    []
  );

  const onOpenModalDelete = (ids) => setOpenDeleteModal(ids);
  const onNoDeleteModal = () => setOpenDeleteModal(false);

  const onChangePageUpdate = async (id) => {
    await dispatch(getDetailVoting(id));
    await router.push(`/partner/voting/update/${id}`)
  };

  const handleDeleteVotings = useCallback(
    async (ids) => {
      await dispatch(deleteVoting(ids));
      onNoDeleteModal();
      dispatch(getListVoting(query));
      toast.success("DELETE SUCCESS");
    },
    [dispatch, query]
  );

  useEffect(() => {
    dispatch(getListVoting(query))
  }, [dispatch, query]);

  return (
    <>
      <S.Wrapper>
        <S.Top>
          <S.Title>Manage Voting</S.Title>
          <CreateButton name="CREATE" />
        </S.Top>

        <S.Content>
          <S.TableHeader>
            <S.TableTitle>All Votings</S.TableTitle>
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

        {openDeleteModal && (
          <>
            <ModalDelete
              nameModal="Delete Votings"
              toggle={openDeleteModal}
              handleDelete={() => handleDeleteVotings(openDeleteModal)}
              onNo={() => onNoDeleteModal()}
            />
          </>
        )}
      </S.Wrapper>
    </>
  )
};
