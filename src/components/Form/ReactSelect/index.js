import React from "react";
import Select from "react-select";

import * as S from "./styles";

const ReactSelect = ({
  label,
  name,
  className,
  options = [],
  onChange,
  value,
  placeholder,
  errors,
  ...rest
}) => {
  // const { setFieldValue, setFieldTouched, values, errors, touched } = formik;

  return (
    <S.SelectOption className={className}>
      {label && <label>{label}</label>}
      <Select
        placeholder={placeholder || name}
        classNamePrefix="select"
        name={name}
        onChange={(selected) => onChange(selected)}
        value={value}
        options={options}
        {...rest}
      />
      {errors?.[name] && <span className="text-error">{errors?.[name]}</span>}
    </S.SelectOption>
  );
};

export default ReactSelect;
