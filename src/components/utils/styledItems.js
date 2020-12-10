import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #232323;
  margin: 40px;
  position: relative;

  & .page-title {
    font-size: 32px;
    padding-bottom: 20px;
    text-align: center;
  }
  & .page-image {
    width: 100%;
  }
  & .page-link {
      text-align: center;
  }
`;

export const PageContentTitle = styled.h1`
  letter-spacing: 2px;
  margin: 100px auto;
  text-align: center;
  text-transform: uppercase;
`;

export const PageTextFirstPart = styled.span`
  color: #f65261;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const PageLink = styled.a`
  color: #dd3948;
  cursor: pointer;
  display: block;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 1px;
  padding: 20px;
  text-decoration: none;

  &:hover {
    color: #dd3948;
    text-decoration: none;
  }
`;

export const FooterContainer = styled.div`
    background-color: #424242;
    cursor: default;
    padding: 20px 0;
    text-align: center;
    width: 100%;
`;

export const PageText = styled.footer`
    font-size: 20px;
    font-weight: normal;
    margin: 0 60px;
    color: #dd3948;
    letter-spacing: 1px;
`;

export const CloseButton = styled.button`
    visibility: hidden;
`;

export const ThreeDotButton = styled.div`
    position: absolute;
    top: 0;
    right: 5px;
    padding: 10px;
`;

export const ThreeDotMenu = styled.div`
    background-color: #232323;
    border-radius: 5px;
    height: 100px;
    padding-top: 20px;
    position: absolute;
    right: 5px;
    top: 4px;
    width: 150px;

    & button {
        color: #b3b3b3;
        background-color: transparent;
        border: 0;
        display: block;
        font-size: 18px;
        padding: 5px;
        padding-left: 15px;
        text-align: left;
        width: 100%;

        &:hover {
            background-color: #f65261;
            color: #ffffff;
        }

        & svg {
            font-size: 0.8em;
            right: 10px;
        }
    }
`;

export const StyledLink = styled.a`
  background-color: #555555;
  border: 0;
  border-radius: 5px;
  color: #f65261;
  cursor: pointer;
  display: block;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 24px;
  width: 210px;
  height: 40px;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
`;


export const StyledAddMovieButton = styled.button`
  background-color: #555555;
  border: 0;
  border-radius: 5px;
  color: #f65261;
  cursor: pointer;
  display: block;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 38px;
  margin-left: 10px;
  width: 140px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
`;

export const StyledEditMovieButton = styled.button`
  background-color: #555555;
  border: 0;
  border-radius: 5px;
  color: #f65261;
  cursor: pointer;
  display: block;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 25px;
  margin: auto;
  width: 120px;
  height: 25px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 5px;
`;

export const StyledDeleteMovieButton = styled.button`
  background-color: #555555;
  border: 0;
  border-radius: 5px;
  color: #f65261;
  cursor: pointer;
  display: block;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 25px;
  margin: auto;
  width: 120px;
  height: 25px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 5px;
`;

export const SearchButton = styled.button`
    background-color: transparent;
    border: 0;
    position: absolute;
    top: 20px;
    right: 30px;

    & svg {
        color: #f65261;
        font-size: 24px;
    }
`;

export const StyledSearchLabel = styled.label`
  display: block;
  font-size: 24px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const StyledSearchInput = styled.input`
  background-color: #424242;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  display: inline-block;
  font-size: 18px;
  margin: 20px 0;
  width: 500px;
  height: 40px;
  text-indent: 15px;
`;

export const StyledSearchButton = styled.button`
  background-color: #f65261;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  display: inline;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 38px;
  margin-left: 10px;
  width: 125px;
  height: 40px;
  text-transform: uppercase;
`;

export const SearchHeaderContainer = styled.div`
    border-bottom: 10px solid #555555;
    padding: 20px;
    width: 100%;
`;

export const MovieHeaderContainer = styled.div`
    display: flex;
    margin: 20px;
`;
