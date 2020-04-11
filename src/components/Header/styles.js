import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  background: linear-gradient(#212121, transparent);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #212121
    }

    a {
      font-weight: bold;
      font-size: 12px;
      color: #999;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }

`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #212121;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #999;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #666
    }

  }
    img {
      height: 32px;
      width: 32px;
      border-radius: 50%;
    }
`;