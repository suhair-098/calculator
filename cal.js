
function clickedi(value)
{
   const display= document.getElementById("screen")
   const lastChar=display.value.slice(-1)
   const operators=['+','-','*','/']
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
