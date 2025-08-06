function getElemt() {
  let currency1 = document.querySelector(".select1").value;
  let currency2 = document.querySelector(".select2").value;
  let currency1Number = document.querySelector(".num1").value;
  if (currency1Number === "") {
    alert("Please enter amount");
  }
  while (currency1Number !== "") {
    if (currency1 === "USD" && currency2 === "INR") {
      let currencyExchange = currency1Number * 87;
      document.getElementById("result1").innerHTML = `${currencyExchange}`;
    } else if (currency1 === "INR" && currency2 === "USD") {
      let currencyExchange = (currency1Number / 87).toFixed(2);
      document.getElementById("result1").innerHTML = `${currencyExchange}`;
    }

    if (currency1 === "INR" && currency2 === "MWK") {
      let currencyExchange = currency1Number * 20;
      document.getElementById("result1").innerHTML = `${currencyExchange}`;
    } else if (currency1 === "MWK" && currency2 === "INR") {
      let currencyExchange = (currency1Number / 20).toFixed(2);
      document.getElementById("result1").innerHTML = `${currencyExchange}`;
    }

    if (currency1 === "USD" && currency2 === "MWK") {
      let currencyExchange = currency1Number * 1800;
      document.getElementById("result1").innerHTML = `${currencyExchange}`;
    } else if (currency1 === "MWK" && currency2 === "USD") {
      let currencyExchange = (currency1Number / 1800).toFixed(2);
      document.getElementById("result1").innerHTML = `${currencyExchange}`;
    }

    if (currency1 === currency2) {
      alert("You can't Exchange the same currency");
    }
  }
}
