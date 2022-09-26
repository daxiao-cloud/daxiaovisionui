import { Box, Button, Video, Stack } from 'grommet';
import { Expand, Camera, ZoomIn, VolumeMute, Microphone, Close, Shift } from 'grommet-icons';
import { useState } from 'react';
import { makeTip } from '../../hoc/makeTip';

function IconButton({ content, icon, ...prop }) {
  return <Button plain tip={makeTip(content)} icon={icon} {...prop} />;
}

const BigViewPort = { gridColumn: 'span 2', gridRow: 'span 2' };

export function VideoPlayer({ ...prop }) {
  const [style, setStyle] = useState();
  function toggleViewPort() {
    style ? setStyle(undefined) : setStyle(BigViewPort);
  }
  return (
    <Box fill background='dark-6' {...prop} style={style}>
      <Stack fill interactiveChild='last'>
        <Video controls={false} />
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
        <Stack anchor='top' fill>
          <Box fill />
          <Box pad='small' gap='medium' background='dark-1'>
            <IconButton content='窗口放大' icon={<Shift />} onClick={() => toggleViewPort()} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}