import React from "react";
import Image from 'next/image';
import * as S from "./styles";

const Input = ({
  icon,
  label,
  type,
  name,
  placeholder,
  description,
  className,
  formik = {},
  ...rest
}) => {
  const { handleChange, handleBlur, values, errors, touched } = formik;

  return (
    <S.Input className={className} {...rest}>
      {icon && (
        <S.Icon>
          <Image 
            src="/images/icons/search-icon.png"
            width={28}
            height={28}
            alt=""
          />
        </S.Icon>
      )}
      {label && <label>{label}</label>}
      <input
        className={errors?.[name] && touched?.[name] && "isvalid"}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values?.[name]}
        {...rest}
      />
      <span className="text-error">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
      {description && <div>{description}</div>}
    </S.Input>
  );
};

export default Input;
