import { useState } from "react";
import type { ChangeEventHandler } from "react";
import styled from "styled-components";
import * as CONSTANTS from "./QuestionForm.constants";
import { getLastChar } from "./QuestionForm.helpers";

export const QuestionForm: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [spell, setSpell] = useState("");
  const [answer, setAnswer] = useState("");
  const [autoFillMode, setAutoFillMode] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

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
      <div>
        <TextInput
          type="text"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          placeholder={"ما إسمي؟"}
        />
      </div>

      <div>
        <p>يجب عليك تكرار هذه التعويذة حرفيا ليجيبك عراف</p>
        <SpellWrapper>{CONSTANTS.SPELL_TEXT}</SpellWrapper>
        <TextArea
          onChange={handleSpellChange}
          value={spell}
          placeholder={CONSTANTS.SPELL_TEXT.substring(0, 15) + "..."}
        />
      </div>

      <button
        type="submit"
        disabled={!question || spell.length < CONSTANTS.SPELL_TEXT.length}
        onClick={() => setShowAnswer(true)}
      >
        ؟
      </button>

      {showAnswer && <p>{answer}</p>}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 32px;
`;

const SpellWrapper = styled.div`
  padding: 8px;
  color: hsl(0deg 100% 50%);
  user-select: none;
`;

const TextInput = styled.input`
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
`;
