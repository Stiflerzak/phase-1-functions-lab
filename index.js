// Code your solution in this file!
function distanceFromHqInBlocks(block){
    let distance;
    if(block < 42){
        distance = 42 - block;
    }
    else{
        distance = block - 42;
    }

   return distance; 
}

function distanceFromHqInFeet(block){
    let feet = distanceFromHqInBlocks(block) * 264;
    return feet;
}


function distanceTravelledInFeet(start, end){
    let distance = end - start;
    let feet = distance * 264;
    if(feet < 0){
        feet = feet * -1;
    }
    return feet;
}

function calculatesFarePrice(start, destination){
    let charges;
    let totalDistance = distanceTravelledInFeet(start, destination);
    if(totalDistance <= 400){
        return 0;
    }
    else if(totalDistance > 400 && totalDistance <= 2000){
        charges = ((totalDistance - 400) * 2) / 100;
        return charges;
    }
    else if(totalDistance > 2000 && totalDistance <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}