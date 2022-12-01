#!/usr/bin/env node

function roll(numsides,numdice,numrolls) {

    let res = [];
    
    for (let i=0; i<numrolls; i++) {
        let min = 1; 
        let max = numsides + 1; 
        let sum = 0; 
        for (let n = 0; n<numdice; n++) {
            let num = Math.floor(Math.random() * (max - min) + min);
            sum = sum + num; 
        }
    res.push(sum); 
  }

    return {
        sides: numsides,
        dice: numdice,
        rolls: numrolls,
        results: res
      };
}

export { roll };