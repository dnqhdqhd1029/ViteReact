import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';


const HomeContainer = styled.div`
  height: 100vh;

  ul.list {
    padding: 30px 40px;
    font-size: 18px;

    li {
      padding: 10px 0;
      list-style: disc;

      li {
        font-size: 11px;
        list-style: none;
        color: #999;
      }
    }
  }
`;


const Home = () => {

  return (
    <HomeContainer>
      <h1 className="font-xxl">프로젝트</h1>

      <ul className="list">
        <li>
          <Link to={`/test`}>레이아웃 가이드</Link>
        </li>

        <li>
          <Link to={`/guide`}>guide</Link>
        </li>
        <li>
          <Link to={`/test`}>layout</Link>
          <ul>
            <li>Modal,BottomSheet,TopNav 포함</li>
          </ul>
        </li>
      </ul>
    </HomeContainer>
  );
};

export default observer(Home);
