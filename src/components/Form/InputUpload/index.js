import React from 'react';
import Image from "next/image";
import { useCallback } from "react";
import * as S from "./styles";
import { uploadFile } from "/src/api/files/request";
import { toast } from "react-toastify";

const ButtonUpload = ({
  children,
  className,
  getImage,
  name,
  errors,
  setFieldValue,
  ...rest
}) => {
  const onFileChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      const formData = new FormData();

      formData.append("images", file);

      uploadFile(formData)
        .then((res) => {
          const { thumbnail } = res[0];
          setFieldValue(thumbnail);
          getImage(thumbnail);
        })
        .catch((error) => toast.error(error.message))
        .finally(() => {
          // console.log("finally");
        });
    },
    [getImage, setFieldValue]
  );

  return (
    <>
      <S.ButtonUpload
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={className}
        {...rest}
      >
        {children}
        <input
          type="file"
          name={name}
          onChange={onFileChange}
          accept="image/png, image/jpg, image/gif, image/jpeg"
        />
      </S.ButtonUpload>
      <S.Error>{errors?.[name]}</S.Error>
    </>
  );
};

export default ButtonUpload;
