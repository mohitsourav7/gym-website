import React from 'react'
import Heroimage1 from "./images/Heroimage1.jpg";
import "./Heroimage.css"
const Heroimage=() => {
  return (
    <div className='intro'>
      <img  className='introimg' src= {Heroimage1}  alt="LoGO"/>
      <h1><u>OUR MISSION</u></h1>
      <p>Fitness Gym Has Expanded Its Fitness Profile To Offer All Of The Latest Equipment And Services Making It The Best In The Industry.Fitness Gym Provides A Comprehensive Approach To The Health And Wellbeing Of Its Members With Certified Trainers And Nutritional Counseling. Whether Your Goal Is To Burn Fat, Tone Or Add Muscle, Build Strength, Increase Flexibility Or Improve Your Cardiovascular Health, Fitness Gym Lives Up To Its Reputation To Give Results.Fitness Gym Believes That Fitness Is Not Just About A Toned Body But The Power To Overcome All The Obstacles.</p>
      <p>We Have Programs Like Personal Training, Small Group Personal Training, Customized Goal-Based Quick Result Program, Fitness Assessment, Group Exercise Classes Such As Zumba, BollySalsa, MMA, Power Yoga, Spinning To Name A Few & Some Of Our Properties Also Include A Swimming Pool Facility And Specialized Functional & Circuit Training Areas. We Also Have As Add On A Travel Card Facility, So That Wherever You Are, Your Workout Never Stops.</p>
    </div>
  )
}

export default Heroimage;