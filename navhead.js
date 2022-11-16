// 左边
var lis=document.querySelector('.leftulheadnav');
var nation=document.querySelector('.nation');
lis.children[0].addEventListener('mouseover',function(){
    lis.children[0].style.backgroundColor='white';
    nation.style.display='block';
});
lis.children[0].addEventListener('mouseout',function(){
    lis.children[0].style.backgroundColor='';
    nation.style.display='none';
});
//右边
var rightli=document.querySelector('.rightulheadnav');
var metaobao=document.querySelector('.metaobao');
var favorite=document.querySelector('.favorite');
rightli.children[0].addEventListener('mouseover',function(){
    rightli.children[0].style.backgroundColor='white';
    metaobao.style.display='block';
});
rightli.children[0].addEventListener('mouseout',function(){
    rightli.children[0].style.backgroundColor='';
    metaobao.style.display='none';
});
rightli.children[2].addEventListener('mouseover',function(){
    rightli.children[2].style.backgroundColor='white';
    favorite.style.display='block';
});
rightli.children[2].addEventListener('mouseout',function(){
    rightli.children[2].style.backgroundColor='';
    favorite.style.display='none';
});