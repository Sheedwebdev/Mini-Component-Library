/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const height = size === 'small'? 8 : 12;

  /* Need better understanding of this code!!!*/ 
  const styles = STYLES[size];

  /* Need better understanding of this code!!!*/
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  
  return (
    <Wrapper
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{'--padding': styles.padding + 'px', '--radius': styles.radius + 'px'}}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{'--width': value +'%', '--height': styles.height + 'px'}}/>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  /* Truncate or trim the corners of the progress 
  bar as it gets close to 100% */
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;
 

export default ProgressBar;
