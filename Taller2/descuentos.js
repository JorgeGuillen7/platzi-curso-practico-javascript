const price = 50;
const discount = 10;
const couponList = [
	{ code: '4PR3ND3R', discount: 10 },
	{ code: 'J4V4SCR1PT', discount: 15 },
	{ code: 'CR7', discount: 18 },
	{ code: 'PL4TZ1', discount: 20 },
];

const priceWithDiscount = (price, discount) => {
	let finalPrice = (price * (100 - discount)) / 100;
	return finalPrice;
};

const getPriceWithDiscount = () => {
	let inputPrice = document.getElementById('priceInput');
	let priceValue = inputPrice.value;
	let inputDiscount = document.getElementById('discountInput');
	let discountValue = inputDiscount.value;

	let finalPrice = priceWithDiscount(priceValue, discountValue);

	let result = document.getElementById('result');
	result.innerHTML = `El precio con el <strong>$${discountValue}%</strong> de descuento es de <strong>$${finalPrice}</strong>`;
	result.style.color = 'inherit';
};

const getPriceWithCoupon = () => {
	let inputPrice = document.getElementById('priceInput');
	let priceValue = inputPrice.value;
	let couponInput = document.getElementById('couponInput');
	let couponValue = couponInput.value;
	let validCoupon = couponList.some((coupon) => {
		return coupon.code === couponValue;
	});

	if (validCoupon === true) {
		let findCoupon = couponList.find((coupon) => {
			return coupon.code === couponValue;
		});
		let finalPrice = priceWithDiscount(priceValue, findCoupon.discount);

		let result = document.getElementById('result');
		result.innerHTML = `El precio con el cupón <strong>${couponValue}</strong> es de <strong>$${finalPrice}</strong>`;
		result.style.color = 'inherit';
	} else {
		let result = document.getElementById('result');
		result.innerHTML = `El cupón <strong>${couponValue}</strong> no es válido`;
		result.style.color = 'red';
	}
};
