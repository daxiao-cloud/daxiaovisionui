import { Box, Stack, Button, Video, Tip } from 'grommet';
import { Expand, Camera, ZoomIn, VolumeMute, Microphone } from 'grommet-icons';

export function VideoPlayer() {
  return (
    <Stack anchor='bottom'>
      <Box width='640px' height='480px' background={'dark-6'} border>
        <Video controls={false} />
      </Box>
      <Box direction='row' margin='small' gap='small'>
        <Tip key={0} content='抓图'><Button plain icon={<Camera />} /></Tip>
        <Tip key={1} content='放大'><Button plain icon={<ZoomIn />} /></Tip>
        <Tip key={2} content='扬声器静音'><Button plain icon={<VolumeMute />} /></Tip>
        <Tip key={3} content='麦克风静音'><Button plain icon={<Microphone />} /></Tip>
        <Tip key={4} content='全屏'><Button plain icon={<Expand />} /></Tip>
      </Box>
    </Stack>
  );
}