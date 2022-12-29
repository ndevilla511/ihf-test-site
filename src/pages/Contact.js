import useIhfScript  from "../hooks/useIhfScript.js"

const Contact = () => {

    // useEffect(() => {
    //     const idx_element = document.getElementById("idx");
    //     const ihf_container = window.ihfKestrel.render();
    //     idx_element.appendChild(ihf_container)
    //
    //     return () => {
    //         idx_element.removeChild(idx_element.firstChild);
    //     }
    // },[]);
    useIhfScript();

    return (
        <div>
            <h1>Contact</h1>
            <div id="idx">
            </div>
        </div>
    );
};

export default Contact;