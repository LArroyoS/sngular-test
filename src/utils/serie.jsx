class series {

    constructor(){}

    primo(n) { 
        let primos = []; 
        for (let i = 2; primos.length < n; i++) { 
            let esPrimo = true; 
            for (let j = 0; j < primos.length; j++) { 
                if (i % primos[j] === 0) { 
                    esPrimo = false; break; 
                } 
            } 
            if (esPrimo) { 
                primos.push(i); 
            } 
        }
        return primos[n-1]; 
    }

    triangular(n){
        return (n*(n+1))/2
    }

    fibonacci(n) {
        let fib = [0, 1]
        for (let i = 2; i <= n; i++){
            fib[i] = fib[i-1] + fib[i-2]
        }
        return fib[n]
    }

}

export default series;