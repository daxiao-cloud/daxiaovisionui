import { Box, Grid } from 'grommet';
import { VideoPlayer } from './VideoPlayer';

export function VideoWindow({ number }) {
  return (
    <Box flex overflow='auto'>
      <Grid fill columns='640px' gap='small' align='center' justify='center' style={{ gridAutoFlow: 'row dense', gridAutoRows: '480px' }}>
        {Array.from({ length: number }, (_, index) => index).map(item => <VideoPlayer key={item} />)}
        {/* <VideoPlayer key={0} />
        <VideoPlayer key={1} />
        <VideoPlayer key={2} />
        <VideoPlayer key={3} />
        <VideoPlayer key={4} style={{ gridColumn: 'span 2', gridRow: 'span 2' }} />
        <VideoPlayer key={5} /> */}
      </Grid>
    </Box>
  );
}