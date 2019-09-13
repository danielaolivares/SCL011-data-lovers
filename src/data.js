    
    const filterChamp = (DATA, condition)=>{
        const resultFilterChamp = DATA.filter(element  =>{
        return element.tags === condition;
        });
        return resultFilterChamp;
    }
    window.filterChamp = filterChamp;