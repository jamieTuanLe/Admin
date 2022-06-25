import React from 'react';
import * as S from './styles'
// eslint-disable-next-line react/display-name
const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <S.Checkbox>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </S.Checkbox>
      )
    }
)

export default Checkbox