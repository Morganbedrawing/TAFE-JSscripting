// Javascript for Course Purchasing and enrollment system	
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}
function ready() {
	var removeCartItemButtons = document.getElementsByClassName('btn-danger')
	for (var i = 0; i < removeCartItemButtons.length; i++) {
		var button = removeCartItemButtons[i]
		button.addEventListener('click', removeCartItem)
	}
	var quantityInputs = document.getElementsByClassName('cart-quantity-input')
	for (var i = 0; i < quantityInputs.length; i++) {
		var input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
	}
	var addToCartButtons = document.getElementsByClassName('shop-item-button')
	for (var i = 0; i < addToCartButtons.length; i++) {
		var button = addToCartButtons[i]
		button.addEventListener('click', addToCartClicked)
	}
	var purchaseButton = document.getElementsByClassName('btn-purchase')[0];
	if (purchaseButton) {
		purchaseButton.addEventListener('click', purchaseClicked);
	}
}
function purchaseClicked() {
	alert('Thank you for your purchase')
	var cartItems = document.getElementsByClassName('cart-items')[0]
	while (cartItems.hasChildNodes()) {
		cartItems.removeChild(cartItems.firstChild)
	}
	updateCartTotal()
}
function removeCartItem(event) {
	var buttonClicked = event.target
	buttonClicked.parentElement.parentElement.remove()
	updateCartTotal()
}
function quantityChanged(event) {
	var input = event.target
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1
	}
	updateCartTotal()
}
function addToCartClicked(event) {
	var button = event.target
	var shopItem = button.parentElement.parentElement
	var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
}

document.addEventListener('DOMContentLoaded', function() {
    const enrollButtons = document.querySelectorAll('.course-item-button');
    enrollButtons.forEach(function(btn) {
        if (btn) {
            btn.addEventListener('click', function() {
                const courseTitle = this.closest('.course-item').querySelector('.course-item-title').textContent;
                alert('You have selected to enroll in: ' + courseTitle);
            });
        }
    });
});