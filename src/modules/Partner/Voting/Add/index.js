import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/router"
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'

import * as Yup from "yup";
import { addNewVoting, updateVoting, getDetailVoting, selectDetailVoting } from '/src/store/slice/voting'
import { getListPartner, selectListPartner } from '/src/store/slice/partner'

import Input from "/src/components/Form/Input";
import Editor from "/src/components/Form/Editor";
import UploadImage from "/src/components/Form/UploadImage";
import UpdateStatus from "/src/components/UpdateStatus";

import ChooseItem from "/src/components/ChooseItem";
import PartnerInfo from "/src/components/ChooseItem/PartnerInfo";

import * as S from "./styles";

export const AddVoting = ({ id }) => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [imageVote, setImageVote] = useState("/default-vote.jpg");
  const router = useRouter()
  const dispatch = useDispatch()
  const getContentUpdate = useSelector(selectDetailVoting)
  const listPartner = useSelector(selectListPartner)
  const options = listPartner?.rows.filter((partner) => partner.status !== "inactive").map((partner) => {
    return {
      value: partner._id,
      label: <PartnerInfo name={partner?.name} logo={partner?.logo} />,
    }
  })

  const handleCancel = () => {
    router.push("/partner/voting")
  };
  const getImage = useCallback((img) => {
    setImageVote(img);
  }, []);

  const handleSubmitData = async (value) => {
    try {
      if (id) {
        await dispatch(updateVoting({ id, value }));
        toast.success("Update voting success.");
      } else {
        await dispatch(addNewVoting(value));
        toast.success("Add new voting success.");
      }
      router.push("/partner/voting")
    } catch (error) {
      toast.error(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: (id) ? getContentUpdate?.title : "",
      image: (id) ? getContentUpdate?.image : "",
      partner: (id) ? getContentUpdate?.partner._id : "",
      description: (id) ? getContentUpdate?.description : "",
      status: (id) ? getContentUpdate?.status : "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string().required(),
      image: Yup.string().required(),
      partner: Yup.string().required(),
      description: Yup.string().required(),
      status: Yup.string(),
    }),
    onSubmit: (values) => handleSubmitData(values),
  });

  const { handleSubmit, values, setFieldValue, errors } = formik;

  useEffect(() => {
    dispatch(getListPartner({ limit: 1000, page: 0 }))
  }, [dispatch])

  useEffect(() => {
    if (id) {
      dispatch(getDetailVoting(id))
    }
  }, [dispatch, id])

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    if (id) {
      setImageVote(getContentUpdate?.image)
    }
  }, [getContentUpdate, id])

  return (
    <>
      <S.AddPageTitle>{id ? "Update Voting" : "Create Voting"}</S.AddPageTitle>
      <S.AddPageForm onSubmit={handleSubmit}>
        <S.AddPageWrapper>
          <S.AddPageAddThumbnailWrapper>
            <S.AddPageAddLinkTitle>Image Voting</S.AddPageAddLinkTitle>

            <S.AddPageThumbnailImageWrapper>
              <S.AddPageThumbnailButton>
                <UploadImage
                  name="image"
                  errors={errors}
                  setFieldValue={(file) => file ? setFieldValue("image", file) : setFieldValue("image", imageVote)}
                  getImage={getImage}
                >
                  <S.ThumbnailIcon>
                    <Image
                      src="/images/icons/image-plus.png"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </S.ThumbnailIcon>
                  <S.ThumbnailUp>Image up</S.ThumbnailUp>
                </UploadImage>
              </S.AddPageThumbnailButton>

              <S.AddPageThumbnailImage>
                <Image src={imageVote} layout="fill" objectFit="cover" alt="" />
              </S.AddPageThumbnailImage>
            </S.AddPageThumbnailImageWrapper>
          </S.AddPageAddThumbnailWrapper>

          <S.AddPageAddLink>
            <S.AddPageAddLinkTitle>Title Voting</S.AddPageAddLinkTitle>
            <Input
              className="m-0"
              type="text"
              name="title"
              placeholder="Title voting..."
              formik={formik}
              value={values.title}
            />
          </S.AddPageAddLink>

          <S.AddPageCkeditor>
            <S.AddPageAddLinkTitle>Description</S.AddPageAddLinkTitle>
            <Editor
              name="description"
              onChange={(e, editor) => {
                setFieldValue("description", editor.getData());
              }}
              value={values.description}
              editorLoaded={editorLoaded}
              errors={errors}
            />
          </S.AddPageCkeditor>

          {id && (
            <S.AddPageStatus>
              <S.AddPageAddLinkTitle>Status</S.AddPageAddLinkTitle>
              <UpdateStatus
                value={id && (values.status == "active" ? false : true)}
                setFieldValue={setFieldValue}
              />
            </S.AddPageStatus>
          )}
          <S.AddPageChooseItem>
            <ChooseItem
              options={options}
              title="Choose Partner"
              name="partner"
              isMulti={false}
              defaultValue={values.partner}
              setFieldValue={(id) => setFieldValue("partner", id)}
            />
          </S.AddPageChooseItem>


          <S.AddPageButtonWrapper>
            <S.ButtonCancel
              type="reset"
              onClick={handleCancel}
            >
              Cancel
            </S.ButtonCancel>
            <S.ButtonSubmit type="submit">Submit</S.ButtonSubmit>
          </S.AddPageButtonWrapper>
        </S.AddPageWrapper>
      </S.AddPageForm>
    </>
  );
};
