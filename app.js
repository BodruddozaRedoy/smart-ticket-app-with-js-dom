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
const defaultTextEl = document.getElementById('default-text')
const grandTotalEl = document.getElementById('grand-total')
const phoneNumberEl = document.getElementById('phone-number')
const nextButtonEl = document.getElementById('next-btn')
const formShowEl = document.getElementById('form-show')

let selectedSeat = []
let totalPrice = 0



function handleSelectSeat(e){
    const value = e.innerText
    if (selectedSeat.includes(value)) {
        return alert("Seat already added")
    }

    if (selectedSeat.length > 3) {
        return alert("Reached Your Limit")
    }

    // remove default text 
    defaultTextEl.classList.add("hidden")


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

    if (totalPrice !== 0) {
        formShowEl.classList.remove("hidden")
    }

}

// coupon button function 
document.getElementById('coupon-btn').addEventListener('click', function (){
    const  couponInputValue = couponFieldEl.value;
    let couponSave = 0

    if (couponInputValue !== 'NEW50' && couponInputValue !== 'Couple 20') {
        alert('Your coupon code is not valid')
        return
    }
    if (couponInputValue === "NEW50") {
        couponSave = totalPrice * .15
    }
    else if(couponInputValue === "Couple 20"){
        couponSave = totalPrice * .20
    }

    const showCouponPiceEl = document.getElementById('show-coupon-price')
    showCouponPiceEl.innerHTML = `
    <p>Discount</p>
    <p>
    <span>BDT:</span>
    <span>-${couponSave.toFixed(2)}</span>
    </p>
    `

    const granTotalValue = totalPrice - couponSave
    grandTotalEl.innerText = granTotalValue.toFixed(2)
})

phoneNumberEl.addEventListener('input',function(e){
    const inputValue = e.target.value
    if (inputValue.length >= 11) {
    nextButtonEl.removeAttribute('disabled')
        
    }
})

document.getElementById('btn-container').addEventListener('click', function(){
    window.location.reload()
})