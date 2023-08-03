import styled from "styled-components";

import { expandTypography } from "@/styles/util";

export const StyledTypeTag = styled.div`
  width: fit-content;
  padding: 2px 8px;
  border: 1px solid;
  border-radius: 50px;

  .label {
    ${({ theme }) => expandTypography(theme.typography.body.small2x.bold)}
  }

  &.outcome {
    border-color: ${({ theme: { color } }) => color.peach[300].value};
    color: ${({ theme: { color } }) => color.peach[500].value};
  }

  &.refund {
    border-color: ${({ theme: { color } }) => color.blue[300].value};
    color: ${({ theme: { color } }) => color.blue[500].value};
  }

  ${({ theme }) => theme.mq.desktop} {
    .label {
      ${({ theme }) => expandTypography(theme.typography.body.small.bold)}
    }
  }
`;