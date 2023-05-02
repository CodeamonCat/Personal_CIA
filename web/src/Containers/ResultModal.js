import { Icon, IconButton, Button } from "@mui/material";
import "./ViewResult.css";
const ViewResult = () => {
  return (
    <div className="view-result">
      <div className="personal-cia">Personal CIA</div>
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="new-session">+ New Session</div>
      </div>
      <div className="vector-parent">
        <img className="group-item" alt="" src="/line-3.svg" />
        <div className="group-inner" />
      </div>
      <div className="view-result-child" />
      <div className="view-result-item" />
      <div className="view-result-inner" />
      <div className="all">All</div>
      <div className="completed">Completed</div>
      <div className="rectangle-div" />
      <div className="searching">Searching</div>
      <div className="view-result-child1" />
      <div className="summarize">Summarize</div>
      <div className="failed">Failed</div>
      <div className="name">Name</div>
      <div className="status">Status</div>
      <div className="created-date">Created Date</div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="line-icon" alt="" src="/line-4.svg" />
      <div className="group-parent">
        <div className="rectangle-group">
          <div className="group-child1" />
          <div className="view-result1">View Result</div>
        </div>
        <div className="please-research-the">
          Please research the current state of the Bitcoin market and identify
          any...
        </div>
        <div className="completed1">Completed</div>
        <div className="div">4/29/2023</div>
        <img className="vector-icon1" alt="" src="/vector.svg" />
        <img className="group-child2" alt="" src="/line-5.svg" />
        <img className="trash-alt-1-icon" alt="" src="/trashalt-1.svg" />
        <img className="edit-1-icon" alt="" src="/edit-1.svg" />
      </div>
      <div className="view-result-child2" />
      <div className="rectangle-container">
        <div className="group-child3" />
        <h2 className="result">Result</h2>
        <IconButton className="x" color="primary">
          <Icon>arrow_back_ios_sharp</Icon>
        </IconButton>
      </div>
      <Button
        className="group-button"
        sx={{ width: 135 }}
        variant="contained"
        color="success"
      >
        Download Result
      </Button>
      <div className="please-research-the-current-st-parent">
        <p className="please-research-the1">
          "Please research the current state of the Bitcoin market and identify
          any potential arbitrage opportunities. Consider factors such as the
          current price of Bitcoin on different exchanges, the trading volume on
          each exchange, and any recent news or developments in the Bitcoin
          industry that may impact the market. Based on your research, provide
          recommendations on how to take advantage of any identified arbitrage
          opportunities and the potential profits that could be generated."
        </p>
        <h3 className="prompt">Prompt:</h3>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co-parent">
        <p className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui
          euismod, commodo nisl id, facilisis velit. Sed vel lorem aliquet,
          luctus augue eu, dapibus elit. Pellentesque ac neque et nisl molestie
          ullamcorper. Nulla ornare nulla eu dolor molestie auctor. Proin id
          nibh a augue gravida efficitur vitae vel nisi. In hac habitasse platea
          dictumst. Sed vitae eleifend mi. Duis eu felis sed massa pharetra
          luctus eget sed nisi. Duis tristique justo eu sapien feugiat, id
          tincidunt velit elementum. Sed et enim velit. Sed at molestie quam,
          nec tincidunt enim. Donec sed feugiat mi. Nullam eu purus vestibulum,
          iaculis ante ac, vestibulum dui. Vivamus tristique quam nec risus
          faucibus sollicitudin.
        </p>
        <h3 className="prompt">Findings:</h3>
      </div>
    </div>
  );
};

export default ViewResult;
