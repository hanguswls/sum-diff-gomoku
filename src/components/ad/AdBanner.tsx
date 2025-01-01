import { useRef } from "react";
import { AdWrapper } from "./AdBanner.style";
import useAdBanner from "./useAdBanner";

function AdBanner({ adUnitIdx }: { adUnitIdx: number }) {
  const adRef = useRef<HTMLDivElement | null>(null);
  const unit = useAdBanner(adUnitIdx);
  const adDimensions = adUnitIdx === 2 ? { width: "320", height: "50" } : { width: "160", height: "600" };

  return (
    <AdWrapper ref={adRef} $adUnitIdx={adUnitIdx}>
      <ins
        className="kakao_ad_area"
        data-ad-unit={unit}
        data-ad-width={adDimensions.width}
        data-ad-height={adDimensions.height}
      ></ins>
    </AdWrapper>
  )
}

export default AdBanner;