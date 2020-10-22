import styled from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  padding,
  position,
  typography,
} from 'styled-system';

const styledSystemAbilities = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  padding,
  position,
  typography,
);

const Box = styled.div`
  ${styledSystemAbilities};
`;

export { Box };
