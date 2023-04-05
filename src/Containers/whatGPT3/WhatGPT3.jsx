import React from 'react'
import Features from  '../../Components/feature/feature';
import './whatGPT3.css'
const whatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section_margin" id="wgpt3">
      
      <div className="gpt3__whatgpt3-heading">
        <h1 >Identify Clients' Pain Points</h1>
        <h2>Delve into Market Pain Points📖</h2>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Features title="Economic Downturn" text="During economic downturn, companies are reassessing marketing strategies and reducing spending on less effective campaigns to achieve a better return on ad spending (ROAS). Additionally, companies are also seeking tools that can accurately segment target audiences to re-engage high-value customers, determine their lifetime value, and avoid expensive and time-consuming A/B testing"/>
        <Features title="Post-pandemic" text="Navigating through changing circumstances has emphasized the criticality of mar-tech predictability, adaptability, and resilience. To achieve success in digital transformation, companies are adopting an Online-Merge-Offline (OMO) strategy to integrate multichannel data and harness no-code (drag-and-drop) marketing tools"/>
        <Features title="Cookieless" text="With the elimination of cookies, businesses face challenges in delivering personalized ad experiences and recognizing users across various digital platforms. As a result, first-party data has become increasingly critical for businesses to understand their customers and personalize their marketing campaign"/>
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h2>Use Digital Tools for Website Inspection👨🏻‍💻</h2>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Features title="The Similarweb" text="A browser extension that provides users with insights into website traffic, engagement, and other performance metrics "/>
        <Features title="BuiltWith Profiler" text="A web technology profiler that allows you to identify the technology stack used by websites, including CMS, anayltics tools, and advertising networks "/>
        <Features title="WhatRuns" text="A browser extension that finds technologies used on any website you visit. The extension can be useful for web developers and marketers who want to understand what technologies their competitors are using or to identify new tools and trends in the industry"/>
      </div>

    </div>
  )
}

export default whatGPT3