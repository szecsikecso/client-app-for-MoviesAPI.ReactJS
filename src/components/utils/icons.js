import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faSearch, faCaretDown, faStar, faRulerHorizontal, faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";

export const AddIcon = styled(FontAwesomeIcon).attrs({ icon: faPlus })`
  color: #f65261;
  font-size: 0.65em;
  padding-right: 5px;
  padding-bottom: 2px;
  text-align: center;
`;

export const EditIcon = styled(FontAwesomeIcon).attrs({ icon: faEdit })`
  color: #f65261;
  font-size: 1em;
  padding-right: 5px;
  padding-bottom: 2px;
  text-align: center;
`;


export const DeleteIcon = styled(FontAwesomeIcon).attrs({ icon: faTrash })`
  color: #f65261;
  font-size: 1em;
  padding-right: 5px;
  padding-bottom: 2px;
  text-align: center;
`;

export const SearchIcon = styled(FontAwesomeIcon).attrs({ icon: faSearch })`
  color: #ffffff;
  font-size: 0.85em;
  padding-left: 5px;
  text-align: center;
`;

export const ChooseIcon = styled(FontAwesomeIcon).attrs({ icon: faCaretDown })`
    box-sizing: initial;
    color: #f65261;
    font-size: 0.65em;
    padding-left: 5px;
    padding-right: 3px;
    padding-bottom: 2px;
    text-align: center;
`;

export const RatingIcon = styled(FontAwesomeIcon).attrs({ icon: faStar })`
  color: gold;
  margin: 0 0.25rem 0 0;
`;

export const RuntimeIcon = styled(FontAwesomeIcon).attrs({ icon: faRulerHorizontal })`
  font-size: 1em;
  margin: 0 0.25rem 0 0;
`;

export const ThreeDotIcon = styled(FontAwesomeIcon).attrs({ icon: faEllipsisV })`
    font-size: 1em;
`;

export const CloseIcon = styled(FontAwesomeIcon).attrs({ icon: faTimes })`
    color: #e6e6e6;
    font-size: 2em;
    position: absolute;
    right: 15px;
    top: 10px;
    visibility: visible;
`;
