// ENQUIRY FORM

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const enquiryType = document.getElementById("enquiryType").value;

        if(name === "" || email === ""){
            alert("Please complete all required fields.");
            return;
        }

        let response = "";

        switch(enquiryType){
            case "cake":
                response = "Custom cakes start from R

                const searchBox = document.getElementById("searchBox");

if (searchBox) {

searchBox.addEventListener("keyup", function() {

const filter = this.value.toLowerCase();
const products = document.querySelectorAll("#productList li");

products.forEach(function(product) {

if(product.textContent.toLowerCase().includes(filter)){
product.style.display = "";
}
else{
product.style.display = "none";
}

});

});

}