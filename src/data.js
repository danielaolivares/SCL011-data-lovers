window.sort = {
    order: (recoverValues,sortOrder) =>{
      let sortChampion;
      if (sortOrder==="AZ"){
        sortChampion= recoverValues.sort((a,b)=>{
          return a.name.localeCompare(b.name)
        })
      }else if(sortOrder==="ZA"){
        sortChampion=recoverValues.sort((a,b)=>{
          return(b.name-a.name);
        })
      }
     return sortChampion;   
      }
    }
  window.filter = {
    tags: (recoverValues,condition) =>{
      const champFilter = recoverValues.filter(element => {
        return element.tags.includes(condition);
      });
      return champFilter;  
    }
  }
  
  