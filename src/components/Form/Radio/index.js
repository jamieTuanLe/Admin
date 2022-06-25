import React from "react";

import * as S from "./styles";

const Radio = ({ title, name, data, className, formik = {}, ...res }) => {
  const { setFieldTouched, handleChange, values, errors, touched } = formik;

  return (
    <S.RadioWrapper className={className}>
      <S.Title>{title}</S.Title>
      <div>
        {data.map((item, idx) => (
          <S.Radio className="" key={idx} {...res}>
            <input
              type="radio"
              name={name}
              id={item.label}
              value={item.value}
              onBlur={() => setFieldTouched(name, true)}
              onChange={handleChange}
              checked={values[name] === item.value}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </S.Radio>
        ))}
      </div>
      <span className="text-error">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
    </S.RadioWrapper>
  );
};

export default Radio;
