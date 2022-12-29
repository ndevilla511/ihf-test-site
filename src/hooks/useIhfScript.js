import { useEffect } from 'react';

export default function useIhfScript(widgetObject){
    useEffect(() => {
        const idx_element = document.getElementById("idx");
        const ihf_container = window.ihfKestrel.render(widgetObject);
        idx_element.appendChild(ihf_container)

        return () => {
            idx_element.removeChild(idx_element.firstChild);
        }
    },[]);
};