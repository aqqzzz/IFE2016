/**
 * Created by 张文玘 on 2017/4/18.
 */
Array.prototype.insertion = function(arr){
    var returnArr = [];
    for(var i = 0; i < arr.length; i++){
        if(i==0){
            returnArr.push(arr[i]);
        }else{
            if(arr[i]<returnArr[i-1]){
                var j = i;
                while(j!=0&&arr[i]<returnArr[j]){
                    j--;
                }
                returnArr
            }

        }
    }

    function insert(index, )
}