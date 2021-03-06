import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './tab.css';
import icon_all from '../images2/icon_all@2x.png';
import icon_academy from '../images2/icon_academy@2x.png';
import icon_art from '../images2/icon_art@2x.png';
import icon_networking from '../images2/icon_networking@2x.png';
import icon_sports from '../images2/icon_sports@2x.png';
import icon_trip from '../images2/icon_trip@2x.png';
import icon_religion from '../images2/icon_religion@2x.png';
import icon_volunteer from '../images2/icon_volunteer@2x.png';
import icon_etc from '../images2/icon_etc@2x.png';
import axios from 'axios'

interface Subject{
  cc_id:Number,
name:String,
information:String
}
const List = (props: RouteComponentProps<{}>) => {

  const [subject, setSubject] = useState<string>('all');
  
  const getSubject = async() =>{
    await axios.get('http://3.35.234.131:8000/list/all/').then((r)=>{
      let res = r.data;
      console.log(res)
      setcontent(res)
      console.log(content)
    })
    console.log(subject)
  }

  const test = [
    { name: 'all', img: icon_all },
    { name: 'academy', img: icon_academy },
    { name: 'art', img: icon_art },
    { name: 'networking', img: icon_networking },
    { name: 'sports', img: icon_sports },
    { name: 'trip', img: icon_trip },
    { name: 'religion', img: icon_religion },
    { name: 'volunteer', img: icon_volunteer },
    { name: 'etc', img: icon_etc },
  ];
  const all = [
    { id: 1, name: 'all', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 2, name: 'all', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 3, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 4, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 5, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 6, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 7, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 8, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 9 , name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];
  const academy = [
    { id: 1, name: '학술', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 2, name: '학술', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 3, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 4, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 5, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 6, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 7, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 8, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 9 , name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const art = [
    { id: 1,name: '예술', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 2, name: '예술', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 3, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 4, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 5, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 6, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 7, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 8, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 9 , name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const networking = [
    { id: 1,name: '친목', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 2, name: '친목', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 3, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 4, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 5, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 6, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 7, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 8, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 9 , name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const sports = [
    { id: 1,name: '스포츠', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 2, name: '스포츠', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 3, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 4, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 5, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 6, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 7, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 8, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 9 , name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const trip = [
    {id: 1,name: '여행', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 2, name: '여행', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 3, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 4, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 5, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 6, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 7, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 8, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 9 , name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const religion = [
    {id: 1, name: '종교', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 2, name: '종교', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 3, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 4, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 5, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 6, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 7, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 8, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 9 , name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const volunteer = [
    {id: 1, name: '봉사', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 2, name: '봉사', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 3, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 4, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 5, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 6, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 7, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 8, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 9 , name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ];

  const etc = [
    { id: 1, name: '기타', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 2, name: '기타', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 3, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 4, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 5, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 6, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 7, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 8, name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
    { id: 9 , name: 'Tave', introduction: '국내 최초 4차 산업혁명동아리' },
  ]
const [content, setcontent] = useState<any>(all)

  useEffect(():any => {
    if(subject ==="all"){
      setcontent(all)
      getSubject()
    }else
    if (subject === "academy") {
      setcontent(academy)
      
    }
    else
    if (subject === "art") {
      setcontent(art)
    }
    else
    if (subject === "networking") {
      setcontent(networking)
    }
    else
    if (subject === "sports") {
      setcontent(sports)
    }else
    if (subject === "trip") {
      setcontent(trip)
    }
    else
    if (subject === "religion") {
      setcontent(religion)
    }else
    if (subject === "volunteer") {
      setcontent(volunteer)
    }else
    if (subject === "etc") {
      setcontent(etc)
    }
  }, [subject]);

  return (
    <div className="list">
      <h2>전체 동아리 목록</h2>
      <h4>MOZIP에 등록된 전체 동아리 목록을 확인해보세요.</h4>
      <div className="wrapper">
        {/* <div>
          <label>
            <select
              id="list-name"
              defaultValue={subject}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              onBlur={(e) => setSubject(e.target.value)}
            >
              {test.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div> */}
        <div>
          <ul id="horizontal_list">
            {test.map((item) => {
              if (item.name === subject) {
                return (
                  <li className="chosen"
                    onClick={() => {
                      setSubject(item.name);
                    }}
                  >
                    <div className="border top_border border_b"></div>
                    <img src={item.img} alt="tab_icon" />
                    {item.name}
                    <div className="border bottom_border border_b"></div>
                  </li>
                )
              } else {
                return (
                  <li
                    className="notChosen"
                    onClick={() => {
                      setSubject(item.name);
                      // console.log(item.name);
                    }}
                  >
                    <div className="border top_border border_n"></div>
                    <img src={item.img} alt="tab_icon" />
                    {item.name}
                    <div className="border bottom_border border_n"></div>
                  </li>
                );
              }
            })}
          </ul>
          <div className="category_name">{subject}</div>
        </div>

        {/* <h1>{props.match.params.subject}</h1> */}
        <div className="club_list">
          <ul id="horizontal_club_list">
            {content.map((item:Subject, index:number) => {
              return (
                <li>
                  <Link to={`${props.match.url}/${subject}/${item.cc_id}`}>
                    <h3>{item.name}</h3>
                    <p>{item.information}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="club_list">
                <ul id="horizontal_club_list">
                  {학술.map((item, index) => {
                    return (
                      <li>
                        <Link to="/list/학술/1">
                          <h3>{item.name}</h3>
                          <p>{item.introduction}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div> */}

      {/* <Route path="/list/:subject" component={ListSubject} /> */}
    </div>
  );
};

export default List;
