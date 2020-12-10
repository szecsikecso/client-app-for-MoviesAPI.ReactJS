/** @jsx jsx */

import React, { useState } from "react";
import { Overlay } from 'react-portal-overlay';
import { css, jsx } from '@emotion/core';

import MovieForm from "../MovieForm";
import DeleteMovieForm from "../DeleteMovieForm";
import { CloseIcon, ThreeDotIcon } from "../utils/icons";
import { CloseButton, ThreeDotButton, ThreeDotMenu } from "../utils/styledItems";

const OperateMovieOverlay = ({ movie, apiMovie }) => {
    
    const [isOpenOperations, setIsOpenOperations] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);

    return (
        <React.Fragment>
            <ThreeDotButton onClick={() => setIsOpenOperations(!isOpenOperations) } >
                <ThreeDotIcon />
            </ThreeDotButton>
            <ThreeDotMenu className={isOpenOperations ? 'display-block' : 'display-none'}>
                <CloseButton onClick={() => setIsOpenOperations(!isOpenOperations) }>
                    <CloseIcon />
                </CloseButton>
                <button onClick={() => setIsOpenEdit(true)}>Edit</button>
                <button onClick={() => setIsOpenDelete(true)}>Delete</button>
            </ThreeDotMenu>

            <Overlay
                open={isOpenEdit}
                onClose={() => { setIsOpenEdit(false); }}
                //closeOnClick
                closeOnEsc
                css={css`
                    background: rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
                    <CloseButton onClick={() => setIsOpenEdit(false)}>
                        <CloseIcon />
                    </CloseButton>
                    <h2
                        css={css`
                            color: black;
                        `}
                    >Edit Movie</h2>

                    <MovieForm onClose={() => setIsOpenEdit(false)} movie={movie} apiMovie={apiMovie} />
                </div>
            </Overlay>
            <Overlay
                open={isOpenDelete}
                onClose={() => { setIsOpenDelete(false); }}
                //closeOnClick
                closeOnEsc
                css={css`
                    background: rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
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
                    className="modal-content modal-content-small"
                >
                    <CloseButton onClick={() => setIsOpenDelete(false)}>
                        <CloseIcon />
                    </CloseButton>
                    <h2
                        css={css`
                            color: black;
                        `}
                    >Delete Movie</h2>

                    <DeleteMovieForm onClose={() => setIsOpenDelete(false)} movieId={movie.id} apiMovie={apiMovie} />
                </div>
            </Overlay>
        </React.Fragment>
    );
}

export default OperateMovieOverlay;
