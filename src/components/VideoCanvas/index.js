import { Box } from 'grommet';
import { VideoMainWindow } from './VideoMainWindow';
import { Sidebar } from '../Sidebar';

export function VideoCanvas() {
  return (
    <Box direction='row' gap='xxsmall' border='between' fill>
      <Sidebar />
      <VideoMainWindow />
    </Box>
  );
}