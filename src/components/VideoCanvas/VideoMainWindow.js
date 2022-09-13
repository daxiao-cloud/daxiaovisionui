import { Box, Tabs, Tab } from 'grommet';
import { VideoSidebarWindow } from './VideoSidebarWindow';
import { VideoWindow } from './VideoWindow';

export function VideoMainWindow() {
  return (
    <Tabs flex>
      <Tab title='视图1'>
        <Box direction='row' border='between' gap='small' fill>
          <VideoSidebarWindow />
          <VideoWindow />
        </Box>
      </Tab>
      <Tab title='视图2'></Tab>
    </Tabs>
  );
}