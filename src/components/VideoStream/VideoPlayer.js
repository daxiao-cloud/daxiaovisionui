import { Box, Stack, Button, Video } from 'grommet';
import { Expand, Camera, ZoomIn, VolumeMute, Microphone, Close } from 'grommet-icons';

function IconButton({ content, icon }) {
  return <Button plain tip={content} icon={icon} />;
}

export function VideoPlayer() {
  return (
    <Stack anchor='bottom'>
      <Box width='640px' height='480px' background={'dark-6'} border>
        <Video controls={false} />
      </Box>
      <Box round={{ corner: 'top', size: 'xsmall' }} direction='row' pad='small' gap='medium' background='#000000A1'>
        <IconButton key={0} content='抓图' icon={<Camera color='brand' />} />
        <IconButton key={1} content='放大' icon={<ZoomIn color='brand' />} />
        <IconButton key={2} content='扬声器静音' icon={<VolumeMute color='brand' />} />
        <IconButton key={3} content='开始通话' icon={<Microphone color='brand' />} />
        <IconButton key={4} content='全屏' icon={<Expand color='brand' />} />
        <IconButton key={5} content='关闭' icon={<Close color='brand' />} />
      </Box>
    </Stack>
  );
}