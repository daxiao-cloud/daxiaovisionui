import { Box, Tabs, Tab, Layer } from 'grommet';
import { useState } from 'react';
import { VideoSidebarWindow } from './VideoSidebarWindow';
import { VideoWindow } from './VideoWindow';
import { CameraProperty } from './CameraProperty';

export function VideoCanvas() {
  const [value, setValue] = useState(false);
  return (
    <Tabs flex>
      <Tab title='视图1'>
        <Box direction='row' border='between' gap='medium' fill>
          <VideoSidebarWindow onClickCameraSetting={(name) => setValue(name)} />
          <VideoWindow />
          {value && <Layer
            position='right'
            full='vertical'
            width='small'
            modal
            onClickOutside={() => setValue(false)}
            onEsc={() => setValue(false)}>
              <Box width='medium' pad='small'>
                <CameraProperty name={value} />
              </Box>
            </Layer>}
        </Box>
      </Tab>
      <Tab title='视图2'></Tab>
    </Tabs>
  );
}