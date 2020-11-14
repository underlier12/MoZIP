import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './apply.css';

const Apply2 = ({ history }: any) => {
  const [motivation, setmotivation] = useState('');
  const [reason, setreason] = useState('');
  const [agreement, setagreement] = useState<boolean>(false);

  const [language1, setlanguage1] = useState<boolean>(false);
  const [language2, setlanguage2] = useState<boolean>(false);
  const [language3, setlanguage3] = useState<boolean>(false);

  const [date1, setDate1] = useState<boolean>(false);
  const [date2, setDate2] = useState<boolean>(false);
  const [date3, setDate3] = useState<boolean>(false);

  const checkDateChange1: any = (e: Event) => {
    setDate1((e.target as any).checked);
  };
  const checkDateChange2: any = (e: Event) => {
    setDate2((e.target as any).checked);
  };
  const checkDateChange3: any = (e: Event) => {
    setDate3((e.target as any).checked);
  };

  const handleChange1: any = (e: Event) => {
    setmotivation((e.target as any).value);
  };
  const handleChange2: any = (e: Event) => {
    setreason((e.target as any).value);
  };
  const checkHandler: any = (e: Event) => {
    setagreement((e.target as any).checked);
  };
  const checkLangChange1: any = (e: Event) => {
    setlanguage1((e.target as any).checked);
  };
  const checkLangChange2: any = (e: Event) => {
    setlanguage2((e.target as any).checked);
  };
  const checkLangChange3: any = (e: Event) => {
    setlanguage3((e.target as any).checked);
  };
  const goBack: any = () => {
    history.goBack();
  };



  const renderSubmit = () => {
    if (agreement) {
      return (
        <Link to="/list/:subject/:circle_id/detail">
          <button id="button4" type="submit">
            제출
          </button>
        </Link>
      );
    }
    return (
      <button id="button4" type="submit" disabled>
        제출
      </button>
    );
  };

  return (
    <div className="apply_wrapper">
      <div>
        <h2>Tave 지원하기</h2>
      </div>
      <div className="whole_resume">
      <div>
        <div className="middle_title">지원서</div>
        <form action="">
          <div className="apply_questions">
            <div className="question_box">
              <div className="applyquestion">
                <label htmlFor="">TAVE에 지원한 동기를 알려주세요.</label>
              </div>
              <div>
               <textarea className="essay" name="" id="" cols={80}rows={5} onChange={handleChange1} value={motivation}></textarea>
              </div>
            </div>

            <div className="question_box">
              <div className="applyquestion">
                <label htmlFor="">
                  4차 산업 혁명에 관심을 가지게 된 계기를 알려주세요.
                </label>
              </div>
              <div>
                <textarea className="essay" name="" id="" cols={80} rows={5}></textarea>
              </div>
            </div>

            <div className="question_box">
              <div className="applyquestion">
                <label htmlFor="">다룰 수 있는 언어를 선택해주세요.</label>
              </div>
              <div>
                <div className="applyCheckbox">
                <input type="checkbox" checked={language1} onChange={checkLangChange1} name="Python" value="Python"/>Python
                </div>
                <div className="applyCheckbox">
                <input type="checkbox" checked={language2} onChange={checkLangChange2} name="C" value="C"/>C
                </div>
                <div className="applyCheckbox">
                <input type="checkbox" checked={language3} onChange={checkLangChange3} name="Java" value="Java"/>Java
                </div>
              </div>
            </div>

            <div className="question_box">
              <div className="applyquestion">
                <label htmlFor="">면접 가능 시간을 선택해 주세요.</label>
              </div>
              <div>
                {/* 날짜는 back에서 받아온 데이터로 교체 */}
                <div>
                <input type="checkbox" checked={date1} onChange={checkDateChange1} name="first" value="2020년 7월 18일 수요일"/><strong>2020년 7월 18일 수요일</strong><input type="select" maxLength={2} />시~<input type="select"maxLength={2} />시
                </div>
                <div>
                <input type="checkbox" checked={date2} onChange={checkDateChange2} name="second" value="2020년 7월 19일 목요일"/><strong>2020년 7월 19일 목요일</strong><input type="select"maxLength={2} />시~<input type="select"maxLength={2} />시
                </div>
                <div>
                <input type="checkbox" checked={date3} onChange={checkDateChange3} name="third" value="2020년 7월 20일 금요일"/><strong>2020년 7월 20일 금요일</strong><input type="select"maxLength={2}/>시~<input type="select"maxLength={2} />시
                </div>
              </div>
            </div>

            <div>
              <form className="noticeConsent">
                <label htmlFor=""></label>
                <input type="checkbox" checked={agreement} onChange={checkHandler}/><span>해당 동아리에서 이름, 사진, 생년월일, 전화번호를 열람하는 것에 동의합니다.</span>
              </form>
            </div>
          </div>
        </form>
        <div className="apply2Buttons">
          {/* <Link to="/list/:subject/:circle_id/apply"> */}
          <button id="button1" type="button" onClick={goBack}>
            이전 
          </button>
          {/* </Link> */}
          <button id="button1" type="button">
            저장
          </button>
          {renderSubmit()}
        </div>
      </div>
      <div className="resumeList">
        <div className="resumeList_header">자기소개함</div>
        <ul>
          <li>
            지원 동기를 말씀해주세요<p>복사하기</p>
          </li>
          <li>
            지원 동기를 말씀해주세요<p>복사하기</p>
          </li>
          <li>
            지원 동기를 말씀해주세요<p>복사하기</p>
          </li>
          <li>
            지원 동기를 말씀해주세요<p>복사하기</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Apply2;