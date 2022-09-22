import { Box, Button, Video, Stack } from 'grommet';
import { Expand, Camera, ZoomIn, VolumeMute, Microphone, Close } from 'grommet-icons';
import { makeTip } from '../../hoc/makeTip';

function IconButton({ content, icon }) {
  return <Button plain tip={makeTip(content)} icon={icon} />;
}

export function VideoPlayer({ ...prop }) {
  return (
    <Box fill background='dark-6' {...prop}>
      <Stack fill>
        <Video fill controls={false} />
        <Stack anchor='bottom' fill>
          <Box fill />
          <Box round={{ corner: 'top', size: 'small' }} direction='row' pad='small' gap='medium' background='dark-1'>
            <IconButton key={0} content='抓图' icon={<Camera />} />
            <IconButton key={1} content='放大' icon={<ZoomIn />} />
            <IconButton key={2} content='扬声器静音' icon={<VolumeMute />} />
            <IconButton key={3} content='开始通话' icon={<Microphone />} />
            <IconButton key={4} content='全屏' icon={<Expand />} />
          </Box>
        </Stack>
        <Stack anchor='top-right' fill>
          <Box fill />
          <Box pad='small' gap='medium' background='dark-1'>
            <IconButton key={5} content='关闭' icon={<Close />} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}