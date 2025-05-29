import React from "react";
import InvestorCard from "../components/InvestorCard";

import In2 from "../assets/In2.jpg";
import In3 from "../assets/In3.jpg";
import In4 from "../assets/In4.jpg";
import In5 from "../assets/In5.jpg";
import In6 from "../assets/In6.jpg";
import In7 from "../assets/In7.jpg";
import In8 from "../assets/In8.jpg";

const data = [
  {
    title: "Why Invest in BCS Business",
    subtitle: "Structured Ecosystem for Growth",
    content:
      "Invest in a structured ecosystem designed to deliver sustainable growth, strategic clarity, and consistent operational performance, offering uniquely positioned opportunities within diverse industry sectors.",
    points: [
      "Robust & Structured Business Models",
      "Systematic Growth & Scalability",
      "Transparent Performance Reporting",
      "Risk-Managed Investment Opportunities",
      "Strategic Integration within Our Ecosystem"
    ],
    bgImage: In2
  },
  {
    title: "Investor–Corporate Matchmaking",
    subtitle: "Strategic Synergy Partnerships",
    content:
      "Facilitating strategic matches between investors and high-potential corporate ventures, aligning financial objectives with business capabilities, ensuring mutual clarity, and structured partnership growth.",
    points: [
      "Curated Opportunity Identification",
      "Structured Investment Alignment Process",
      "Strategic Partnership Development",
      "Personalized Investor Engagement Plans",
      "Regular Monitoring & Reporting Systems"
    ],
    bgImage: In3
  },
  {
    title: "Due Diligence Ready Models",
    subtitle: "Clarity, Compliance & Risk Mitigation",
    content:
      "Systematically designed due diligence frameworks ensuring investor clarity, risk assessment accuracy, compliance certainty, and streamlined processes, preparing ventures thoroughly for seamless funding.",
    points: [
      "Structured Due Diligence Checklists",
      "Comprehensive Documentation Packages",
      "Investor Readiness Training & Guidance",
      "Risk Assessment & Mitigation Models",
      "Compliance & Governance Frameworks"
    ],
    bgImage: In4
  },
  {
    title: "Capital Models & ROI",
    subtitle: "Simulation or Static View",
    content:
      "Structured capital modeling tools providing investors with clear visibility into expected returns and growth trajectories through dynamic simulations and static analytical views.",
    points: [
      "Capital Allocation Frameworks",
      "ROI Forecasting & Simulation Tools",
      "Financial Scenario Analysis",
      "Transparent Performance Metrics & KPIs",
      "Strategic Investment Planning & Guidance"
    ],
    bgImage: In5
  },
  {
    title: "Articles & Insight Blogs",
    subtitle: "Clarity Through Knowledge",
    content:
      "Access insightful articles, blogs, and thought leadership content curated to provide clarity, industry updates, structured strategies, and investor guidance, helping to inform strategic investment decisions.",
    points: [
      "Market Analysis & Industry Trends",
      "Investment Strategies & Best Practices",
      "Structured Growth Methodologies",
      "Entrepreneurial Insights & Case Examples",
      "Regulatory Updates & Compliance Guidelines"
    ],
    bgImage: In6
  },
  {
    title: "Podcasts / Videos",
    subtitle: "Entrepreneur Talks & More",
    content:
      "Engaging podcasts and video series featuring thought leaders, successful entrepreneurs, and investors, offering deep insights into structured business growth, investment strategies, and real-world success stories.",
    points: [
      "Entrepreneur Interviews & Insights",
      "Structured Strategy Discussions",
      "Investor Roundtable Sessions",
      "Real-Time Market Analysis Videos",
      "Founder Success & Journey Narratives"
    ],
    bgImage: In7
  },
  {
    title: "Reports & Case Studies",
    subtitle: "Proven Success & Results",
    content:
      "Comprehensive, detailed reports and case studies showcasing the structured business models, clear execution strategies, measurable results, and investor returns achieved by BusyAge-supported ventures.",
    points: [
      "Real-Life Success Stories",
      "Structured Operational Frameworks",
      "Quantitative & Qualitative Results",
      "Investment Impact & Growth Analysis",
      "Detailed Project & Investment Timelines"
    ],
    bgImage: In8
  }
];

const InvestorSection = () => {
  return (
    <div className="space-y-10 px-4 md:px-10 py-10">
      {data.map((item, index) => (
        <InvestorCard key={index} {...item} />
      ))}
    </div>
  );
};

export default InvestorSection;
