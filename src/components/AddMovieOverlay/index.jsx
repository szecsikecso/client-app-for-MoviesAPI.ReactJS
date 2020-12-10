/** @jsx jsx */

import React, { useState } from "react";
import { Overlay } from 'react-portal-overlay';
import { css, jsx } from '@emotion/core';

import AddMovie from "../AddMovie";
import MovieForm from "../MovieForm";

import { CloseButton } from "../utils/styledItems";
import { CloseIcon } from "../utils/icons";

const AddMovieOverlay = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <AddMovie onClick={() => setIsOpen(true)} />
            <Overlay
                open={isOpen}
                onClose={() => { setIsOpen(false) }}
                //closeOnClick
                closeOnEsc
                css={css`
                    background: rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: 100px;
                    padding-bottom: 100px;
                `}
                className="modal-container"
            >
                <div
                    css={css`
                        width: 80%;
                        background: #424242;
                        padding: 3rem;
                        border-radius: 5px;
                    `}
                    className="modal-content"
                >
                    <CloseButton onClick={() => setIsOpen(false)}>
                        <CloseIcon />
                    </CloseButton>
                    <h2
                        css={css`
                            color: black;
                        `}
                    >Add Movie</h2>

                    <MovieForm onClose={() => setIsOpen(false)} />
                </div>
            </Overlay>
        </React.Fragment>
    )
}

export default AddMovieOverlay;
