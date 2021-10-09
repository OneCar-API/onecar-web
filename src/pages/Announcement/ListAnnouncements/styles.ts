import styled from 'styled-components';
import { shade } from 'polished';
import { FiGrid, FiList } from 'react-icons/fi';

export const Container = styled.div`
  body {
    background: #fff;
  }
`;

export const Header = styled.header`
  padding: 15px;
  background: #e5e5e5;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 35px;
  }

  button {
    margin-left: 90px;
    background: #5e9dbc;
    color: #fff;
    font-size: 16px;
    border: 0;
    border-radius: 25px;
    transition: background-color 0.2s;
    width: 100px;
    height: 30px;

    &:hover {
      background: ${shade(0.2, '#5E9DBC')};
    }
  }
`;

export const Form = styled.form`
  width: 600px;
  display: flex;
  margin-left: 100px;

  input {
    flex: 1;
    height: 30px;
    padding: 0 24px;
    border: 0;
    border-radius: 25px 0 0 25px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    margin-left: auto;
    background: #fff;
    border: 0;
    border-radius: 0 25px 25px 0;
    transition: background-color 0.2s;
    width: 50px;
    height: 30px;

    &:hover {
      background: ${shade(0.2, '#ffffff')};
    }

    svg {
      color: var(--blue);
      width: 16px;
      height: 16px;
      margin-top: 5px;
    }
  }
`;

export const Profile = styled.div`
  align-items: center;

  img {
    margin-left: 20px;
    width: 35px;
    height: 35px;
  }
`;

export const Announcements = styled.div`
  margin: 15px auto;
  max-width: 1200px;
`;

export const Visualization = styled.div`
  margin-left: auto;

  svg {
    color: #808080;
    margin-top: 40px;

    & + svg {
      margin-left: 10px;
    }
  }
`;

interface IconProps {
  selected: string;
}

export const GridIcon = styled(FiGrid) <IconProps>`
    cursor:pointer;
    background: ${(props => props.selected === 'list' ? '#fff' : '#e5e5e5')};
    border-radius: 3px;
 
`;

export const ListIcon = styled(FiList) <IconProps>`
    cursor:pointer;
    background: ${(props => props.selected === 'grid' ? '#fff' : '#e5e5e5')};
    border-radius: 3px;

`;

interface MainProps {
  display: string
}

export const Main = styled.main<MainProps>`

    cursor:pointer;
    margin-top: 20px;
    background: #e5e5e5;
    border-radius: 5px;
    width: ${(props) => props.display === 'flex' ? 'auto' : '100%'};
    text-decoration: none;

    margin-left:${(props) => props.display === 'flex' ? '20px' : '0px'};
    margin-right:${(props) => props.display === 'flex' ? '20px' : '0px'};

    display: ${(props) => props.display === 'flex' ? 'block' : 'flex'};
    transition: transform 0.2s;

    box-shadow: 2.5px 3px 5px 1px #c4c4c4;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    > img {
      width: 240px;
      height: 180px;
      border-radius: 5px;
      align-items: center;
    }

    > div {
      margin-left: 16px;
      margin: 15px 0 0 30px;

      strong {
        font-size: 28px;
        color: #383838;
      }

      p {
        font-size: 14px;
        color: #808080;
      }

      h1 {
        font-size: 36px;
        color: #383838;
        margin-top: ${(props) => props.display === 'flex' ? '20px' : '50px'};
      }

      img {
        display: ${(props) => props.display === 'flex' ? 'none' : 'block'};
      }
    }

    #info {
      margin: 20px 40px 0 auto;
      height: 25px;

      p {
        font-size: 16px;
        color: #808080;
      }

      svg {
        color: #808080;
        margin-left: 40px;
        height: 20px;
        width: 20px;
      }

      div {
        display: ${(props) => props.display === 'flex' ? 'none' : 'flex'};
        align-items: center;
        margin-bottom: 10px;

        img {
          width: 27px;
          height: 24px;
          color: #787878;
          margin-right: 15px;
        }

        p {
          font-size: 14px;
          color: #808080;
        }
      }

      hr {
        color: #c4c4c4;
        margin-bottom: 3px;
      }

      h4 {
        color: #808080;
      }
    }
`;
