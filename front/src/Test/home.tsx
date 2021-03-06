
import './home.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import React, { useState } from 'react';
//   import ListAcademy from './ListAcademy';
//   import ListSubject from './ListSubject';
import imgA from '../images/card_owner.png';
import imgB from '../images/card_user.png';
import imgC from '../images/banner1_words@2x.png';
import imgD from '../images/howitworks@2x.png';
import imgE from '../images/keyservice@2x.png';
import imgF from '../images/banner2_words@2x.png';
import icon_academy from '../images/icon_academy@2x.png';
import icon_art from '../images/icon_art@2x.png';
import icon_networking from '../images/icon_networking@2x.png';
import icon_sports from '../images/icon_sports@2x.png';
import icon_trip from '../images/icon_trip@2x.png';
import icon_religion from '../images/icon_religion@2x.png';
import icon_volunteer from '../images/icon_volunteer@2x.png';
import icon_etc from '../images/icon_etc@2x.png';

const List = (props: RouteComponentProps<{}>) => {
  const [subject, setSubject] = useState<string>('all');
  const test = [
    { name: 'academy', img: icon_academy },
    { name: 'art', img: icon_art },
    { name: 'networking', img: icon_networking },
    { name: 'sports', img: icon_sports },
    { name: 'trip', img: icon_trip },
    { name: 'religion', img: icon_religion },
    { name: 'volunteer', img: icon_volunteer },
    { name: 'etc', img: icon_etc },
  ];
  const 학술 = [
    { id: '1', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '2', name: '학술', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '3', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '4', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '5', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '6', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '7', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '8', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: '9', name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];
  const 예술 = [
    { name: '예술', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 친목 = [
    { name: '친목', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 스포츠 = [
    { name: '스포츠', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 여행 = [
    { name: '여행', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 종교 = [
    { name: '종교', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 봉사 = [
    { name: '봉사', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const 기타 = [
    { name: '기타', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  return (
    <div>
      <div className="home_wrapper home_body">
        <div className="home_top_wrapper">
          <Link to="/list"><ul id="horizontal_list">
            {test.map((item) => {
              return (
                <li
                  onClick={() => {
                    setSubject(item.name);
                    console.log(item.name);
                  }}
                >

                  <div className="border top_border"></div>
                  <img
                    src={item.img}
                    alt='tab_icon' />
                  {item.name}
                  <div className="border bottom_border"></div>
                </li>
              );
            })}
          </ul></Link>
          <Link to="/list">
            <button id="button10">전체 동아리 보기</button></Link>
        </div>
        <div className="home_mid_wrapper">
          <h2>Start now</h2>
          <div>누구나 편하게 MOZIP을 이용할 수 있습니다.</div>
          <div className="img_cards">
            <img
              className="img_card_owner"
              src={imgA}
              alt='card_owner' />
            <div className="bet-img">혹은</div>
            <img
              className="img_card_user"
              src={imgB}
              alt='card_user' />
          </div>
        </div>
      </div>
      <div className="home_mid2_wrapper">
        <div className="home_banner1">
          <img
            src={imgC}
            alt='what is mozip' />
        </div>
      </div>
      <div className="home_mid3_wrapper">
        <h2>How does it work?</h2>
        <img
          className="img_how"
          src={imgD}
          alt='how it works' />
      </div>
      <div className="home_mid4_wrapper">
        <img
          className="img_keys"
          src={imgE}
          alt='key services' />
      </div>
      <div className="home_mid5_wrapper">
        <div className="home_banner2">
          <img
            className="img_keys"
            src={imgF}
            alt='banner' /></div>
      </div>
    </div>
  );
};

export default List;

// const Home = () => {
//     return (
//        <h3>Home</h3>

//     );
// }

// export default Home;