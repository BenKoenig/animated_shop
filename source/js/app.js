import gsap from "gsap";

//query selectors
const cartBtn = document.querySelectorAll('.j-cartBtn');
const favBtn = document.querySelectorAll('#j-favBtn')
const appearleft = document.querySelectorAll("#appearleft");
const appearright = document.querySelectorAll("#appearright");
const imgs = document.querySelectorAll('#j-img');
const cartNumber = document.querySelector('#j-cartNumber');
const favNumber = document.querySelector('#j-favNumber')
const hoverZoom = document.querySelectorAll('.hoverZoom');


//******* Banner *******
const tl = gsap.timeline({repeat:2});
tl.from('#text_1', {y:'100%', ease: "power4.out", duration:.5});
tl.to('#text_1', {y:'-100%', ease: "power4.out",  delay:1, duration:.5})
tl.from('#text_2', {y:'100%', ease: "power4.out", duration:.5}, "<");
tl.to('#text_2', {y:'-100%', delay:1, ease: "power4.out", duration:.5})
tl.from('#text_3, #frame', {y:'100%', ease: "power4.out", duration:.5}, "<");
tl.from('#frame', {autoAlpha: 0, duration:0}, "<")
tl.to('#frame, #text_3', {scale:1.5, rotate:-24, duration:2, ease: "poser1.out"}, "<")
tl.to('#frame, #text_3', {autoAlpha:0, duration:0})

tl.from('#world', {autoAlpha:0, scale:0.7, rotate:360});
tl.to('#world', {scale:10});
tl.from('#j-icon', {scale:0}, "<");
tl.from('#text_4', {autoAlpha:0})
tl.to('#j-icon, #world', {scale:0})
tl.to('#text_4', {delay:3})



// ******* Favorite button *******
//count of items that are favorited
let favCount = 0;
//array for every item that is favorited
let favorited = [];

for(let i = 0; i < favBtn.length; i++) {
    favorited[i] = false;
    favBtn[i].addEventListener('click', e => {
        const t = e.currentTarget;
        e.preventDefault();
        //checks if item is already favorited
        //every time the user favorites / unfavorites an item the icon on the navigation updates
        if(favorited[i] === false) {
            favCount++;
            favorited[i] = true;
            t.style.color = "red";
            gsap.from(favNumber, {scale:3});
            if (favCount === 0) {
                favNumber.textContent = "";
            } else {
                favNumber.textContent = favCount;
            }
        } else {
            favCount--;
            favorited[i] = false;
            t.style.color = "black";
            if (favCount === 0) {
                favNumber.textContent = "";
            } else {
                favNumber.textContent = favCount;
            }
        }
    })
}

// ******* Add to cart button *******
//array to check if items are already added to the cart 
let added = [];
//array for every shopping cart button
let tlBtn = [];
//number of items in the shopping cart
let shoppingCount = 0;

for(let i = 0; i < cartBtn.length; i++) {
    tlBtn.push(i);
    added[i] = false;

    //click event listener for every button
    cartBtn[i].addEventListener('click', e => {
        e.preventDefault();
        tlBtn[i] = gsap.timeline({});
        const t =  e.currentTarget;

        //checks if item was already added to the shopping cart
        if(added[i] === false) {
            added[i] = true;
            //Removes "Add to Cart" text => sparkle animation => Text updates to "Added!" =>
            //BG changes to red => Text changes to "Remove Item" 
            tlBtn[i].to(t, {autoAlpha:0, duration:.2});
            tlBtn[i].to(t.parentNode.querySelector('#j-sparkle'), {display:"flex", scale:.8, duration:.3})
            tlBtn[i].from(t.parentNode.querySelector('#j-sparkle'), {scale:0, duration:.3})
            tlBtn[i].set(t, {text:"Added!"});
            tlBtn[i].to(t, {autoAlpha:1})
            tlBtn[i].to(t, {x:"-100%",duration:0}, "+3");
            tlBtn[i].set(t, {text:"Remove Item"})
            tlBtn[i].to(t.parentNode, {backgroundColor:"red", duration:0})
            tlBtn[i].to(t, {x:"0",duration:.2});
            shoppingCount++;
            gsap.from(cartNumber, {scale:3});
            //every time the user adds/remove an item to the shopping cart
            //the icon in the navigation updates
            if (shoppingCount === 0) {
                cartNumber.textContent = "";
            } else {
                cartNumber.textContent = shoppingCount;
            }
        } else {
            added[i] = false;
            //Color changes back to original color => text changes back to "Add to cart"
            tlBtn[i].to(t.parentNode, {backgroundColor:"black", duration:0})
            tlBtn[i].to(t, {x:"100%", duration:.2});
            tlBtn[i].set(t, {text:"Add to cart"});
            tlBtn[i].to(t, {x:"-100%",duration:0});
            tlBtn[i].to(t, {x:0, duration:.2})
            shoppingCount--;
            if (shoppingCount === 0) {
                cartNumber.textContent = "";
            } else {
                cartNumber.textContent = shoppingCount;
            }
        }
    })
}

//Hover Scale Animation
for (const h of hoverZoom) {
    h.addEventListener('mouseenter', e => {
        //scales up item when user hovers
        e.target.style.transform = "scale(1.15)"
    })
    h.addEventListener('mouseleave', e => {
        //scales down item when user leaves item
        e.target.style.transform = "scale(1)"
    })
}


// ******* Load animations *******
gsap.from("#j-trendingTitle", {x:"-100%", duration:1});

//checks where the user is
const appears_cb = function(elm, cb){
    const onscroll = () => {
        if(elm.getBoundingClientRect().y - window.innerHeight < 0) {
            document.removeEventListener("scroll", onscroll);
            cb();
        }
    };
    document.addEventListener("scroll", onscroll);
};

//Items appear from left when user scrolls
for(const d of appearleft) {
    appears_cb(d, ()=> {
        //makes the item appear from the left
        gsap.from(d, {x:"-100%", duration:1});
    });
}

for(const d of appearright) {
    appears_cb(d, ()=> {
        //makes the item appear from the right
        gsap.from(d, {x:"100%",duration:1});
    });
}

//Image scales when user hovers mouse
for(const img of imgs) {
    const tl = gsap.timeline({});
    img.addEventListener('mouseenter', e => {
        const t = e.target;
        tl.restart();
        //scales up image 
        tl.to(t, {scale:1.5, duration:.4})
    })
    img.addEventListener('mouseleave', () => {
        //scales image to original size
        tl.reverse();
    })
}

