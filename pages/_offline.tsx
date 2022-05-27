import type { NextPage } from "next/types";
import React from "react";
import styled from "styled-components";
import { AlertTriangle } from "react-feather";

/**
 * Offline fallback shown when the fetch fails from both cache and network,
 * this precached page is served instead of presenting an error from browser.
 */
const Offline: NextPage = () => {
  return (
    <Wrapper>
      <Heading>
        <AlertTriangle size={80} />
      </Heading>
      <Heading>أنت بحاجة إلى الإنترنت لتتواصل مع عرّاف</Heading>
    </Wrapper>
  );
};

const Wrapper = styled.h1`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const Heading = styled.h1`
  font-size: clamp(var(--fz-xxl), 4vw, var(--fz-xxxxl));
  color: var(--color-secondary);
`;

export default Offline;
