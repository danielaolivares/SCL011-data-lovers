     window.sort = {
        order: (recoverValues,sortOrder) =>{
          if (sortOrder=="az"){
            const sortChamp = recoverValues.sort((a,b)=>{
              return a.id.localeCompare(b.id);

            })
            return sortChamp;
          }
          else {
            const sortChampZ = recoverValues.sort((a,b)=>{
              return b.id.localeCompare(a.id);
            })
            return sortChampZ;        
          }
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
      
     