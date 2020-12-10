import styled from "styled-components";

export const MovieContentContainer = styled.div`
    flex: 6;
    margin-right: 20px;

    & h3 {
        color: #b3b3b3;
        font-size: 40px;
        font-weight: normal;
        padding-top: 20px;
    }

    & h4 {
        color: #808080;
        font-size: 16px;
        font-weight: normal;
        padding-bottom: 10px;
    }

    & .voteNumber {
        border: 2px solid #b3b3b3;
        border-radius: 100%;
        color: green;
        display: inline-block;
        font-size: 30px;
        margin: 0 20px;
        min-width: 60px;
        padding: 10px;
        text-align: center;
    }

    & .movieNumber {
        color: #f65261;
        font-size: 20px;
        padding-right: 20px
    }

    & .yearNumber {

    }

    & .runtimeNumber {

    }

    & .movieGenres {
        font-style: italic;
        font-weight: bold;
    }

    p {
        color: #808080;
        margin-top: 1rem;
    }
`;

export const MovieImageContainer = styled.div`
    flex: 1;
    margin-right: 20px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  min-width: 250px;
`;
