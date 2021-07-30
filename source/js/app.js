import gsap from "gsap";

const tl = gsap.timeline({repeat:-1});
tl.add('text');
tl.from('#text_1', {x:'-100%'});
tl.to('#text_1', {x:'100%', delay:1})
tl.from('#text_2', {x:'-100%'}, ">");
tl.to('#text_2', {x:'100%', delay:1})
tl.from('#text_3', {x:'-100%'});
tl.to('#text_3', {x:'100%', delay:1});

const cartBtn = document.querySelectorAll('.j-cartBtn');

let added = [];
let tlBtn = [];
for(let i = 0; i < cartBtn.length; i++) {
    tlBtn.push(i)
    added[i] = false;
    cartBtn[i].addEventListener('click', e => {
        e.preventDefault();
        tlBtn[i] = gsap.timeline({});
        const t =  e.currentTarget;

        if(added[i] === false) {
            added[i] = true;
            tlBtn[i].to(t, {autoAlpha:0, duration:.2});
            tlBtn[i].to(t.parentNode.querySelector('#j-sparkle'), {display:"flex", scale:.8, duration:.3})
            tlBtn[i].from(t.parentNode.querySelector('#j-sparkle'), {scale:0, duration:.3})
            tlBtn[i].set(t, {text:"Added!"});
            tlBtn[i].to(t, {autoAlpha:1})
            tlBtn[i].to(t, {x:"-100%",duration:0}, "+4");
            tlBtn[i].set(t, {text:"Remove Item"})
            tlBtn[i].to(t.parentNode, {backgroundColor:"red", duration:0})
            tlBtn[i].to(t, {x:"0",duration:.2});
  
        } else {
            added[i] = false;
            tlBtn[i].to(t.parentNode, {backgroundColor:"#5D737E", duration:0})
            tlBtn[i].to(t, {x:"100%", duration:.2});
            tlBtn[i].set(t, {text:"Add to cart"});
            tlBtn[i].to(t, {x:"-100%",duration:0});
            tlBtn[i].to(t, {x:0, duration:.2})
        }
    })
}