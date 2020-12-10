import { useEffect } from "react";

const useDocumentTitle = (title) => {
    useEffect(() => {
        let convertedTitle = "";
        if (title !== 0) {
            convertedTitle = " - " + title;
        }
        document.title = "Netflix Roulette" + convertedTitle;
    }, [title])

    return true;
}

export default useDocumentTitle;
