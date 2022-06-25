import React from "react";

import * as S from "./styles";

const Textarea = ({
  label,
  name,
  placeholder,
  description,
  className,
  formik = {},
  rows = 4,
  cols = 50,
  ...rest
}) => {
  const { handleChange, handleBlur, values, errors, touched } = formik;

  return (
    <S.Textarea className={className}>
      <label>{label}</label>
      <textarea
        className={errors?.[name] && touched?.[name] && "isvalid"}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values?.[name]}
        rows={rows}
        cols={cols}
        {...rest}
      />
      <span className="text-error">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
      {description && <div>{description}</div>}
    </S.Textarea>
  );
};

export default Textarea;
