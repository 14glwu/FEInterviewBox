function IsBalanced_Solution(pRoot)
{
    return TreeDepth(pRoot)!=-1;
}
function TreeDepth(pRoot){
    if(pRoot==null) return 0;
    let leftLen=TreeDepth(pRoot.left);
    if(leftLen==-1)
        return -1;
    let rightLen=TreeDepth(pRoot.right);
    if(rightLen==-1)
        return -1;
    return Math.abs(leftLen-rightLen)>1?-1:Math.max(leftLen,rightLen)+1;
}