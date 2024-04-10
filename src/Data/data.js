


useEffect(() => {
    fetch('https://www.reddit.com/r/popular/.json').then(res => {
      if(res.status != 200){
        console.log('ERROR');
        return; 
      }

      res.json().then(data => {
        if(data != null){
          console.log(data.data.children);
          setArticles(data.data.children);
        }
      })
    })
  }, []);


