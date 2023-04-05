import React from 'react'
import Features from '../../Components/feature/feature'
import './features.css'
import uniqlo from '../../assets/uniqlo.png'

const featuresData = [
  {
    title:'MIRAI Report',
    text:'According to MIRAI report, Uniqlo has achieved the highest online sales revenue among all physical retail industries, and accumulated more than 5M online memberships in 2022'
  },
  {
    title:'Significant Decline in web traffic',
    text:'According to the analysis using the "Similar Web" plugin, the number of Uniqlo website visitors has dropped from 85.3 million in December 2022 to 52.6 million in the current period'
  },
  {
    title:'Google Optimize 360',
    text:'As the BuiltWith technology analysis suggested, Uniqlo is currently using Google Optimize 360, which will stop servicing in September 2023'
  },
  {
    title:'Google Track Manager',
    text:'According to the analysis using the "WhatRuns", Uniqlo is currently using GTM, which has limitations in terms of analyzing website signals and generating insights compared to iKala AI-driven solution'
  },

]

const Feature = ({title,text}) => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <img src={uniqlo} alt="uniqlo"></img>
      </div>
      <div>
        <div className="gpt3__features-container">
          {featuresData.map((item, index)=>(
            <Features title={item.title} text={item.text} key={item.title + index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature