import { Box } from 'grommet';
import { VideoPlayer } from './VideoPlayer';

export function VideoWindow() {
  return (
    <Box flex wrap overflow='auto' direction='row' alignContent='start'>
      <VideoPlayer key={0} />
      <VideoPlayer key={1} />
      <VideoPlayer key={2} />
      <VideoPlayer key={3} />
    </Box>
  );
}