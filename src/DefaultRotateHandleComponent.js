/* eslint-disable react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const DefaultRotateHandleComponent = ({
  active,
  cursor,
  isInSelectionGroup,
  onMouseDown,
  radius,
  scale,
  x,
  y,
  rotateHandlePadding
}) => (
  <circle
    fill={active ? 'rgba(229,240,244,1)' : 'rgba(229,240,244,0.3)'}
    stroke={active ? 'rgba(53,33,140,1)' : 'rgba(53,33,140,0.3)'}
    strokeWidth={1 / scale}
    style={{ cursor, opacity: isInSelectionGroup ? 0 : 1 }}
    r={radius}
    cx={x}
    cy={-rotateHandlePadding / scale}
    onMouseDown={onMouseDown}
  />
);

DefaultRotateHandleComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  nativeActive: PropTypes.bool.isRequired,
  cursor: PropTypes.string.isRequired,
  isInSelectionGroup: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  recommendedSize: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default DefaultRotateHandleComponent;
