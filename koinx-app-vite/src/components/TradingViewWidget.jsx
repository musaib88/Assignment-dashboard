import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ symbol }) {
  const containerRef = useRef();

  useEffect(() => {
    const chartSymbol = `BINANCE:${symbol.toUpperCase()}USDT|1D`;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [[chartSymbol]],
      chartOnly: true,
      width: "100%",
      height: "100%",
      locale: "en",
      colorTheme: "light",
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: true,
      hideSymbolLogo: true,
      scalePosition: "left",
      scaleMode: "Normal",
      fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "14",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "no-values",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      lineWidth: 1,
      lineType: 0,
      dateRanges: ["1d|1", "5d|5", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
      lineColor: "rgba(49, 121, 245, 0.97)",
      topColor: "rgba(172, 229, 220, 0.57)",
      bottomColor: "rgba(187, 217, 251, 0.41)",
      color: "rgba(49, 121, 245, 1)"
    });

    if (containerRef.current.children.length > 0) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
