const alert1=(S)=>{
     
    const div=document.createElement('div');
    div.className="alert alert-danger";
    const message=S;
    div.appendChild(document.createTextNode(message));

    const head=document.querySelector(".head");
    const card=document.querySelector(".card");

    card.insertBefore(div,head);
     
    setTimeout(()=>{
        card.removeChild(div);
    },3000)

}

const view=(e)=>{
document.getElementById("Results").style.display='none';

document.getElementById("loading").style.display='block';

setTimeout(()=>{
calculate();
document.getElementById("loading").style.display='none';
document.getElementById("Results").style.display='block';

},2000);
e.preventDefault();
}

const calculate=()=>{

    const total=document.getElementById("amount").value - document.getElementById("deposit").value;
    const deposit=document.getElementById("deposit").value;
    const years=document.getElementById("years").value;
    const interest=document.getElementById("interest").value;
    const total_amount=(+total + +( +total*( interest/100)));

    if(total<0)
    {
        alert1("Sorry yours deposit is greater than value of the item");
        document.getElementById("deposit").value=1;
       
    }
    else if(document.getElementById("amount").value<1)
    {
        alert1("Sorry please check your Total Amount");
        document.getElementById("amount").value=1;
    } 


    if(years>6)
    {
        alert1("Sorry there is no available option for financing for more than 6 years");
        document.getElementById("years").value=1;
    }
    else if(years<1)
    {
        alert1("Sorry you have entered invalid number of years");
        document.getElementById("years").value=1;
    } 


    if(interest<0 || interest>100)
    {
        alert1("Sorry you have entered invalid Interest amount!");
        document.getElementById("interest").value=0;
    } 
    document.getElementById("Monthly").value=total_amount/(12*years);
    document.getElementById("total-payment").value=total_amount;
   
};

//!!EventListners
const load=()=>{
document.getElementById("Calculate").addEventListener('click',view);
}
load();
