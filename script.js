
const calculateGrade = ()=> {

  let userScore = document.getElementById("scoreInput").value 
  console.log(`The User Score is ${userScore}`);


  document.getElementById("resultElements").style.display = "block"

  if (userScore < 1){
    gradeResult.innerHTML = "Null"
    gradeResult.style.color = "red"
    gradeRemark.innerHTML = `Invalid Input ❌: Score Must Be Between 1-100.`
    container.innerHTML = `<audio src="audio/error-call-to-attention-129258.mp3" autoplay></audio>`
  } else if (userScore <= 40 ){
    gradeResult.innerHTML = "F"
    gradeResult.style.color = "red"
    gradeRemark.innerHTML = `Grade F: F is for Failure, and that's exactly what you've achieved. Your grade is F, and there's no sugarcoating it, you bombed 👺.`
    container.innerHTML = `<audio src="audio/Yuu failed F.mp4_1.mp3" controls autoplay></audio>`
  } else if (userScore <= 46){
    gradeResult.innerHTML = "E"
    gradeResult.style.color = "#EA871C"
    gradeRemark.innerHTML = `Grade E: Congratulations, you've earned an E! But don't celebrate just yet, it stands for Epic Failure. Your grade is E, and it's a long way from success 👹.`
    container.innerHTML = `<audio src="audio/you're not serious D .mp4_1.mp3" controls autoplay></audio>`
  } else if (userScore <= 49){
    gradeResult.innerHTML = "D"
    gradeResult.style.color = "grey"
    gradeRemark.innerHTML = `Grade D: D for Disappointment. Your grade is D, and let's face it, it's nothing to brag about. Time to step up your game 🐵.`
    container.innerHTML = `<audio src="audio/yiu can do better C.mp4_1.mp3" controls autoplay></audio>`
  } else if (userScore <= 55){
    gradeResult.innerHTML = "C"
    gradeResult.style.color = "yellow"
    gradeRemark.innerHTML = `Grade C: Barely scraping by with a C? Sorry, that's just not good enough. Your grade is C, but it's nowhere near what you're capable of 🤔.`
    container.innerHTML = `<audio src="audio/you're almost there B.mp4_1.mp3" controls autoplay></audio>`
  } else if (userScore <= 70){
    gradeResult.innerHTML = "B"
    gradeResult.style.color = "#E34E6C"
    gradeRemark.innerHTML = `Grade B: Look who's at the top of the class with an A! Oh wait, that's not you. You can still do better 😜`
    container.innerHTML = `<audio src="audio/You did well A.mp4_1.mp3" controls autoplay></audio>`
  } else if (userScore <= 100){
    gradeResult.innerHTML = "A"
    gradeResult.style.color = "aqua"
    gradeRemark.innerHTML = `Grade A: Wow, look who got an A! Your grade is A, but don't let it get to your head, keep up the pace 😎.`
    container.innerHTML = `<audio src="audio/Romantic_Tom_saying A.flv(256k)_1_1.mp3" controls autoplay></audio>`
  } else {
    gradeResult.innerHTML = "Null"
    gradeResult.style.color = "red"
    gradeRemark.innerHTML = `Invalid Input ❌: Score Must Be Between 1-100. `
    container.innerHTML = `<audio src="audio/error-call-to-attention-129258.mp3" autoplay></audio>`
  }


  document.getElementById("scoreInput").value  = ""
}

const playSong = () =>{
  
}

const refreshButton = () =>{
  location.reload();
}