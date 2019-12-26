const numWays = (m, n) => {
    if(m === 0 && n == 0) {
        return 1;
    }

    const top = m - 1;
    const left = n - 1;

    return (top >= 0 ? 1 + numWays(top) : 0) + (left >= 0 ? 1 + numWays(left) : 0)
}

console.log(numWays(3,3));

const numWaysDp = (m,n) => {


    const ways = new Array(m);
    for(let i=0;i<m;i++) {
        ways[i] = new Array(n);
    }

    for(let i=0;i<m;i++) {
        ways[0][i] = 1;
    }
    for(let j=0;j<n;j++) {
        ways[j][0] = 1;
    }
    ways[0][0] = 0;

    for(let i=1;i<m;i++) {
        for(let j=1;j<n;j++) {
            ways[i][j] = (i - 1 >= 0 ? ways[i-1][j] : 0) + (j - 1 >= 0 ? ways[i][j-1] : 0)
            
        }
    }

    return ways[m-1][n-1]
}

console.log(numWaysDp(3,3));
