// const menuBtn = document.getElementById('menu-btn');
// const mobileMenuEl = document.getElementById('mobile-menu')

// menuBtn.addEventListener('click', function(){
//     menuBtn.children[0].classList.toggle("hidden")
//     const menuCloseBtn = document.getElementById('close-icon')
//     menuCloseBtn.classList.toggle("hidden")
//     mobileMenuEl.classList.toggle("hidden")
//     mobileMenuEl.classList.toggle("flex")
// })

const selectedSeatEl = document.getElementById('selected-seat')
const totalBookedEl = document.getElementById('total-booked')
const availableSeatEl = document.getElementById('available-seat')
const totalPriceEl = document.getElementById('total-price')
const couponFieldEl = document.getElementById('coupon-field')
const couponBtnEl = document.getElementById('coupon-btn')

let selectedSeat = []
let totalPrice = 0

function handleSelectSeat(e){
    const value = e.innerText
    if (selectedSeat.includes(value)) {
        return alert("Seat already added")
    }


    e.classList.add("bg-primary")
    e.classList.add("text-white")

    selectedSeat.push(e.innerText);
    totalBookedEl.innerText = selectedSeat.length;

    // Decrease seat 
    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    const newAvailable = availableSeatValue -1
    availableSeatEl.innerText = newAvailable


    selectedSeatEl.innerHTML += `
    <li class="text-base font-normal flex justify-between">
    <span>${e.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>
    `

    // Update total price 
    totalPrice += 550
    totalPriceEl.innerText = totalPrice.toFixed(2)

    //active coupon button
    if (selectedSeat.length > 3) {
        couponBtnEl.removeAttribute('disabled')
        couponFieldEl.removeAttribute('disabled')
    }


}