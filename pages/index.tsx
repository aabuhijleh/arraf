import type { NextPage } from "next";
import { QuestionForm } from "@/components/QuestionForm";
import { Eye, Triangle } from "react-feather";
import styled from "styled-components";
import { useState } from "react";
import { Answer } from "@/components/Answer";

const Home: NextPage = () => {
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const goBackToQuestion = () => {
    setAnswer("");
    setShowAnswer(false);
  };

  return (
    <MaxWidthWrapper>
      {!showAnswer && (
        <QuestionForm
          answer={answer}
          setAnswer={setAnswer}
          setShowAnswer={setShowAnswer}
        />
      )}

      {showAnswer && <Answer answer={answer} goBack={goBackToQuestion} />}

      <HiddenSymbolWrapper>
        <Triangle size={100} />
        <IconWrapper>
          <Eye size={35} />
        </IconWrapper>
      </HiddenSymbolWrapper>
    </MaxWidthWrapper>
  );
};

const MaxWidthWrapper = styled.div`
  height: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
`;

const HiddenSymbolWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(-20%, -20%);
  opacity: 0.04;
  user-select: none;

  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    transform: scale(0.5);
    opacity: 0.02;
  }

  @media ${(p) => p.theme.QUERIES.phoneAndSmaller} {
    transform: scale(0.3);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
`;

export default Home;
