import gsap from "gsap";


const cartBtn = document.querySelectorAll('.j-cartBtn');
const appears = document.querySelectorAll("#appear");
const imgs = document.querySelectorAll('#j-img')

//******* Banner *******
const tl = gsap.timeline({repeat:-1});

tl.add('text');

tl.from('#text_1', {y:'100%', ease: "power4.out", duration:.5});
tl.to('#text_1', {y:'-100%', ease: "power4.out",  delay:1, duration:.5})
tl.from('#text_2', {y:'100%', ease: "power4.out", duration:.5}, "<");
tl.to('#text_2', {y:'-100%', delay:1, ease: "power4.out", duration:.5})
tl.from('#text_3, #frame', {y:'100%', ease: "power4.out", duration:.5}, "<");
tl.from('#frame', {autoAlpha: 0, duration:0}, "<")
tl.to('#frame, #text_3', {scale:1.5, rotate:-24, duration:2, ease: "poser1.out"}, "<")
tl.to('#frame, #text_3', {autoAlpha:0, duration:0})
tl.from('#banner-1', {autoAlpha:0})



// ******* Add to cart button *******
//array to check if items are already added to the cart 
let added = [];
//array for every shopping cart button
let tlBtn = [];

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
  
        } else {
            added[i] = false;
            //Color changes back to original color => text changes back to "Add to cart"
            tlBtn[i].to(t.parentNode, {backgroundColor:"#5D737E", duration:0})
            tlBtn[i].to(t, {x:"100%", duration:.2});
            tlBtn[i].set(t, {text:"Add to cart"});
            tlBtn[i].to(t, {x:"-100%",duration:0});
            tlBtn[i].to(t, {x:0, duration:.2})
        }
    })
}

// ******* Load animations *******
gsap.from("#j-trendingTitle", {x:"-100%"});

const appears_cb = function(elm, cb){
    const onscroll = () => {
        if(elm.getBoundingClientRect().y - window.innerHeight < 0) {
            document.removeEventListener("scroll", onscroll);
            cb();
        }
    };
    document.addEventListener("scroll", onscroll);
};


for(const d of appears) {
    appears_cb(d, ()=> {
        gsap.from(d, {x:"-100%"});
    });
}

for(const img of imgs) {
    const tl = gsap.timeline({});
    img.addEventListener('mouseenter', e => {
        const t = e.target;
        tl.restart();
        tl.to(t, {scale:1.5, duration:.4})
    })
    img.addEventListener('mouseleave', () => {
        tl.reverse();
    })
}


