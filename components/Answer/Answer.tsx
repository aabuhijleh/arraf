import React from "react";
import styled, { keyframes } from "styled-components";
import { ArrowRightCircle } from "react-feather";

interface AnswerProps {
  answer: string;
  goBack: () => void;
}

export const Answer: React.FC<AnswerProps> = ({ answer, goBack }) => {
  return (
    <AnswerWrapper>
      <AnswerContainer>
        <BackButtonWrapper onClick={goBack}>
          <ArrowRightCircle size={48} />
        </BackButtonWrapper>
        <AnswerText>{answer}</AnswerText>
      </AnswerContainer>
    </AnswerWrapper>
  );
};

const AnswerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 32px;
  isolation: isolate;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const AnswerContainer = styled.div`
  position: relative;
  padding: 16px 32px;
  border-radius: 16px;
  height: 300px;
  background-color: var(--color-off-black);
  color: var(--color-white);
  font-size: clamp(var(--fz-xl), 6vw, var(--fz-xxxl));
  animation: ${fadeIn} 500ms;
`;

const AnswerText = styled.p`
  animation: ${fadeIn} 800ms;
  animation-delay: 300ms;
  animation-fill-mode: both;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-8px, calc(-100% - 16px));
  cursor: pointer;
  transition: transform 300ms;

  &:hover {
    transform: translate(calc(-8px + 4px), calc(-100% - 16px));
    transition: transform 100ms;
  }
`;
