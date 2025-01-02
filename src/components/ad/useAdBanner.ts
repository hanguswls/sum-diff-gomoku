import { useEffect } from "react";

function useAdBanner(adUnitIdx: number) {
  const unit = ["DAN-zd0pXpmaWkUx1a4p","DAN-mItNNPWEO6ft8m0G"];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/kas/static/ba.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const gloabalAdfit = window.adfit;
      if (gloabalAdfit) gloabalAdfit.destroy(unit[adUnitIdx]);
      document.body.removeChild(script);
    }
  }, [adUnitIdx]);

  return unit[adUnitIdx];
}

export default useAdBanner;