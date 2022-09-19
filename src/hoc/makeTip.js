import { Box } from 'grommet';

export const makeTip = (content) => ({
  content: <Box background='light-5' pad='small' round='small'>{content}</Box>,
  plain: true
});