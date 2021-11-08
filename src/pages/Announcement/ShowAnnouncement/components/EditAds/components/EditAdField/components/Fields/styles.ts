import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;

  .input-box-a,
  .input-box-b {
    border-radius: 25px;
    border: 1px solid #787878;
    padding: 1rem;
    width: 100%;

    input {
      appearance: none;
      border: none;
      height: 24px;
    }
  }

  .first-plot {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 4rem;
  }

  .second-plot {
    gap: 2rem;
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
  }

  .third-plot {
    margin-top: 2rem;
    margin-bottom: 2rem;

    .input-box-long {
      padding: 1rem;
      width: 742px;

      border: 1px solid #787878;
      box-sizing: border-box;
      border-radius: 25px;

      display: flex;
      justify-content: center;
      align-items: flex-start;

      textarea {
        border: none;
        appearance: none;
        width: 100%;
        min-height: 120px;
        min-width: 100%;
      }
    }
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 16px;
    align-items: left;
    color: #383838;
  }
`;
