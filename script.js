

function getTwoSum(arr){

    let compressArr = [];

    if(arr.length >= 2){
        let sum = arr[0] + arr[1];
        compressArr.push(sum);

        for(let i = 2; i < arr.length; i++){
            compressArr.push(arr[i]);
        }
    }

    console.log(compressArr+ ` compressedArr`);

    return compressArr;
    
}

function calculateMinCost() {
    let input = document.getElementById("rope-lengths").value;
    let splitted = input.split(",");
    console.log(splitted);

    let minCost = 0; 

    for(let x in splitted){
        splitted[x] = Number(splitted[x]);
    }

    splitted.sort();

    console.log(splitted);

    if(splitted.length == 1){
        minCost = splitted[0];
    }else{

        while(splitted.length > 1){
            let receivedArr = getTwoSum(splitted);
            // let receivedSum = getSum(splitted);
            

            console.log(receivedArr + `receivedArr`);

            minCost = minCost + receivedArr[0];

            console.log(minCost + `minCost`);

            let rearrangedArr = receivedArr.sort(function(a, b){
                return a - b;
            });

            console.log(rearrangedArr + `rearrangedArr`)

            splitted = rearrangedArr;

            console.log(splitted + `splitted`);
        }
        
    }


    console.log(`final ` + minCost);
    

    let result = document.getElementById("result");
    result.textContent = minCost;
    

    
  }  
  