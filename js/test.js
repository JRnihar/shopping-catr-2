document.getElementById('sixteenGB').addEventListener('click',function(){
updatePrice("memory-cost",200)

})
document.getElementById('eightGB').addEventListener('click',function(){
updatePrice("memory-cost",0)

})

function updatePrice(button,price){
    const memeoryCost= document.getElementById(button);
    memeoryCost.innerText=price;
 
 
    const bestPrice=document.getElementById('best-price').innerText;
    const memeoryprice=document.getElementById('memory-cost').innerText;
    const storageCost=document.getElementById('storage-cost').innerText;
    const deliveryCost=document.getElementById("delivery-cost").innerText;
    
 
    let totalPrice=
    parseFloat(bestPrice)+
    parseFloat(memeoryprice)+
    parseFloat(storageCost)+
    parseFloat(deliveryCost);
 
 
     let totoal=document.getElementById('total-price');
     totoal.innerText=totalPrice;
}


let fakeCode="phero"
document.getElementById("apply-btn").addEventListener('click',function(){
    const inputField=document.getElementById('promo-input').value;
    if(inputField===fakeCode){
        let totoal=document.getElementById('total-price');
        let totalPrice=parseFloat(totoal.innerText);
      
        let discount= (totalPrice*20)/100;

        totalPrice=totalPrice-discount;
         
        totoal.innerText=totalPrice
    }else{
       alert("incorrect promocode") 
    }
})