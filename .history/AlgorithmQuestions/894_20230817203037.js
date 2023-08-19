/* 
    894. 所有可能的真二叉树
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    // dp数组：dp[i]表示,i个节点构成的所有真二叉树
    let dp = Array.from({length:n+1},()=>[])

    // dp数组初始化
    dp[1] = [[0,null,null]]
    dp[3] = [[0,0,0]]
    dp[5] = [[0,0,0,0,0,null,null], [0,0,0,null,null,0,0]]

    // 遍历
    for(let i=7; i<=n; i+=2){
        // 递归公式
        // 左子树节点个数
        for(let j=1; j<i; j+=2){
            for (const leftTree of dp[j]) {
                for (const rightTree of dp[i-1-j]) {
                    // console.log(leftTree,rightTree)
                    // 遍历节点数量
                    let count = 1
                    let left = 0, right = 0
                    let Tree = []
                    // 根节点
                    Tree.push(0)
                    
                    while(left < leftTree.length && right < rightTree.length){

                    }
                    while(left < leftTree.length){
                        Tree.push(leftTree[left])
                        left++
                    }
                    while(right < rightTree.length){
                        Tree.push(rightTree[right])
                        right++
                    }

                    //     for(let leftPush=0; leftPush<count; leftPush++){
                    //         Tree.push(leftTree[left])
                    //         left++
                    //     }
                    //     for(let right=0; leftPush<count; leftPush++){
                    //         Tree.push(leftTree[left])
                    //         left++
                    //     }
                    //     Tree.push(rightTree[right])
                    //     right++
                    // }
                    // dp[i].push(Tree)
                }
            }
        }
    }
};
console.log(allPossibleFBT(7))