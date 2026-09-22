import { useEffect } from "react";

import { setMarketingStylesheetsActive } from "../constants/ensureMarketingStyles";

/** Marks the document as the public marketing site so platform CSS stays unaffected. */
export default function useMarketingSiteBodyClass() {
  useEffect(() => {
    document.body.classList.add("marketing-site");
    document.documentElement.classList.add("marketing-site");
    setMarketingStylesheetsActive(true);

    return () => {
      document.body.classList.remove("marketing-site");
      document.documentElement.classList.remove("marketing-site");
      document.body.classList.remove("marketing-styles-ready");
      document.documentElement.classList.remove("marketing-styles-ready");
      document.documentElement.classList.remove("marketing-styles-pending");
      setMarketingStylesheetsActive(false);
    };
  }, []);
}
