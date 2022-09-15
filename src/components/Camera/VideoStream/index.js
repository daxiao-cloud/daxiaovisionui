import { Box, Tabs, Tab, Layer } from 'grommet';
import { useState } from 'react';
import { VideoSidebarWindow } from './VideoSidebarWindow';
import { VideoWindow } from './VideoWindow';
import { CameraSettings } from './CameraSettings';

export function VideoCanvas() {
  const [value, setValue] = useState(false);
  return (
    <Tabs flex>
      <Tab title='视图1'>
        <Box direction='row' border='between' gap='medium' fill>
          <VideoSidebarWindow onClickCameraSetting={() => setValue(!value)} />
          <VideoWindow />
          {value && <Layer
            position='right'
            full='vertical'
            width='small'
            modal
            onClickOutside={() => setValue(false)}
            onEsc={() => setValue(false)}>
              <CameraSettings />
            </Layer>}
        </Box>
      </Tab>
      <Tab title='视图2'></Tab>
    </Tabs>
  );
}