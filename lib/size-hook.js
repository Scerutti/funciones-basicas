import React from "react";
export default function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState();
    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
//# sourceMappingURL=size-hook.js.map