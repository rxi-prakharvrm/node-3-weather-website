console.log("Client side javascript is loaded");

const address = document.querySelector("input")
const submitBtn = document.querySelector(".submit-btn")
const messageFirst = document.querySelector("#message-1")
const messageSecond = document.querySelector("#message-2")
const loader = document.querySelector(".loader")
const weatherDataCtr = document.querySelector(".weather-data-ctr")
const weatherImg = document.querySelector(".weather-img")

submitBtn.addEventListener("click", (e) => {
    loader.style.display = "block"
    weatherDataCtr.style.display = "none"
    fetch("/weather?address=" + address.value).then((response) => {
        response.json().then((data) => {            
            loader.style.display = "none"
            weatherDataCtr.style.display = "block"
            weatherImg.src = data.weatherIcon
            messageFirst.textContent = data.location
            messageSecond.textContent = data.forecast
        })
    })
})