import React, { useMemo, useState} from 'react'
import CustomeTable from '/src/components/CustomeTable'
import ModalDelete from '/src/components/Modal/Delete'
import { toast } from 'react-toastify'

import { StatusCell, TimeCell, ActionCell, STTCell } from '/src/components/RenderColumn'

import * as S from './styles'

const data = [
  {
    _id: 1,
    idBDS: "BDS001",
    idPost: "KH001",
    createdAt: "25-06-2022",
    verify: "active",
    status: "active",
  },
  {
    _id: 2,
    idBDS: "BDS002",
    idPost: "KH002",
    createdAt: "25-06-2022",
    verify: "inactive",
    status: "active",
  },
  {
    _id: 3,
    idBDS: "BDS003",
    idPost: "KH003",
    createdAt: "25-06-2022",
    verify: "active",
    status: "active",
  },
  {
    _id: 4,
    idBDS: "BDS004",
    idPost: "KH004",
    createdAt: "25-06-2022",
    verify: "inactive",
    status: "inactive",
  },
  {
    _id: 5,
    idBDS: "BDS005",
    idPost: "KH005",
    createdAt: "25-06-2022",
    verify: "inactive",
    status: "inactive",
  },
  {
    _id: 6,
    idBDS: "BDS006",
    idPost: "KH006",
    createdAt: "25-06-2022",
    verify: "active",
    status: "active",
  },
  {
    _id: 7,
    idBDS: "BDS007",
    idPost: "KH007",
    createdAt: "25-06-2022",
    verify: "active",
    status: "active",
  },
];

export const ManageVerify = () => {
  const [openModal, setOpenModal] = useState(false)
  const [detail, setDetail] = useState(false)
  const [newData, setNewData ] = useState(data)

  const onOpenModalDelete = (id) => setOpenModal(id)
  const onNoDeleteModal = () => setOpenModal(false)
  const onOpenModalDetail = (id) => setDetail(id)

  const handleDeletePost = (id) => {
    setNewData((prev) => prev.filter((item) => item._id !== id))
    onNoDeleteModal();
    toast.success("DELETE SUCCESS");
  }

  const columns = useMemo(
    () => [
      {
        Header: "STT",
        accessor: "stt",
        Cell: ({ row }) => (<STTCell row={row} />),
      },
      {
        Header: "Mã BDS",
        accessor: "idBDS",
      },
      {
        Header: "Mã KH",
        accessor: "idPost",
      },
      {
        Header: "Thời gian",
        accessor: "createdAt",
        Cell: ({value}) => <TimeCell options={{day: value}} />,
      },
      {
        Header: "Trạng thái xác minh",
        accessor: "verify",
        Cell: ({ value }) => (
          <StatusCell value={value} options={[
            {type: "active", color: "successColor", text: "Đã xác minh"},
            {type: "inactive", color: "failedColor", text: "Chưa xác minh"},
          ]} />
        )
      },
      {
        Header: "Chức năng",
        accessor: "_id",
        id: "action",
        Cell: ({ row }) => (
          <ActionCell
            idAction={row?.index}
            value={row?.original._id}
            config={[
              {action: "Xóa bài đăng", method: () => onOpenModalDelete(row?.original._id)},
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
          <S.Title>Quản lý xác thực</S.Title>
        </S.Top>

        <S.Content>
          <S.TableHeader>
            <S.TableTitle>Danh sách</S.TableTitle>
          </S.TableHeader>
          <S.CustomeTableWrapper>
            <CustomeTable
              columns={columns}
              data={newData ? newData : data}
              checkBox={false}
            />
          </S.CustomeTableWrapper>
        </S.Content>
      </S.Wrapper>
      {openModal && (
        <ModalDelete 
          toggle={openModal}
          onNo={() => onNoDeleteModal()}
          nameModal="Xóa bài đăng"
          handleDelete={(id) => handleDeletePost(id)}
        />
      )}
    </>
  )
};