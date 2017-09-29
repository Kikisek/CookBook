$(document).ready(function(){
    $("#addForm").on("click", "#addIngredientBtn", function(){
        var newIngredientsForm = $(".ingredientsForm").last().clone();
        newIngredientsForm.find("input").val("");
        $(".ingredientsForm").last().after(newIngredientsForm);
    });
    $("#addForm").on("click", ".removeIngredientBtn", function(){
        if ($(".ingredientsForm").length > 1){
        $(this).parent().parent().remove();
        } else {
            $(".ingredientsForm").find("input").val("");
            $(".ingredientsForm").find("select").val("g");
        }
    });
    $("#recipesCardContainer").on("click", "#chevron-down", function(){
        $(this).siblings(".card-text").slideToggle(function(){
            $(this).siblings("#chevron-up").toggleClass("hidden");
        });
        $(this).toggleClass("hidden");
    });
    $("#recipesCardContainer").on("click", "#chevron-up", function(){
        $(this).siblings(".card-text").slideToggle(function(){
            $(this).siblings("#chevron-down").toggleClass("hidden");
        });
        $(this).toggleClass("hidden");
    });
});