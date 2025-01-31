const getBookbyid = bookId => {
    return fetch().then(response => {
      if(!response.ok){
      throw new Error(response.status)
      }
      return response.json();
    });
  };

  const getBookid = bookId => {
    return fetch().then(response => {
      if(!response.ok){
        throw new Error(response.status)
      }
      return response.json();
    });
  };

  const getBook = bookId => {
    return fetch().then(response => {
      if(!response.ok){
        throw new Error(response.status)
      }
      return response.json()
    });

  };

  getBookid(2) 
  .then(data => {
    console.log(data);
  }) 
  .catch(err => {
    console.log(err);
  });

  // ------------------Method POST------------------------------------


  const addBook = bookInfo => {
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(bookInfo),
      headers: {
        'content-type': 'json'
      }
    }
  }
  addBook({
    title: 'Name',
    author: "Person",
    genres: "horror",
    rating: 9,
  })  



  // --------------------------------------------Update (PUT/PATH)----------------------------------------------

  const updatebookById = (bookInfoById, bookId) => {
    const fetchOption = {
    method: 'PUT',
    body: JSON.stringify(bookInfoById),
    headers: {
     'content-type': 'application/json',
    },
    };

    return fetch('https://6788776.ffrg.rggr/books/${bookId}', {}).then(response => {
   if(!response.ok) {
    throw new Error(response.status)
   }

   return response.json();
    });
  };

  updatebookById({ title: 'Some books' }, 9)
   .then(data => {
    console.log(data);
   })
   .catch(err => {
    console.log(err);
   });

   // ---------------------------------------------------------------DELETE-----------------------------------------------------------------------


   const deletedByID =  bookID => {
    return fetch().then( response => {
      if(!response.ok){
      throw new Error(response.status)
      }
      return response.json();
    });
   };
 