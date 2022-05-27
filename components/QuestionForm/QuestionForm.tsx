import { useState } from "react";
import type { ChangeEventHandler } from "react";
import styled, { css } from "styled-components";
import * as CONSTANTS from "./QuestionForm.constants";
import { getLastChar } from "./QuestionForm.helpers";
import { VisuallyHidden } from "../VisuallyHidden";
import { Eye } from "react-feather";
import useSound from "use-sound";

export interface QuestionFormProps {
  answer: string;
  setAnswer: (answer: string) => void;
  setShowAnswer: (showAnswer: boolean) => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({
  answer,
  setAnswer,
  setShowAnswer,
}) => {
  const [question, setQuestion] = useState("");
  const [spell, setSpell] = useState("");
  const [autoFillMode, setAutoFillMode] = useState(false);

  const [playDemon] = useSound("/sounds/demon.mp3");

  const handleSpellChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const newSpellValue = event.target.value;
    const realUserInput = getLastChar(newSpellValue);

    if (newSpellValue.length > CONSTANTS.SPELL_TEXT.length) {
      return;
    }

    if (autoFillMode) {
      if (spell.length < CONSTANTS.SPELL_TEXT.length) {
        setSpell(spell + CONSTANTS.SPELL_TEXT[spell.length]);
      }
      return;
    }

    // if the secret sequence ".." is entered auto fill the
    // rest of the spell without affecting the real answer
    if (realUserInput + getLastChar(answer) === CONSTANTS.SECRET_SEQUENCE) {
      setAnswer(answer.slice(0, -1));
      if (spell.length < CONSTANTS.SPELL_TEXT.length) {
        setSpell(spell + CONSTANTS.SPELL_TEXT[spell.length]);
      }
      setAutoFillMode(true);
      return;
    }

    // backspace was pressed
    if (newSpellValue.length <= answer.length) {
      setAnswer(answer.slice(0, -1));
      setSpell(spell.slice(0, -1));
      return;
    }

    setAnswer(answer + realUserInput);
    setSpell(spell + CONSTANTS.SPELL_TEXT[spell.length]);
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <QuestionWrapper>
        <HelpText>إسأل عرّاف</HelpText>
        <TextInput
          type="text"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          placeholder={"ما هو إسمي؟"}
        />
      </QuestionWrapper>

      <SpellWrapper>
        <HelpText>كرّر هذه التعويذة حرفيا ليجيبك عرّاف</HelpText>
        <SpellText>{CONSTANTS.SPELL_TEXT}</SpellText>
        <TextArea
          onChange={handleSpellChange}
          value={spell}
          placeholder={CONSTANTS.SPELL_TEXT.substring(0, 15) + "..."}
        />
      </SpellWrapper>

      <SubmitButtonWrapper>
        <SubmitButton
          type="submit"
          disabled={!question || spell.length < CONSTANTS.SPELL_TEXT.length}
          onClick={() => {
            playDemon();
            setShowAnswer(true);
          }}
        >
          <VisuallyHidden>أجبني</VisuallyHidden>
          <IconWrapper>
            <Eye size={48} />
          </IconWrapper>
        </SubmitButton>
      </SubmitButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 32px;
  isolation: isolate;
`;

const QuestionWrapper = styled.label``;

const SpellWrapper = styled.label``;

const HelpText = styled.p`
  padding: 8px;
`;

const SpellText = styled.div`
  padding: 8px;
  user-select: none;
  color: var(--color-primary);
  font-weight: ${(p) => p.theme.WEIGHTS.bold};
  font-size: var(--fz-lg);

  &::before {
    content: "”";
    padding-left: 4px;
    font-size: var(--fz-xxl);
  }

  &::after {
    content: "“";
    padding-right: 4px;
    font-size: var(--fz-xxl);
  }
`;

const sharedInputStyles = css`
  display: block;
  width: 100%;
  padding: 16px 24px;
  border: none;
  border-radius: 4px;
  box-shadow: inset 1px 2px 2px hsl(0deg 0% 10% / 0.2);
  font-size: var(--fz-lg);
  color: var(--color-primary);
`;

const TextInput = styled.input`
  ${sharedInputStyles}
`;

const TextArea = styled.textarea`
  ${sharedInputStyles}
  resize: none;
`;

const SubmitButtonWrapper = styled.div``;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 16px 32px;
  border: none;
  border-radius: 10000px 10000px 1000px 1000px;
  color: var(--color-white);
  background-color: var(--color-primary);
  transition: opacity 200ms, transform 400ms;
  will-change: transform;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    transition: opacity 500ms, transform 200ms;
    cursor: revert;
  }

  ${SubmitButtonWrapper}:hover > &, &:focus {
    transform: translateY(-2px);
    transition: opacity 500ms, transform 200ms;
  }

  ${SubmitButtonWrapper}:active > & {
    transform: translateY(0);
    transition: opacity 500ms, transform 50ms;
  }
`;

const IconWrapper = styled.div`
  display: grid;
  place-content: center;
`;
