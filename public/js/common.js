export { getUrlVars, dealWithForbiddenErrorCode, refreshToken, dealWithServerErrorCodes, dealWithAlreadyLoggedUser };

function refreshToken(){
  const url = '../api/v1/login/refresh';
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({refreshToken: window.sessionStorage.refreshToken})
  }
  fetch(url, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      if(data.error){
        throw "Could not refresh the token";
      }
      window.sessionStorage.accessToken = data.accessToken;
    })
    .catch((error) =>{
      console.error(error);
      return Promise.reject();
    });
}


/**
  * Function that gets the params in the url
  */
function getUrlVars(){
  let vars = [], hash;
  let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++){
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function dealWithForbiddenErrorCode(){
  $(location).prop('href', './index.html');
}

function dealWithServerErrorCodes(){
  $(location).prop('href', './index.html');
}

function dealWithAlreadyLoggedUser(){
  $(location).prop('href', './users.html');
}