onmessage = (e) => {
    var data=JSON.parse(e.data)
    if(data.action=="GENERATE"){
        postMessage("GENERATED")
    }
  }