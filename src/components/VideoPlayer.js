import { Box, Video } from 'grommet';

export function VideoPlayer() {
  return (
    <Box width='640px' height='480px' background={'dark-6'} border>
      <Video controls={false} />
    </Box>
  );
}