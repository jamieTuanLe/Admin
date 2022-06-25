import React from "react";
import Select from "react-select";

import * as S from "./styles";

const SelectOption = ({
  label,
  type,
  name,
  className,
  formik = {},
  options = [],
  ...rest
}) => {
  const { setFieldValue, setFieldTouched, values, errors, touched } = formik;

  return (
    <S.SelectOption className={className}>
      {label && <label>{label}</label>}
      <Select
        classNamePrefix="select"
        className={
          errors?.[name] && touched?.[name] ? "isvalid custom" : "custom"
        }
        name={name}
        onChange={(option) => setFieldValue(name, option)}
        value={values?.[name] || undefined}
        onBlur={() => setFieldTouched(name, true)}
        options={options}
        {...rest}
      />
      {errors?.[name] && touched?.[name] && errors?.[name] && (
        <span className="text-error">
          {errors?.[name] && touched?.[name] && errors?.[name]}
        </span>
      )}
    </S.SelectOption>
  );
};

export default SelectOption;
