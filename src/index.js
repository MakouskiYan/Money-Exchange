// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // it's for dividing without remainder
    function divide(a,b){
    return (a - (a % b)) / b;
    }
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }else if(currency<1){
        return {};
    }else{
        var h=q=d=n=p=0;
        //this is pocket -- it's for how much we count already ;)
        var pocket = h*50+q*25+d*10+n*5+p*1;
        //we check how much quantity of H we can took from pocket, after that we 
        //reduce this quantity*50 from primary summ for counting how much we should give of Quarters
        // and again and again...
        h = (divide(currency,50) === 0) ?  0 :  divide(currency,50);
        pocket = h*50+q*25+d*10+n*5+p*1;
        q = (divide(currency-pocket,25) == 0) ? 0 :  divide(currency-pocket,25);
        pocket = h*50+q*25+d*10+n*5+p*1;
        d = (divide(currency-pocket,10) == 0) ?  0 : divide(currency-pocket,10);
        pocket = h*50+q*25+d*10+n*5+p*1;
        n = (divide(currency-pocket,5) == 0) ? 0 : divide(currency-pocket,5);
        pocket = h*50+q*25+d*10+n*5+p*1;
        p = currency - pocket;
        var obj = {
            "H": h,
            "Q": q,
            "D": d,
            "N": n,
            "P": p,
            }
        for (k in obj){
            if(obj[k]===0){
                delete obj[k];
            }
        }
        return obj;
    }
}
