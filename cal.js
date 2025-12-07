
function clickedi(value)
{
   const display= document.getElementById("screen")
   const lastChar=display.value.slice(-1)
   const operators=['+','-','*','/']
   if (value==="."){
      let parts=display.value.split(/[\]+\-\*\]\);
      let lastnumber=parts[parts.length-1];
      if (lastnumber.includes.("."){
         return;
      }
   }
   if (operators.includes(value)&&operators.includes(lastChar))
    {
    return;
    }
   display.value+=value

    

}
function cleared(){
document.getElementById("screen").value=" "

}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
