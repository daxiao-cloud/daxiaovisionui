import { Box, Tabs, Tab } from 'grommet';
import { Sidebar } from './Sidebar';
import { VideoWindow } from './VideoWindow';

export function MainWindow() {
  return (
    <Tabs flex>
      <Tab title='视图1'>
        <Box direction='row' border='between' gap='small' fill>
          <Sidebar />
          <VideoWindow />
        </Box>
      </Tab>
      <Tab title='视图2'></Tab>
    </Tabs>
  );
}