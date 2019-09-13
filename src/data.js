    
    const filterChamp = (recoverValues,condition )=>{
        console.log(recoverValues );
        console.log(condition);
        const resultFilterChamp = recoverValues.filter(element  =>{
        return element.tags === condition
        });
        return resultFilterChamp;
    }
    