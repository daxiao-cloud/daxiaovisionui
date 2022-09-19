import { Box, Tabs, Tab, Layer } from 'grommet';
import { Monitor } from 'grommet-icons';
import { useState } from 'react';
import { VideoSidebarWindow } from './VideoSidebarWindow';
import { VideoWindow } from './VideoWindow';
import { CameraProperty } from './CameraProperty';

export function VideoStream() {
  const [value, setValue] = useState(false);
  return (
    <Tabs flex>
      <Tab title='视图1' icon={<Monitor />}>
        <Box direction='row' border='between' fill>
          <VideoSidebarWindow onClickCameraSetting={(name) => setValue(name)} />
          <VideoWindow />
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
      </Tab>
      <Tab title='视图2' icon={<Monitor />}>
        <Box direction='row' border='between' gap='medium' fill>
          <VideoSidebarWindow onClickCameraSetting={(name) => setValue(name)} />
          {/* <VideoWindow /> */}
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
      </Tab>
    </Tabs>
  );
}