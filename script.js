const apiSdk = {
  timer: undefined,
  api: function() {
    // api call made
  },
  throttleApiCall: function(callback, interval) {
    if (this.timer) {
      return;
    }

    this.timer = setTimeout(() => {
      let counterDiv = document.getElementById('api-call-counter-th');
      counterDiv.innerHTML = parseInt(counterDiv.innerHTML) + 1;
      this.timer = undefined;
      callback();
    }, interval);
  },
  debounceApiCall: function(callback, silentPeriod) {
    clearInterval(this.timer);
    this.timer = setTimeout(() => {
      let counterDiv = document.getElementById('api-call-counter-db');
      counterDiv.innerHTML = parseInt(counterDiv.innerHTML) + 1;
      callback();
    }, silentPeriod);
  }
};

let inputText = document.getElementById('inputText');
inputText.addEventListener('input', function() {
  let counterDiv = document.getElementById('api-call-counter');
  counterDiv.innerHTML = parseInt(counterDiv.innerHTML) + 1;
  apiSdk.debounceApiCall(apiSdk.api, 200);
  //apiSdk.throttleApiCall(apiSdk.api, 200);
});
//
