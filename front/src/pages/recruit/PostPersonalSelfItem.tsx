import React, { useState } from 'react';
import { isTemplateExpression } from 'typescript';

interface Question {
  id: number;
  question: string;
  answer: string;
  score: number;
}

interface Props {
  toggle: boolean;
  item: Question;
  onUpdate(id: number, score: number): void;
}

const PostPersonalSelfItem = ({ toggle, item, onUpdate }: Props) => {
  const [score, setScore] = useState<number>(item.score);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScore(Number(e.target.value));
    onUpdate(item.id, Number(e.target.value));
  };

  return (
    <div className="small_gray_namecard">
      <div className="interviewQuestion">{item.question}</div>
      <div className="interviewAnswer">{item.answer}</div>
      <div className="answerScore_">
        {toggle ? (
          <span className="answerScore">
            <input type="number" value={score} onChange={handleChange}></input>점
          </span>
        ) : (
          <span className="answerScore2">{item.score}점</span>
        )}
      </div>
    </div>
  );
};

export default PostPersonalSelfItem;
