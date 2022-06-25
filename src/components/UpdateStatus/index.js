import React, { useState, useEffect} from 'react'

import * as S from "./styles"

const UpdateStatus = ({ value, setFieldValue, }) => {
  const [checked, setChecked] = useState(value)
  const handleToggleButton = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    if(checked) {
      setFieldValue("status", "inactive")
    }else {
      setFieldValue("status", "active")
    }
  }, [setFieldValue, checked])

  return (
    <>
      <S.UpdateWrapper>
        <S.ToggleButton
          onClick={() => handleToggleButton()}
        >
          <input type="checkbox" checked={checked} onChange={() => {}}/>
          <div className="slider" >
            <span></span>
          </div>
        </S.ToggleButton>
      </S.UpdateWrapper>
    </>
  )
}

export default UpdateStatus