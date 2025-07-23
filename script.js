function main(){
    let face = parseFloat(document.getElementById("faceScore").value)
    face=updateLimits(face,"faceScore",0,10)
    console.log(face)

    let height = heightCalc()


    let physique=parseFloat(document.getElementById("physiqueScore").value)
    physique=updateLimits(physique,"physiqueScore",0,10)

    let skills=skillCalc()


    let intelligence=intelligenceCalc()

    updateSliders()

    let finalScore=finalCalc(intelligence,skills,physique,height,face)
    let finalScoreColor=finalColor(finalScore)
    let finalCategory =category(finalScore)

    let scale=document.getElementById("scale").value

    let scaleSuffix=0
    if (scale=="percent"){
        scale=10
        scaleSuffix="%"
    }else{
        scale=1
        scaleSuffix=""
    }

    console.log(finalScoreColor)
    document.getElementById("final").innerHTML="<h1 style=\"color:"+finalScoreColor+"\";>"+(scale*finalScore).toFixed(2)+scaleSuffix+"</h1>"
    document.getElementById("category").textContent=finalCategory
}

function finalCalc(intelligence,skills,physique,height,face){
    let final = .15*intelligence+.2*physique+.15*height+.25*face+.25*skills
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
    if(x>=9.3){
        return "Chad"
    }else if(x>=8.5){
        return "Chad-lite"
    }else if(x>=7){
        return "HTN"
    }else if(x>=5.5){
        return "MTN"
    }else if(x>=3.8){
        return "LTN"
    }else if(x>=19){
        return "Incel"
    }else{
        return "Sub3"
    }
}

function intelligenceCalc(){
    let finalScore=0
    let skills=[document.getElementById("practicalSkill").value,document.getElementById("creativeSkill").value,document.getElementById("physicalSkill").value,document.getElementById("socialSkill").value,document.getElementById("intellectualSkill").value]

    for(let i=0;i<skills.length;i++){
        skills[i]/=2
    }

    finalScore+=.15*skills[0]
    finalScore+=.25*skills[1]
    finalScore+=.15*skills[2]
    finalScore+=.2*skills[3]
    finalScore+=.25*skills[4]
    return finalScore

}

function skillCalc(){
    let totalScore=0
    let skillCheck=[document.getElementById("practicalSkill").value,document.getElementById("socialSkill").value,document.getElementById("creativeSkill").value,document.getElementById("physicalSkill").value,document.getElementById("intellectualSkill").value]

    for(let i=0;i<skillCheck.length;i++){
        let cur=(5*(Math.sin((Math.PI/20)*(skillCheck[i]-10)))+5)/5
        totalScore+=cur 
    }
    console.log("Skill Score: "+totalScore)
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
    document.getElementById("practicalValue").textContent=document.getElementById("practicalSkill").value/2
    document.getElementById("creativeValue").textContent=document.getElementById("creativeSkill").value/2
    document.getElementById("physicalValue").textContent=document.getElementById("physicalSkill").value/2
    document.getElementById("socialValue").textContent=document.getElementById("socialSkill").value/2
    document.getElementById("intellectualValue").textContent=document.getElementById("intellectualSkill").value/2
}

function updateLimits(x,docID,min,max){
    if(x<min){
        x=min
    }else if(x>max){
        x=max
    }
    document.getElementById(docID).value=x
    return x
}
