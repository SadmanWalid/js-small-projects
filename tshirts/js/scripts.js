
var products = {
    'white': {

        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg'
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'v-white-personalized.jpg'
        }
    },

    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg'
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'v-color-personalized.png'
        }
    }
}



// Search params

var search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
}


// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
// 1: above 1.000 units - 20% discount
// 2: above 500 units - 12% discount
// 3: above 100 units - 5% discount


// Solution:

$(function () {

    //id : white , colored , style , q150 , q190 


    //initial values

    search_params.quantity = $("#quantity").val();
    search_params.quality = $("#q150").attr("class").includes("selected") ? $("#q150").text() : $("#q190").text();
    search_params.color = $("#white").attr("class").includes("selected") ? $("#white").text() : $("#colored").text();
    search_params.style = $("#style").val();
    //image
    var imgSource;
    if (search_params.color == "white") {
        imgSource = search_params.style == "plain" ? "img/v-white.jpg" : "img/v-white-personalized.jpg";
        $("#photo-product").attr("src", imgSource);
    } else {

        imgSource = search_params.style == "plain" ? "img/v-color.jpg" : "img/v-color-personalized.png";
        //console.log(imgSource);
        $("#photo-product").attr("src", imgSource);

    }
    //result
    $("#result-style").text(search_params.style.charAt(0).toUpperCase() + search_params.style.slice(1));
    $("#result-quality").text(search_params.quality.charAt(0).toUpperCase() + search_params.quality.slice(1));
    $("#result-color").text(search_params.color.charAt(0).toUpperCase() + search_params.color.slice(1));
    $("#result-quantity").text(search_params.quantity.charAt(0).toUpperCase() + search_params.quantity.slice(1));

    //price
    calculatePrice();


    //quality 
    var qualityOfShirt;
    $("#q150").click(function () {

        //console.log("class " + $("#q150").attr("class").includes("selected"));
        var isSelected = $("#q150").attr("class").includes("selected");
        if (!isSelected) {
            $("#q150").toggleClass("selected");
            $("#q190").toggleClass("selected");
        }

        qualityOfShirt = $("#q150").text();
        search_params.quality = qualityOfShirt;
        //image changing
        imgSource = search_params.style == "plain" ? "img/v-white.jpg" : "img/v-white-personalized.jpg";
        $("#photo-product").attr("src", imgSource);
        //result changing
        $("#result-quality").text(search_params.quality.charAt(0).toUpperCase() + search_params.quality.slice(1));
        calculatePrice();

    });

    $("#q190").click(function () {

        var isSelected = $("#q190").attr("class").includes("selected");
        if (!isSelected) {
            $("#q150").toggleClass("selected");
            $("#q190").toggleClass("selected");

        }

        qualityOfShirt = $("#q190").text();
        search_params.quality = qualityOfShirt;
        //result changing
        $("#result-quality").text(search_params.quality.charAt(0).toUpperCase() + search_params.quality.slice(1));
      
        calculatePrice();

    });


    //color
    var colorOfShirt;
    $("#white").click(function () {

        //console.log("class " + $("#white").attr("class").includes("selected"));
        var isSelected = $("#white").attr("class").includes("selected");
        if (!isSelected) {
            $("#white").toggleClass("selected");
            $("#colored").toggleClass("selected");
        }

        colorOfShirt = $("#white").text();
        search_params.color = colorOfShirt;
        //image changing
        imgSource = search_params.style == "plain" ? "img/v-white.jpg" : "img/v-white-personalized.jpg";
        $("#photo-product").attr("src", imgSource);
        //result changing
        $("#result-color").text(search_params.color.charAt(0).toUpperCase() + search_params.color.slice(1));

        calculatePrice();

    });

    $("#colored").click(function () {

        //console.log("class " + $("#colored").attr("class").includes("selected"));
        var isSelected = $("#colored").attr("class").includes("selected");
        if (!isSelected) {
            $("#white").toggleClass("selected");
            $("#colored").toggleClass("selected");
        }

        colorOfShirt = $("#colored").text();
        search_params.color = colorOfShirt;
        imgSource = search_params.style == "plain" ? "img/v-color.jpg" : "img/v-color-personalized.png";
        //console.log(imgSource);
        $("#photo-product").attr("src", imgSource);

         //result changing
         $("#result-color").text(search_params.color.charAt(0).toUpperCase() + search_params.color.slice(1));

         calculatePrice();

    });

    //style  

    $("#style").change(function () {

        var style = $(this).val();
        search_params.style = style;

        //value showing
        $("#result-style").text(search_params.style.charAt(0).toUpperCase() + search_params.style.slice(1));

        //image changing 
        if (search_params.style == "plain") {
            imgSource = search_params.color == "White" ? "img/v-white.jpg" : "img/v-color.jpg";
            $("#photo-product").attr("src", imgSource);
        } else {
            imgSource = search_params.color == "White" ? "img/v-white-personalized.jpg" : "img/v-color-personalized.png";
            $("#photo-product").attr("src", imgSource);
        }

calculatePrice();
        //console.log($(this).val());
    });

    //quantity
    var quantityOfShirt;
    $("#quantity").change(function () {

        quantityOfShirt = $("#quantity").val();
        //console.log("q "+quantityOfShirt);
        search_params.quantity = quantityOfShirt;

        $("#result-quantity").text(search_params.quantity.charAt(0).toUpperCase() + search_params.quantity.slice(1));

        calculatePrice();
    })





   function calculatePrice(){
    
    var unitPrice,totalamount;
    
    if(search_params.quality.includes("Basic")){
        
        unitPrice = getUnitPriceFromObject();
        totalamount = unitPrice*  parseInt(search_params.quantity);
        
        totalamount=getTotalAmout(totalamount);
        
       /*  totalamount = search_params.quantity>100? totalamount-=totalamount*.05 :
         search_params.quantity>500? totalamount-=totalamount*.12 :
         search_params.quantity>1000? totalamount-=totalamount*.2 : totalamount;
        totalamount= totalamount.toFixed(2); */
        //console.log("t "+ totalamount);

        $("#total-price").text(totalamount);
        


    }else{

        unitPrice = getUnitPriceFromObject();
        unitPrice += unitPrice*.12;
        totalamount = unitPrice*  parseInt(search_params.quantity);
        totalamount=getTotalAmout(totalamount);
        $("#total-price").text(totalamount);
        
        
    }



   }
  
   function getTotalAmout(amount){
    
    amount = search_params.quantity>100? amount-=amount*.05 :
         search_params.quantity>500? amount-=amount*.12 :
         search_params.quantity>1000? amount-=amount*.2 :amount;
         amount= amount.toFixed(2);
         console.log("t "+ amount);

         return amount;

   }
   
 
   function getUnitPriceFromObject(){
    
     var color=search_params.color.toLocaleLowerCase() ,
     style =search_params.style,
     unitPrice;
    unitPrice = products[color][style]["unit_price"];
    //console.log(unitPrice);

    return unitPrice;



   }







});










