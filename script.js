function main(){
    let face = document.getElementById("faceScore").value
    console.log("Face: "+face)

    let height = heightCalc()
    console.log("Height: "+ height)

    let physique=document.getElementById("physiqueScore").value
    console.log("Physique: "+physique)

    let skills=skillCalc()
    console.log("Skills: "+skills)

    let intelligence=document.getElementById("intelligenceScore").value
    console.log("intelligence: "+intelligence)

    updateSliders()

    let finalScore=finalCalc(intelligence,skills,physique,height,face)
    let finalScoreColor=finalColor(finalScore)
    let finalCategory =category(finalScore)

    let scale=document.getElementById("scale").value
    console.log("Scale: "+scale)
    let scaleSuffix=0
    if (scale=="percent"){
        scale=10
        scaleSuffix="%"
    }else{
        scale=1
        scaleSuffix=""
    }

    console.log(finalScoreColor)
    document.getElementById("final").innerHTML="<h1 style=\"color:"+finalScoreColor+"\";>"+scale*finalScore+scaleSuffix+"</h1>"
    document.getElementById("category").textContent=finalCategory
}

function finalCalc(intelligence,skills,physique,height,face){
    let final = .2*intelligence+.2*physique+.15*height+.25*face+.2*skills
    return final
}

function finalColor(x){
    let r=0
    let g=0
    let b=0
    if(x<5){
        r=255
        g=(255/5)*x

    }else{
        r=(-255/5)*(x-5)+255
        g=255
    }
    return "rgb("+r+","+g+","+b+")"
}

function category(x){
    if(x>=9){
        return "Chad"
    }else if(x>=8.2){
        return "Chad-lite"
    }else if(x>=6.8){
        return "HTN"
    }else if(x>=5.2){
        return "MTN"
    }else if(x>=3.8){
        return "LTN"
    }else{
        return "Incel"
    }
}

function skillCalc(){
    totalScore=0
    skillCheck=[document.getElementById("socialSkill").value,document.getElementById("creativeSkill").value,document.getElementById("physicalSkill").value,document.getElementById("intellectualSkill").value]

    for(let i=0;i<skillCheck.length;i++){
        totalScore+=skillCheck[i]/4
    }
    return totalScore
}

function heightCalc(){
    let average=69
    let heightScore=document.getElementById("heightScore").value
    let unit=document.getElementById("unit").value
    if(unit=="centimeter"){
        heightScore/=2.54
    }
    let offset = heightScore-average

    if(heightScore>=average+5){
        return 10
    }else if(heightScore>=average+3){
        return 9
    }else if(heightScore>=average+2){
        return 8
    }else if(heightScore>=average+1){
        return 7
    }else if(heightScore>=average+.5){
        return 6
    }else if (heightScore>=average-.5){
        return 5
    }else if (heightScore<average-5){
        return 0
    }else if(heightScore<average-3){
        return 1
    }else if(heightScore<average-2){
        return 2
    }else if(heightScore<average-1){
        return 3
    }else if(heightScore<average-.5){
        return 4
    }
}

function updateSliders(){
    document.getElementById("creativeValue").textContent=document.getElementById("creativeSkill").value
    document.getElementById("physicalValue").textContent=document.getElementById("physicalSkill").value
    document.getElementById("socialValue").textContent=document.getElementById("socialSkill").value
    document.getElementById("intellectualValue").textContent=document.getElementById("intellectualSkill").value
}