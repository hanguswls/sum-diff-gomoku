import { useEffect } from "react";

function useAdBanner(adUnitIdx: number) {
  // 세로로 긴 광고, 세로로 긴 광고, 가로로 긴 광고 순서
  const unit = ["DAN-zd0pXpmaWkUx1a4p","DAN-mItNNPWEO6ft8m0G", "DAN-ibLQcmhPDol10Hqw"];

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