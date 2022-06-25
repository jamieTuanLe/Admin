import React, { useState, useCallback } from "react";
import { uploadFile } from "/src/api/files/request";
import { toast } from "react-toastify";

import * as S from "./styles";
import LoadingButton from "/src/components/LoadingButton";

const ButtonUpload = ({ children, className, getAvatar, ...rest }) => {
  const [loading, setLoading] = useState(false);

  const onFileChange = useCallback(
    (event) => {
      setLoading(true);
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append("images", file);

      uploadFile(formData)
        .then((res) => {
          const { avatar } = res[0];
          getAvatar(avatar);
        })
        .catch((error) => toast.error(error.message))
        .finally(() => {
          setLoading(false);
        });
    },
    [getAvatar]
  );

  return (
    <S.ButtonUpload
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={className}
      {...rest}
    >
      {loading ? <LoadingButton /> : children}
      <input
        type="file"
        onChange={onFileChange}
        accept="image/png, image/jpg, image/gif, image/jpeg"
      />
    </S.ButtonUpload>
  );
};

export default ButtonUpload;
