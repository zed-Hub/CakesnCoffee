$(function() {
    $('#homeSection').show();
    $('#cakesSection').hide();
    $('#coffeeSection').hide();

    $('#home .nav-link').on('click', () => {
        $('#home').addClass('active');
        $('#cakes').removeClass('active');
        $('#coffee').removeClass('active');

        $('#homeSection').show();
        $('#cakesSection').hide();
        $('#coffeeSection').hide();
    });

    $('#cakes .nav-link, #checkoutCakes').on('click', () => {
        $('#home').removeClass('active');
        $('#cakes').addClass('active');
        $('#coffee').removeClass('active');
        
        $('#homeSection').hide();
        $('#cakesSection').show();
        $('#coffeeSection').hide();
    });

    $('#coffee .nav-link, #checkoutCoffee').on('click', () => {
        $('#home').removeClass('active');
        $('#cakes').removeClass('active');
        $('#coffee').addClass('active');
        
        $('#homeSection').hide();
        $('#cakesSection').hide();
        $('#coffeeSection').show();
    });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $('#homeSection').show();
    $('#cakesSection').hide();
    $('#coffeeSection').hide();
    
    //cakes
    changePrice(".dropdownItem1", "#dropdownMenuButton1", ".cake1-price");
    changePrice(".dropdownItem2", "#dropdownMenuButton2", ".cake2-price", 300, 600, 900);
    changePrice(".dropdownItem3", "#dropdownMenuButton3", ".cake3-price");
    changePrice(".dropdownItem4", "#dropdownMenuButton4", ".cake4-price", 200, 400, 600);
    changePrice(".dropdownItem5", "#dropdownMenuButton5", ".cake5-price");
    changePrice(".dropdownItem6", "#dropdownMenuButton6", ".cake6-price", 400, 800, 1200);

    //coffee
    changePrice(".dropdownItem-coffee1", "#dropdownMenuButton-coffee1", ".price-coffee1", 150, 165, 175);
    changePrice(".dropdownItem-coffee2", "#dropdownMenuButton-coffee2", ".price-coffee2", 170, 180, 190);
    changePrice(".dropdownItem-coffee3", "#dropdownMenuButton-coffee3", ".price-coffee3");
    changePrice(".dropdownItem-coffee4", "#dropdownMenuButton-coffee4", ".price-coffee4", 165, 175, 185);
    changePrice(".dropdownItem-coffee5", "#dropdownMenuButton-coffee5", ".price-coffee5", 170, 180, 190);
    changePrice(".dropdownItem-coffee6", "#dropdownMenuButton-coffee6", ".price-coffee6", 100, 125, 150);
    changePrice(".dropdownItem-coffee7", "#dropdownMenuButton-coffee7", ".price-coffee7");
    changePrice(".dropdownItem-coffee8", "#dropdownMenuButton-coffee8", ".price-coffee8", 160, 180, 200);
    changePrice(".dropdownItem-coffee9", "#dropdownMenuButton-coffee9", ".price-coffee9", 165, 180, 195);

    
});


function changePrice(dropdownItem, dropdownMenuButton, item, small, medium, large) {
    let smallPrice="P"+small;
    let mediumPrice="P"+medium;
    let largePrice="P"+large;

    if (small == null){
        smallPrice="P"+250;
    } if(medium == null){
        mediumPrice="P"+450;
    } if(large == null){
        $(dropdownMenuButton).val("Large");
        largePrice="P"+995;
        $(item).text(largePrice);
    } else if (large != null) {
        $(dropdownMenuButton).val("Large");
        largePrice="P"+large;
        $(item).text(largePrice);
    }      

    $(".dropdown-menu " + dropdownItem).click(function(){    
        $(dropdownMenuButton).text($(this).text());
        $(dropdownMenuButton).val($(this).text());

        if ($(dropdownMenuButton).text() == "Small") {
            $(item).text(smallPrice);
        } else if ($(dropdownMenuButton).text() == "Medium") {
            $(item).text(mediumPrice);
        } else if ($(dropdownMenuButton).text() == "Large") {
            $(item).text(largePrice);
        }
    });
}