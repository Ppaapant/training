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

  // ------------------------------------------------------


  const addBook = bookInfo => {
    const fetchOptions = {
      method: 'POST',
      body: bookInfo,
    }
  }
  addBook({
    title: 'Name',
    author: "Person",
    genres: "horror",
    rating: 9,
  })  



  