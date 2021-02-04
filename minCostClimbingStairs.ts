function minCostClimbingStairs(cost: number[]): number {
    let sum = 0
    let sum1 = cost[0]
    let sum2 = cost[1]

    for(let i = 2; i <= cost.length; i++) {
        let currentCost = i === cost.length ? 0 : cost[i]
        sum = Math.min(sum1, sum2) + currentCost
        sum1 = sum2
        sum2 = sum
    }
    return sum
};