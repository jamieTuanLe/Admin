import React from "react";
import { Input } from "reactstrap";
import _find from "lodash/find";
import _isArray from "lodash/isArray";

import * as S from "./styles";

const Checkbox = ({
  title,
  name,
  data, //Data always is array
  className,
  horizontal,
  formik = {},
  ...res
}) => {
  const { handleChange, setFieldTouched, values, errors, touched } = formik;

  return (
    <S.CheckboxWrapper className={className}>
      <S.Title>{title}</S.Title>
      <div className={`${horizontal ? "horizontal" : "vertical"}`}>
        {data?.map((item, idx) => (
          <S.Checkbox key={idx} {...res}>
            <Input
              type="checkbox"
              name={name}
              id={item.label}
              value={item.value}
              checked={
                _isArray(values?.[name])
                  ? _find(values?.[name], (val) => val === item.value)
                  : item.value === values?.[name]
              }
              onChange={handleChange}
              onBlur={() => setFieldTouched(name, true)}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </S.Checkbox>
        ))}
      </div>
      <span className="text-error">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
    </S.CheckboxWrapper>
  );
};

export default Checkbox;
