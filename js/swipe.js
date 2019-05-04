var main_con = document.getElementById('main_con');
var right_con = document.getElementById('right_con');
var gen_con = document.getElementById('gen_con');

// create a simple instance
// by default, it only adds horizontal recognizers

//gen con
var gen_con = new Hammer(gen_con);

gen_con.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
// swipe : swipeleft swiperight swipeup swipedown

gen_con.on("swipeleft", function(ev) {
    right_con.classList.add("focus");
    main_con.classList.add("outside");

});


gen_con.on("swiperight", function(ev) {
    right_con.classList.add("outside");
    main_con.classList.add("focus");
    right_con.classList.remove("focus");
    main_con.classList.remove("outside");
});

