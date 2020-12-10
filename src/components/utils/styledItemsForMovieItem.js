import styled from "styled-components";

export const CardContainer = styled.div`
  flex: 0 0 calc(10% - 40px);
`;

export const CardImageContainer = styled.div`
  position: relative;
  margin: 25px 20px;
  display: flex;

  border-radius: 10px 10px 0 0;
  transition: transform ease 300ms;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  color: white;

  :hover {
    cursor: pointer;

    backface-visibility: hidden;
    transform: scale(1.05);
  }

  :active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  min-width: 250px;
`;

export const StyledRuntime = styled.div`
  position: absolute;
  top: 0;
  right: 50px;
  margin: 0.25rem;
  padding: 0.3rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.808);
`;

export const StyledRating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.25rem;
  padding: 0.3rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.808);
`;

export const CardLabel = styled.div`
  display: flex;
  color: #999999;
  margin: 20px;
  margin-bottom: 5px;
`;

export const CardLabelTitle = styled.div`
  flex: 3;
  font-size: 18px;
`;

export const CardLabelYear = styled.div`
  border: 1px solid #999999;
  border-radius: 2px;
  flex: 1;
  line-height: 18px;
  max-height: 24px;
  padding: 2px;
  padding-bottom: 3px;
  text-align: center;
`;

export const CardDescription = styled.div`
  color: #808080;
  flex-basis: 100%;
  font-size: 14px;
  overflow: hidden;
  padding-left: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 250px;
`;
