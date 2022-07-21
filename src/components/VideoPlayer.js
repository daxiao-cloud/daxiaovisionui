import { Box, Stack, Button, Video } from 'grommet';
import { Expand } from 'grommet-icons';

export function VideoPlayer() {
  return (
    <Stack anchor='bottom'>
      <Box width='640px' height='480px' background={'dark-6'} border>
        <Video controls={false} />
      </Box>
      <Box margin='small' gap='small'>
        <Button plain icon={<Expand />} />
      </Box>
    </Stack>
  );
}