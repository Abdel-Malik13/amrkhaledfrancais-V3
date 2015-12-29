/*
    - Clique sur btn ->
                        - le menu apparait
                        - le menu hamburger devient une croix

    - Clique sur croix ->
                        - le menu disparait
                        - la croix devient le menu hamburger



    Si (clique sur btn) {

        Alors le menu apparait
        le menu hamburger devient une croix
    } sinon si (clique sur croix) {
        la croix disparait et le menu hamburger apparait
        le menu disparait
}
*/

$(function(){
    $('.menu').on('click', '.btn', function(){
        $(this).toggleClass('test');
        $('.menu').toggleClass('mgl0');
        $('.corps').toggleClass('corps-width');
    });
});
