import styled from "styled-components";

export const MovieContainer = styled.div`
display: flex;
flex-flow: row wrap;
margin-top: 0;
margin-bottom: 40px;
`;

export const MovieStuffContainer = styled.div`
border-bottom: 3px solid #555555;
display: flex;
flex-flow: row wrap;
padding: 10px 0;
margin: 0 20px;
`;

export const MovieCountContainer = styled.p`
border-top: 2px solid black;
color: #b3b3b3;
letter-spacing: 1px;
margin-bottom: 0;
padding: 10px 0;
margin: 0 20px;
`;

export const MovieCount = styled.span`
color: #ffffff;
font-weight: bold;
letter-spacing: 0;
`;

export const FilterContainer = styled.div`
    flex: 2;
`;

export const StyledFilterLink = styled.a`
    color: #b3b3b3;
    cursor: pointer;
    display: inline;
    font-size: 16px;
    letter-spacing: 1px;
    padding-right: 20px;
    text-transform: uppercase;
    text-decoration: none;

    &.selected {
        position: relative;
    }

    &.selected:after {
        background-color: #f65261;
        content: "";
        height: 2px;
        left: 0;
        position: absolute;
        top: 30px;
        width: calc(100% - 20px);
    }
`;

export const StyledSortContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;

    & .form-group {
        margin: 0;
        position: relative;
    }

    & label {
        color: #808080;
        cursor: default;
        padding-right: 20px;
        text-transform: uppercase;
    }
    & select {
        background: none;
        border: 0;
        color: #b3b3b3;
        cursor: pointer;
        display: inline;
        font-size: 16px;
        height: auto;
        padding: 0 10px 0 0;
        text-decoration: none;
        text-transform: uppercase;
        width: auto;
        z-index: 2;

        /* for Chrome */
        -webkit-appearance: none;
        /* for Firefox */
        -moz-appearance: none;
        /* For IE10 */
        &::-ms-expand {
            display: none;
        }
    }

    svg {
        pointer-events: none;
        position: absolute;
        right: 0px;
        top: 7px;
        z-index: 1;
    }
`;
