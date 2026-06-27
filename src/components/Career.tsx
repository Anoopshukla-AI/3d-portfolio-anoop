import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation Engineer</h4>
                <h5>Freelance &amp; Contract</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building agentic systems, multi-agent orchestration, and production AI pipelines across multiple client engagements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>Team Computers · Client Site</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Deployed as first dedicated AI engineer at client site. Built AI automation capability from zero, designing custom workflows and LLM applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Developer</h4>
                <h5>Independent</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started building with LangChain, OpenAI, and RAG pipelines. First AI deployment: document classification system for a financial client.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Automation Specialist</h4>
                <h5>Independent</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Started building n8n workflows and API integrations independently. First real-world automation: lead routing for a sales team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Operations Specialist</h4>
                <h5>Infrastructure Operations</h5>
              </div>
              <h3>2017–19</h3>
            </div>
            <p>
              IT infrastructure work across client deployments. Built process discipline and systems thinking before moving into software automation and AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
