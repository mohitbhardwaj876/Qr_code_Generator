const qrText=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('gen-btn');
const dowBtn=document.getElementById('dow-btn');

const qrContainer=document.getElementById('article');

generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    isEmpty();
});

sizes.addEventListener("change",(e)=>{
    sizes.value=e.target.value;
    isEmpty();
})
dowBtn.addEventListener("click",()=>{
    // e.preventDefault();
    let img=document.querySelector('.article img');

    if(img!==null){
        let imgAttr = img.getAttribute('src');
        dowBtn.setAttribute("href",imgAttr);
    }
    else{
        dowBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL}`);
    }
});
function generateQr(){
    qrContainer.innerHTML="";
     new QRCode(qrContainer, {
        text: qrText.value,
        width: sizes.value,
        height: sizes.value,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });

};
function isEmpty(){
    qrText.value.length>0?generateQr():alert("please enter some text or url")
;}