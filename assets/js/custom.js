var event_gallery_swiper = new Swiper('.event-gallery__swiper', {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 25,
    navigation: {
        nextEl: ".event-gallery__swiper-container .swiper-button-next",
        prevEl: ".event-gallery__swiper-container .swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 35,
        },
    },
});

// Fetch crypto data
fetch('https://api.coinlore.net/api/tickers/')
    .then(response => response.json())
    .then(data => {
        const tickers = data.data;
        

        // Bitcoin
        const bitcoinPriceUSDDiv = document.getElementById('bitcoin-price-usd');
        const bitcoinSymbolDiv = document.getElementById('bitcoin-symbol');
        const bitcoinNameDiv = document.getElementById('bitcoin-name');
        const bitcoinPercentDiv = document.getElementById('bitcoin-percent');
        const bitcoinTicker = tickers.find(ticker => ticker.nameid === 'bitcoin');
        if (bitcoinTicker) {
            const bitcoinName = bitcoinTicker.name.toUpperCase();
            const bitcoinSymbol = bitcoinTicker.symbol;
            const bitcoinPriceUSD = bitcoinTicker.price_usd;
            const bitcoinPercent = bitcoinTicker.percent_change_24h;


            bitcoinSymbolDiv.innerHTML = `${bitcoinSymbol}`;
            bitcoinPriceUSDDiv.innerHTML = `$${bitcoinPriceUSD}`;
            bitcoinNameDiv.innerHTML = `${bitcoinName}`;
            if(parseFloat(bitcoinPercent) < 0) {
                bitcoinPercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-down crypto__percentage-icon"></i> ${bitcoinPercent}%`;
                bitcoinPercentDiv.classList.add('crypto__percentage--success');
                
            } else {
                bitcoinPercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-up crypto__percentage-icon"></i>  ${bitcoinPercent}%`;
                bitcoinPercentDiv.classList.add('crypto__percentage--success');
            }
            
        }

        // Ethereum
        const ethPriceUSDDiv = document.getElementById('eth-price-usd');
        const ethSymbolDiv = document.getElementById('eth-symbol');
        const ethNameDiv = document.getElementById('eth-name');
        const ethPercentDiv = document.getElementById('eth-percent');
        const ethTicker = tickers.find(ticker => ticker.nameid === 'ethereum');
        if (ethTicker) {
            const ethName = ethTicker.name.toUpperCase();
            const ethSymbol = ethTicker.symbol;
            const ethPriceUSD = ethTicker.price_usd;
            const ethPercent = ethTicker.percent_change_24h;


            ethSymbolDiv.innerHTML = `${ethSymbol}`;
            ethPriceUSDDiv.innerHTML = `$${ethPriceUSD}`;
            ethNameDiv.innerHTML = `${ethName}`;
            if(parseFloat(ethPercent) < 0) {
                ethPercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-down crypto__percentage-icon"></i> ${ethPercent}%`;
                ethPercentDiv.classList.add('crypto__percentage--success');
                
            } else {
                ethPercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-up crypto__percentage-icon"></i>  ${ethPercent}%`;
                ethPercentDiv.classList.add('crypto__percentage--success');
            }
            
        }

        // Ripple
        const ripplePriceUSDDiv = document.getElementById('ripple-price-usd');
        const rippleSymbolDiv = document.getElementById('ripple-symbol');
        const rippleNameDiv = document.getElementById('ripple-name');
        const ripplePercentDiv = document.getElementById('ripple-percent');
        const rippleTicker = tickers.find(ticker => ticker.nameid === 'ripple');
        if (rippleTicker) {
            const rippleName = rippleTicker.name.toUpperCase();
            const rippleSymbol = rippleTicker.symbol;
            const ripplePriceUSD = rippleTicker.price_usd;
            const ripplePercent = rippleTicker.percent_change_24h;


            rippleSymbolDiv.innerHTML = `${rippleSymbol}`;
            ripplePriceUSDDiv.innerHTML = `$${ripplePriceUSD}`;
            rippleNameDiv.innerHTML = `${rippleName}`;
            if(parseFloat(ripplePercent) < 0) {
                ripplePercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-down crypto__percentage-icon"></i> ${ripplePercent}%`;
                ripplePercentDiv.classList.add('crypto__percentage--success');
                
            } else {
                ripplePercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-up crypto__percentage-icon"></i>  ${ripplePercent}%`;
                ripplePercentDiv.classList.add('crypto__percentage--success');
            }
            
        }

        // Litecoin
        const litecoinPriceUSDDiv = document.getElementById('litecoin-price-usd');
        const litecoinSymbolDiv = document.getElementById('litecoin-symbol');
        const litecoinNameDiv = document.getElementById('litecoin-name');
        const litecoinPercentDiv = document.getElementById('litecoin-percent');
        const litecoinTicker = tickers.find(ticker => ticker.nameid === 'litecoin');
        if (litecoinTicker) {
            const litecoinName = litecoinTicker.name.toUpperCase();
            const litecoinSymbol = litecoinTicker.symbol;
            const litecoinPriceUSD = litecoinTicker.price_usd;
            const litecoinPercent = litecoinTicker.percent_change_24h;


            litecoinSymbolDiv.innerHTML = `${litecoinSymbol}`;
            litecoinPriceUSDDiv.innerHTML = `$${litecoinPriceUSD}`;
            litecoinNameDiv.innerHTML = `${litecoinName}`;
            if(parseFloat(litecoinPercent) < 0) {
                litecoinPercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-down crypto__percentage-icon"></i> ${litecoinPercent}%`;
                litecoinPercentDiv.classList.add('crypto__percentage--success');
                
            } else {
                litecoinPercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-up crypto__percentage-icon"></i>  ${litecoinPercent}%`;
                litecoinPercentDiv.classList.add('crypto__percentage--success');
            }
            
        }

        // Bitcoin Cash
        const BitcoinCashPriceUSDDiv = document.getElementById('bitcoin-cash-price-usd');
        const BitcoinCashSymbolDiv = document.getElementById('bitcoin-cash-symbol');
        const BitcoinCashNameDiv = document.getElementById('bitcoin-cash-name');
        const BitcoinCashPercentDiv = document.getElementById('bitcoin-cash-percent');
        const BitcoinCashTicker = tickers.find(ticker => ticker.nameid === 'bitcoin-cash-sv');
        if (BitcoinCashTicker) {
            const BitcoinCashName = BitcoinCashTicker.name.toUpperCase();
            const BitcoinCashSymbol = BitcoinCashTicker.symbol;
            const BitcoinCashPriceUSD = BitcoinCashTicker.price_usd;
            const BitcoinCashPercent = BitcoinCashTicker.percent_change_24h;


            BitcoinCashSymbolDiv.innerHTML = `${BitcoinCashSymbol}`;
            BitcoinCashPriceUSDDiv.innerHTML = `$${BitcoinCashPriceUSD}`;
            BitcoinCashNameDiv.innerHTML = `${BitcoinCashName}`;
            if(parseFloat(BitcoinCashPercent) < 0) {
                BitcoinCashPercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-down crypto__percentage-icon"></i> ${BitcoinCashPercent}%`;
                BitcoinCashPercentDiv.classList.add('crypto__percentage--success');
                
            } else {
                BitcoinCashPercentDiv.innerHTML = `<i class="fa-solid fa-circle-chevron-up crypto__percentage-icon"></i>  ${BitcoinCashPercent}%`;
                BitcoinCashPercentDiv.classList.add('crypto__percentage--success');
            }
            
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });