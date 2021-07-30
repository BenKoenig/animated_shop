import gsap from "gsap";

const tl = gsap.timeline({repeat:-1});
tl.add('text');
tl.from('#text_1', {x:'-100%'});
tl.to('#text_1', {x:'100%', delay:1})
tl.from('#text_2', {x:'-100%'}, ">");
tl.to('#text_2', {x:'100%', delay:1})
tl.from('#text_3', {x:'-100%'});
tl.to('#text_3', {x:'100%', delay:1});