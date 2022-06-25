import React, { useState, useCallback, useEffect } from "react";
import Image from 'next/image';
import { useRouter } from "next/router"
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import InputUpload from '/src/components/Form/InputUpload';

import * as Yup from "yup";

import { addNewPartner, updatePartner, selectDetailPartner } from '/src/store/slice/partner'
import Input from "/src/components/Form/Input";
import UpdateStatus from "/src/components/UpdateStatus";

import * as S from "./styles";

export const AddPartner = ({ id }) => {
  const [thumbnail, setThumbnail] = useState("/images/feed-default.png");
  const router = useRouter()
  const dispatch = useDispatch()
  const getContentUpdate = useSelector(selectDetailPartner)

  const handleCancel = () => {
    router.push("/partner/manage")
  };

  const getImage = useCallback((img) => {
    setThumbnail(img);
  }, []);

  const handleSubmitData = async (value) => {
    try {
      if (id) {
        await dispatch(updatePartner({ id, value }));
        toast.success("Update partner success.");
      } else {
        await dispatch(addNewPartner(value));
        toast.success("Add new partner success.");
      }
      router.push("/partner/manage")
    } catch (error) {
      toast.error(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: (id) ? getContentUpdate?.name : "",
      logo: (id) ? getContentUpdate?.logo : "",
      status: (id) ? getContentUpdate?.status : "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required(),
      logo: Yup.string().required(),
      status: Yup.string(),
    }),
    onSubmit: (values) => handleSubmitData(values),
  });

  const { handleSubmit, values, setFieldValue, errors } = formik;

  useEffect(() => {
    if (id) {
      setThumbnail(getContentUpdate?.logo)
    }
  }, [getContentUpdate, id])

  return (
    <>
      <S.AddPageTitle>{id ? "Update Partner" : "Create Partner"}</S.AddPageTitle>
      <S.AddPageForm onSubmit={handleSubmit}>
        <S.AddPageWrapper>
          <S.AddPageAddThumbnailWrapper>
            <S.AddPageAddLinkTitle>Logo Partner</S.AddPageAddLinkTitle>

            <S.AddPageThumbnailImageWrapper>
              <S.AddPageThumbnailButton>
                <InputUpload
                  name="logo"
                  errors={errors}
                  setFieldValue={(file) => file ? setFieldValue("logo", file) : setFieldValue("logo", thumbnail)}
                  getImage={getImage}
                >
                  <S.ThumbnailIcon>
                    <Image
                      src="/images/icons/image-plus.png"
                      width={25}
                      height={25}
                      alt=""
                    />
                  </S.ThumbnailIcon>
                  <S.ThumbnailUp>Logo up</S.ThumbnailUp>
                </InputUpload>
              </S.AddPageThumbnailButton>

              <S.AddPageThumbnailImage>
                <Image src={thumbnail} layout="fill" objectFit="cover" alt="" />
              </S.AddPageThumbnailImage>
            </S.AddPageThumbnailImageWrapper>
          </S.AddPageAddThumbnailWrapper>

          <S.AddPageAddLink>
            <S.AddPageAddLinkTitle>Name partner</S.AddPageAddLinkTitle>
            <Input
              className="m-0"
              type="text"
              name="name"
              placeholder="Name partner..."
              formik={formik}
              value={values.name}
            />
          </S.AddPageAddLink>

          <S.AddPageAddLink>
            <S.AddPageAddLinkTitle>Status</S.AddPageAddLinkTitle>
            <UpdateStatus
              value={id && (values.status == "active" ? false : true)}
              setFieldValue={setFieldValue}
            />
          </S.AddPageAddLink>
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
