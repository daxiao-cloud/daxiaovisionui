import { Box, Tabs, Tab } from 'grommet';
import { VideoSidebarWindow } from './VideoSidebarWindow';
import { VideoWindow } from './VideoWindow';

export function VideoCanvas() {
  return (
    <Tabs flex>
      <Tab title='视图1'>
        <Box direction='row' border='between' gap='medium' fill>
          <VideoSidebarWindow />
          <VideoWindow />
        </Box>
      </Tab>
      <Tab title='视图2'></Tab>
    </Tabs>
  );
}