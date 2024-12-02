import React, { useState, useEffect, useRef } from 'react';
import { Icon } from 'antd';
import { render } from 'amis';
import type { Schema } from 'amis-core';

interface ThumbProps {
  schema: Schema;
  theme?: string;
  env: any;
}

const RendererThumb: React.FC<ThumbProps> = ({ schema, theme, env }) => {
  const [scale, setScale] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setScale(!scale);
  };

  useEffect(() => {
    const syncHeight = () => {
      if (ref.current) {
        const child = ref.current.firstChild as HTMLElement;
        ref.current.style.height = `${child.scrollHeight / (scale ? 2 : 1)}px`;
      }
    };

    const element = ref.current?.firstChild?.firstChild as HTMLElement;
    const unSensor = element ? resizeSensor(element, syncHeight) : null;

    syncHeight();

    return () => {
      if (unSensor) {
        unSensor();
      }
    };
  }, [scale]);

  const environment = {
    session: 'preview',
    ...env
  };

  return (
    <div className={`ae-RenderersPicker-thumb ${scale ? 'is-scaled' : ''}`}>
      <div className="ae-Editor-rendererThumbWrap">
        <div className="ae-Editor-rendererThumbIcon" onClick={handleClick}>
          <Icon type={scale ? 'zoom-in' : 'zoom-out'} />
        </div>
        <div ref={ref} className="ae-Editor-rendererThumb">
          <div className="ae-Editor-rendererThumbInner">
            {render(
              {
                ...schema,
                mode: schema.mode === 'horizontal' ? 'normal' : schema.mode
              },
              {
                theme
              },
              environment
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RendererThumb;
