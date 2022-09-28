import { Box, Layer } from 'grommet';
import { useState } from 'react';
import { VideoSidebarWindow } from './VideoSidebarWindow';
import { VideoWindow } from './VideoWindow';
import { CameraProperty } from './CameraProperty';

export function VideoStream() {
  const [value, setValue] = useState(false);
  return (
    <Box direction='row' fill>
      <VideoSidebarWindow onClickCameraSetting={(name) => setValue(name)} />
      <VideoWindow number={12} />
      {value && <Layer
        position='right'
        full='vertical'
        onClickOutside={() => setValue(false)}
        onEsc={() => setValue(false)}>
          <Box pad='small' width={{ min: 'medium' }}>
            <CameraProperty name={value} />
          </Box>
        </Layer>}
    </Box>
  );
}