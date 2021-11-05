import styled from 'styled-components';

export const Container = styled.div`
  width: 743px;
  height: 360px;
  display: flex;
  margin: 0;

  .first-plot {
    /* margin-left: 3rem; */
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .second-plot {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .third-plot {
    margin-top: 2rem;
  }

  #short-field {
    border-radius: 25px;
    border: 1px solid #787878;
    appearance: none;

    width: 355px;
    height: 35px;
  }

  #long-field {
    border-radius: 25px;
    border: 1px solid #787878;
    appearance: none;
    width: 742px;
    height: 120px;
  }

  h1 {
    margin-left: 0;
    margin-bottom: 1rem;
    font-size: 1rem;
    align-items: left;
    margin-left: 1rem;
    color: #383838;
  }

  form {
    width: 743px;
    height: 360px;
  }
`;
