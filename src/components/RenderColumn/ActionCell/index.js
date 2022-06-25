import React, { useState, useCallback } from "react";
import Popover from "/src/components/Popover";
import OptionButton from "/public/svgs/optionbutton";

import * as S from "./styles"

const ActionCell = ({ value, config }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = useCallback((prevState) => {
    setToggle(!prevState);
  }, []);

  return (
    <>
      <S.ActionIndicator
        id={`action-${value}`}
      >
        <OptionButton />

        <Popover
          toggle={toggle}
          onToggle={() => handleToggle(toggle)}
          target={`action-${value}`}
          placement="right"
        >
          {config?.map((option, index) => (
            <div key={index}  onClick={() => option?.method()}>{option?.action}</div>
          ))}
        </Popover>
      </S.ActionIndicator>
    </>
  )
}

export default ActionCell