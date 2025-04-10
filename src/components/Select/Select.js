import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
      {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue} 
        <IconWrapper style={{'--size': 24 + 'px'}}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

/* Is width: max-content applying width based upon the
width of the childrens content???*/ 
const Wrapper = styled.div`
  //isolation: isolate;     /* Strategy1: z-idex */
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  //z-index: 2;    /* Strategy1: z-idex */
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: ${16/16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  /* State based styles */
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  //z-index: 1;   /* Strategy1: z-index */
  pointer-events: none; /* Strategy2: Eliminate ALL mouse events */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

export default Select;
