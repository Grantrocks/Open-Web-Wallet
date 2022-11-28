onmessage = (e) => {
    var data=JSON.parse(e)
    if(data.action=="GENERATE"){
        postMessage("GENERATED")
    }
  }