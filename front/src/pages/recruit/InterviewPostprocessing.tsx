import React, { useState } from 'react';
import './resume.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ResumeCandidate from './ResumeCandidate';

interface Candidate {
  id: number;
  name: string;
  group: string;
  time: string;
  score: number;
  status: string;
  isChecked: boolean;
}

const InterviewPostprocessing = () => {
  const [status, setStatus] = useState<string>('전체');
  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      id: 1,
      name: '한채은',
      group: '1조',
      time: '13:00',
      score: 79,
      status: '합격',
      isChecked: false,
    },
    {
      id: 2,
      name: '박웅기',
      group: '1조',
      time: '13:00',
      score: 77,
      status: '합격',
      isChecked: false,
    },
    {
      id: 3,
      name: '권수지',
      group: '2조',
      time: '13:30',
      score: 77,
      status: '합격',
      isChecked: false,
    },
    {
      id: 4,
      name: '왕희도',
      group: '2조',
      time: '13:30',
      score: 76,
      status: '보류',
      isChecked: false,
    },
    {
      id: 5,
      name: '김정우',
      group: '3조',
      time: '14:00',
      score: 76,
      status: '보류',
      isChecked: false,
    },
    {
      id: 6,
      name: '이하연',
      group: '3조',
      time: '14:00',
      score: 76,
      status: '미결정',
      isChecked: false,
    },
    {
      id: 7,
      name: '김현조',
      group: '4조',
      time: '14:30',
      score: 75,
      status: '불합격',
      isChecked: false,
    },
    {
      id: 8,
      name: '한예송',
      group: '4조',
      time: '14:30',
      score: 75,
      status: '불합격',
      isChecked: false,
    },
  ]);

  const handleChangeCheck = (id: number, isChecked: boolean) => {
    console.log(isChecked);
    let tmps: Candidate[] = Object.assign([], candidates);
    tmps.map((info) => {
      if (info.id === id) {
        info.isChecked = isChecked;
      }
    });
    setCandidates(tmps);
  };

  const handleHold = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let tmps: Candidate[] = Object.assign([], candidates);
    tmps.map((info) => {
      if (info.isChecked === true) {
        info.status = '보류';
      }
    });
    setCandidates(tmps);
  };

  const handleFail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let tmps: Candidate[] = Object.assign([], candidates);
    tmps.map((info) => {
      if (info.isChecked === true) {
        info.status = '불합격';
      }
    });
    setCandidates(tmps);
  };

  const handlePass = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let tmps: Candidate[] = Object.assign([], candidates);
    tmps.map((info) => {
      if (info.isChecked === true) {
        info.status = '합격';
      }
    });
    setCandidates(tmps);
  };

  return (
    <div className="resume">
      <h2>지원자 목록</h2>
      <form action="">
        <label htmlFor=""></label>
        {/* <button id="button4">통계 보기</button> */}
        <div className="stateBox">
          <ul className="states">
            <li
              className={
                status === '전체' ? 'stateName_all' : 'stateName_all_none'
              }
              onClick={() => {
                setStatus('전체');
              }}
            >
              <div className="stateName">전체</div>
            </li>
            <li
              className={
                status === '미결정' ? 'stateName_yet' : 'stateName_yet_none'
              }
              onClick={() => {
                setStatus('미결정');
              }}
            >
              <div className="stateName">미결정</div>
            </li>
            <li
              className={
                status === '합격' ? 'stateName_pass' : 'stateName_pass_none'
              }
              onClick={() => {
                setStatus('합격');
              }}
            >
              <div className="stateName">합격</div>
            </li>
            <li
              className={
                status === '불합격'
                  ? 'stateName_nonpass'
                  : 'stateName_nonpass_none'
              }
              onClick={() => {
                setStatus('불합격');
              }}
            >
              <div className="stateName">불합격</div>
            </li>
            <li
              className={
                status === '보류' ? 'stateName_keep' : 'stateName_keep_none'
              }
              onClick={() => {
                setStatus('보류');
              }}
            >
              <div className="stateName">보류</div>
            </li>
          </ul>

          <div className="stateUsers">{'총 100명'}</div>
          <ul className="horizontal_people_list">
            {status === '전체'
              ? candidates.map((candidate) => {
                  return (
                    <li key={candidate.id}>
                      <ResumeCandidate
                        candidate={candidate}
                        onChangeCheck={handleChangeCheck}
                      ></ResumeCandidate>
                    </li>
                  );
                })
              : candidates.map((candidate) => {
                  if (candidate.status === status)
                    return (
                      <li key={candidate.id}>
                        <ResumeCandidate
                          candidate={candidate}
                          onChangeCheck={handleChangeCheck}
                        ></ResumeCandidate>
                      </li>
                    );
                })}
          </ul>
          <div className="changeButtons">
            *선택한 후 아래 버튼을 누르면 해당 인원이 이동합니다.
            <div className="changeButton3">
              <button id="skipButt" onClick={handleHold}>
                보류
              </button>
              <button id="outButt" onClick={handleFail}>
                불합격
              </button>
              <button id="inButt" onClick={handlePass}>
                합격
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>
        <Link to="/recruit/interview/postprocessing/notice">
          <button id="button_red">합격 안내문 작성하기</button>
        </Link>
      </div>
    </div>
  );
};

export default InterviewPostprocessing;
