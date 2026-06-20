
function buySellStock(prices) {
    let maxProfit = 0;
    let bestBuy = prices[0];

    for(let i = 1; i < prices.length; i++){
        if(prices[i] < bestBuy){
            bestBuy = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - bestBuy)
        }
    }
    return maxProfit        
}

console.log(buySellStock([7,1,5,3,8,14]))