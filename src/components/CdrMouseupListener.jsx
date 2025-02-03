import { useEffect } from "react";

const CdrMouseupListener = () => {
  useEffect(() => {
    const cdrMouseupFunc = () => {
      const cdrIFrame = document.getElementById("cdr-timeline-iframe");
      if (cdrIFrame?.contentWindow?.postMessage) {
        cdrIFrame.contentWindow.postMessage("mouseup", "*");
      }
    };

    if (window.addEventListener) {
      window.addEventListener("mouseup", cdrMouseupFunc, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmouseup", cdrMouseupFunc);
    }

    return () => {
      if (window.removeEventListener) {
        window.removeEventListener("mouseup", cdrMouseupFunc, false);
      } else if (window.detachEvent) {
        window.detachEvent("onmouseup", cdrMouseupFunc);
      }
    };
  }, []);

  return null; // This component does not render anything
};

export default CdrMouseupListener;