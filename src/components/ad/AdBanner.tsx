import { useRef } from "react";
import { AdWrapper } from "./AdBanner.style";
import useAdBanner from "./useAdBanner";

function AdBanner({ adUnitIdx }: { adUnitIdx: number }) {
  const adRef = useRef<HTMLDivElement | null>(null);
  const unit = useAdBanner(adUnitIdx);

  return (
    <AdWrapper ref={adRef} $adUnitIdx={adUnitIdx}>
      <ins
        className="kakao_ad_area"
        data-ad-unit={unit}
        data-ad-width="160"
        data-ad-height="600"
      ></ins>
    </AdWrapper>
  )
}

export default AdBanner;