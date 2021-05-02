function billingFunction(){
	if (document.getElementById("same").checked){
		get_shipping_name = document.getElementById("shippingName").value;
		get_shipping_zip = document.getElementById("shippingZip").value;
		document.getElementById("billingName").value = get_shipping_name;
		document.getElementById("billingZip").value = get_shipping_zip;
	}
	else{
		document.getElementById("billingName").value = "";
		document.getElementById("billingZip").value = "";
	}
}
	
	
	