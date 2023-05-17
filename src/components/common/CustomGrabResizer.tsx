import { Divider, createStyles } from '@mantine/core';
import React, { useCallback, useState } from 'react';

type CustomGrabResizerProps = {
  navbarWidth: number;
  setNavbarWidth: React.Dispatch<React.SetStateAction<number>>;
};

const CustomGrabResizer = (props: CustomGrabResizerProps) => {
  const { navbarWidth, setNavbarWidth } = props;
  const { classes } = useStyles();

  const [dragging, setDragging] = useState(false);
  const [lastClientX, setLastClientX] = useState(0);

  const handleMouseDown = useCallback((e: any) => {
    e.preventDefault();
    setDragging(true);
    setLastClientX(e.clientX);
  }, []);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: any) => {
      if (!dragging) {
        return;
      }

      const delta = e.clientX - lastClientX;
      setNavbarWidth((prevWidth) => Math.max(prevWidth + delta, 0));
      setLastClientX(e.clientX);

      // Prevent too large width
      if (navbarWidth - delta > 900) {
        return;
      }
    },
    [dragging, lastClientX],
  );

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);
  return (
    <Divider
      color='#5E6D97'
      orientation='vertical'
      draggable
      onMouseDown={handleMouseDown}
      className={classes.draggableDivider}
    />
  );
};

const useStyles = createStyles((theme) => ({
  draggableDivider: {
    borderWidth: 5,
    '&:hover': {
      cursor: 'col-resize',
    },
    userSelect: 'none', // Prevent text selection
    pointerEvents: 'all', // Ensure the element can be the target of mouse events
  },
}));

export default CustomGrabResizer;
