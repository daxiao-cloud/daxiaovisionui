import { Box, Text, Button } from 'grommet';

export function CameraOta() {
  return (
    <Box gap='small' align='start'>
      <Text>检测到新固件。</Text>
      <Button primary label='开始升级' />
    </Box>
  );
}