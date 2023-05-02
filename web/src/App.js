import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Containers/Landing";
import Sign from "./Containers/Sign";
import Dashboard from "./Containers/Dashboard";
import Session from "./Containers/Session"
import NoMatch from "./Containers/NoMatch";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/session" element={<Session />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
      </div>
    );
}

export default App;

//     <div className="App">
    //         <header></header>
    //         <section>
    //             <form>
    //                 <label for="search-timeframe" style={{display: "inline-block", margin-right: "0.5em"}} >Search Timeframe:</label>
    //                 <input type="date" id="start-date" style="display: inline-block; width: auto;" />
    //                 <span style="display: inline-block; margin: 0 0.5em;" >-</span>
    //                 <input type="date" id="end-date" style="display: inline-block; width: auto;" />
    //                 <div class="row">
    //                     <div class="column">
    //                         <label for="number-of-attempts" class="sub-header">Number of Attempts<span class="red-asterisk">*</span></label>
    //                         <div class="number-of-attempts-row">
    //                             <input type="number" id="number-of-attempts" value="1" required class="number-of-attempts-input" />
    //                             <span>0 = unlimited</span>
    //                         </div>
    //                     </div>
    //                     <div class="vertical-line"></div>
    //                     <div class="column" style="text-align: right;">
    //                         <label for="business-type" class="sub-header">Business Type</label>
    //                         <div>
    //                             <label>
    //                                 <input type="checkbox" name="business-type" value="B2B" />
    //                                 B2B
    //                             </label>
    //                             <label>
    //                                 <input type="checkbox" name="business-type" value="B2C" />
    //                                 B2C
    //                             </label>
    //                             <label>
    //                                 <input type="checkbox" name="business-type" value="P2P" />
    //                                 P2P
    //                             </label>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <label for="business-description" class="sub-header">Tell us about your business in 1-2 sentences<span class="red-asterisk">*</span></label>
    //                 <textarea id="business-description" rows="4" placeholder="An app that helps people find and book last-minute hotel rooms at discounted rates" required></textarea>
    //                 <label for="geo-location" class="sub-header">Business Focus</label>
    //                 <div class="row">
    //                     <div class="column">
    //                         <select id="geo-location" required>
    //                             <option value="">Geo Location</option>
    //                             <option value="option1">Option 1</option>
    //                             <option value="option2">Option 2</option>
    //                             <option value="option3">Option 3</option>
    //                         </select>
    //                         <select id="age-group" required>
    //                             <option value="">Age Group</option>
    //                             <option value="option1">Option 1</option>
    //                             <option value="option2">Option 2</option>
    //                             <option value="option3">Option 3</option>
    //                         </select>
    //                     </div>
    //                     <div class="column">
    //                         <select id="income-group" required>
    //                             <option value="">Income Group</option>
    //                             <option value="option1">Option 1</option>
    //                             <option value="option2">Option 2</option>
    //                             <option value="option3">Option 3</option>
    //                         </select>
    //                         <select id="field-industry" required>
    //                             <option value="">Field/Industry</option>
    //                             <option value="option1">Option 1</option>
    //                             <option value="option2">Option 2</option>
    //                             <option value="option3">Option 3</option>
    //                         </select>
    //                     </div>
    //                 </div>

    //                 <label for="research-type" class="sub-header">Research Type<span class="red-asterisk">*</span></label>
    //                 <div class="checkbox-grid">
    //                     <label>
    //                         <input type="checkbox" name="research-type" value="Market Size/Potential" required />
    //                         Market Size/Potential
    //                     </label>
    //                     <label>
    //                         <input type="checkbox" name="research-type" value="Market Segments" />
    //                         Market Segments
    //                     </label>
    //                     <label>
    //                         <input type="checkbox" name="research-type" value="Product Marketing" />
    //                         Product Marketing
    //                     </label>
    //                     <label>
    //                         <input type="checkbox" name="research-type" value="Competitors" />
    //                         Competitors
    //                     </label>
    //                     <label>
    //                         <input type="checkbox" name="research-type" value="Customer Segments" />
    //                         Customer Segments
    //                     </label>
    //                     <label>
    //                         <input type="checkbox" name="research-type" value="Market/Industry Trends" />
    //                         Market/Industry Trends
    //                     </label>
    //                     <label>
    //                         <input type="checkbox" name="research-type" value="Target Audience" />
    //                         Target Audience
    //                     </label>
    //                 </div>

    //                 <button type="submit" class="start-search-btn">Start Search</button>
    //             </form>
    //         </section>

    //     <footer></footer>
    // </div>