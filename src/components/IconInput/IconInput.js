import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated /* Need better understanding!!! */
}) => {
  const styles = STYLES[size]; /* Meaning? Bracket notation and objects? */
  /* Why not convert the iconSize to rems as well??? */
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}} >  
        <Icon id={icon} size={styles.iconSize}/>
      </IconWrapper>
      <TextInput {...delegated} style={{'--width': width + 'px',
        '--height': styles.height/16 + 'rem', 
        '--border-thickness': styles.borderThickness + 'px',
        '--font-size': styles.fontSize/16 + 'rem'}}/>    
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
 
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;  /* How come the TextInput doesn't auto inherit color? */
  font-weight: 700;
  outline-offset: 3px;  /* Need more understanding of outline-offset! */
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
