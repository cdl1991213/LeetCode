/* 
    96. 不同的二叉搜索树
*/
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // dp数组：dp[i]表示，由i个j节点组成的不同二叉搜索树共有dp[i]种
    let dp = new Array(n+1).fill(0)

    // dp数组初始化
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    // 遍历
    for(let i=3; i<=n; i++){
        // 左子树节点个数
        for(let j=0; j<=i-1; j++){
            // 递归公式
            dp[i] += dp[j] * dp[i-j-1]
        }
    }
    return dp[n]
};