import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    background-color: #555555;
    box-sizing: border-box;
    color: #ffffff;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  .modal-container {
    .modal-content {
      margin-top: 939px;
      margin-bottom: 150px;
      padding-top: 50px;

      &.modal-content-small {
        margin-top: 0;
      }

      h2 {
        color: #e6e6e6;
        letter-spacing: 1px;
        padding-bottom: 20px;
        text-transform: uppercase;
      }

      .form-description {
        padding-bottom: 30px;
      }

      /* Enabling custom placeholder for empty date input */
      .date-input-container {
        position: relative;

        & > label:not(.has-value)::after {
          background-color: #555555;
          color: #6c757d;
          content: attr(placeholder);
          left: 12px;
          padding-right: 100px;
          pointer-events: none;
          position: absolute;
          text-transform: none;
          top: 39px;
          z-index: 2;
        }

        & > input {
          cursor: pointer;
        }
      }

      .form-group {
        label {
          color: #f65261;
          letter-spacing: 1px;
          text-transform: uppercase;

          .required-label {
            font-size: 18px;
            font-weight: bold;
            padding-left: 5px;
          }
        }

        input, select {
          background-color: #555555;
          border: 0;
          color: #e6e6e6;

          &::placeholder,
          &:-ms-input-placeholder,
          &::-ms-input-placeholder {
            color: #808080;
          }

        }

        /* Firefox corrections */
        input[type="number"],
        input[type="date"] {
            -moz-appearance:textfield;
        }

        /* Removes the spin button */
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button { 
            display: none;
            margin: 0;
            -webkit-appearance: none;
        }

        /* Custom styles for date inputs */
        input[type="date"] {
            appearance: none;
            -webkit-appearance: none;
            display: inline-block !important;
            visibility: visible !important;
            position: relative;
        }

        /* Custom styles for date input focus state */
        input[type="date"], focus {
            box-shadow: none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
        }

        /* Custom styles for empty date input */
        input[type="date"]:not(.has-value) {
            color: transparent;
        }

        /* Custom styles for drop down caret */
        input[type="date"]::-webkit-calendar-picker-indicator {
            /* color: #f65261; */
            border-radius: 0.25rem;
            cursor: pointer;
            filter: invert(39%) sepia(64%) saturate(1230%) hue-rotate(319deg) brightness(100%) contrast(93%);
            padding-top: 9px;
            padding-bottom: 9px;
            padding-left: calc(100% - 31px);
            padding-right: 12px;
            position: absolute;
            right: 0px;
            z-index: 1;
            /* outline: none; */
        }
      }

      .form-buttons {
        text-align: right;

        button {
          border: 2px solid #f65261;
          margin: 10px;
          margin-right: 0 !important;
          text-transform: uppercase;

          &.btn-primary {
            background-color: #f65261;
          }

          &.btn-secondary {
            background-color: transparent;
            color: #f65261;
          }
        }
      }
    }
  }
`;
