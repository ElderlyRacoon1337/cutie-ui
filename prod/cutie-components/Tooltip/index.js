import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './Tooltip.module.scss';
import { jsx as _jsx } from 'react/jsx-runtime';
export const Tooltip = ({ anchorEl, position = 'top', children, style }) => {
  const [xpos, setXpos] = useState(0);
  const [ypos, setYpos] = useState(0);
  const tooltipRef = useRef(null);
  const getPosition = () => {
    if (anchorEl && tooltipRef.current) {
      const anchorData = anchorEl.getBoundingClientRect();
      const tooltipData = tooltipRef.current.getBoundingClientRect();
      position == 'top' &&
        setYpos(window.scrollY + anchorData.y - tooltipData.height - 5);
      position == 'top' &&
        setXpos(anchorData.x + anchorData.width / 2 - tooltipData.width / 2);
      position == 'bottom' &&
        setYpos(window.scrollY + anchorData.y + anchorData.height + 5);
      position == 'bottom' &&
        setXpos(anchorData.x + anchorData.width / 2 - tooltipData.width / 2);
      position == 'left' &&
        setYpos(
          window.scrollY +
            anchorData.y +
            anchorData.height / 2 -
            tooltipData.height / 2
        );
      position == 'left' && setXpos(anchorData.x - tooltipData.width - 5);
      position == 'right' &&
        setYpos(
          window.scrollY +
            anchorData.y +
            anchorData.height / 2 -
            tooltipData.height / 2
        );
      position == 'right' && setXpos(anchorData.x + anchorData.width + 5);
    }
  };
  useEffect(() => {
    getPosition();
    return () => {
      setXpos(0);
      setYpos(0);
    };
  }, [anchorEl]);
  return /*#__PURE__*/ _jsx('span', {
    ref: tooltipRef,
    className: clsx(styles.CuteTooltip),
    style: ypos
      ? {
          top: ypos + 'px',
          left: xpos + 'px',
          ...style,
        }
      : style,
    children: children,
  });
};
