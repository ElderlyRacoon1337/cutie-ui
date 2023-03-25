import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import styles from './Tooltip.module.scss';

interface TooltipProps {
  anchorEl: any;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  anchorEl,
  position = 'top',
  children,
  style,
}) => {
  const [xpos, setXpos] = useState(0);
  const [ypos, setYpos] = useState(0);
  const tooltipRef = useRef<HTMLSpanElement>(null);

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

  return (
    <span
      ref={tooltipRef}
      className={clsx(styles.CuteTooltip)}
      style={ypos ? { top: ypos + 'px', left: xpos + 'px', ...style } : style}
    >
      {children}
    </span>
  );
};

export default Tooltip;
