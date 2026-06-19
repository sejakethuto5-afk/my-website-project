// ENQUIRY FORM VALIDATION

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let enquiryType = document.getElementById("enquiryType").value;

        if (name === "" || email === "") {
            alert("Please fill in all required fields.");
            return;
        }

        let response = "";

        switch(enquiryType) {
            case "cake":
                response = "Custom cakes start from R350.";
                break;
            case "bread":
                response = "Fresh bread is available daily.";
                break;
            case "cookies":
                response = "Cookie orders start from R80 per dozen.";
                break;
            default:
                response = "Thank you for your enquiry.";
        }

        document.getElementById("response").innerHTML = response;
    });
}

// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

        let email = document.getElementById("contactEmail").value;

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });
}

// PRODUCT SEARCH

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function() {

        let filter = this.value.toLowerCase();
        let items = document.querySelectorAll("#productList li");

        items.forEach(function(item) {

            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    });

}