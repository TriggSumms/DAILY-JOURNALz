

let entryCollection = [
 ]



 const getEntryData = () => {
     return fetch("http://localhost:8088/entryCollection").then(
         (triggResponse) => {
             return triggResponse.json()
         }
     )
         .then(
             (arrayOfEntry) => {
                 // 100 percent sure the data is back
                 entryCollection = arrayOfEntry
             }
         )
 }