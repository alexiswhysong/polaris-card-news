import { LitElement, html, css } from 'lit-element';

class PolarisChip extends LitElement {
  static get properties() {
    return {
      month: { type: String },
      day: { type: String },
    };
  }

  static get styles() {
    return css`
      .card-container {
        background-color: #fff;
        display:inline-block;
        max-width: 400px; /* Set the maximum width of the card */
        width: 100%; /* Make the card responsive within the parent container */
        padding: 20px; /* Add padding for spacing */
        border: 1px solid #ccc;
        text-align: center;
        position: relative;
        margin-bottom: 200px;
      }
      .images {
        background-color: #005fa9;
        height: 171px;
      }
      .images img:hover {
        opacity: 0.7;
      }
      .images {
        position: relative;
        width: 90%;
        height: 90%;
        margin: 0;
        padding: 0;
        border-radius: 0px;
      }
      .mid-wrapper {
        display: flex;
        flex-direction: row;
      }
      .month-label .month{
        display: block;
        background: #1E407C;
        border-radius: 0 0 2px 2px;
        color: #FFF;
        font-size: 0.8em;
        font-weight: bold;
        line-height: 1.8;
        padding: 1px 10px;
        text-transform: uppercase;
      }
      .day-label .day{
          background: #f7f7f7;
          border-radius: 2px 2px 0 0;
          color: #444;
          display: block;
          font-size: 18px;
          font-weight: 900;
          padding: 10px 20px;
      }
      .title .desc{
          font-size: 1.3em;
          line-height: 1em;
          font-family: 'Roboto',sans-serif;
          text-transform: capitalize;
          color: #96BEE6;
          
      }
      .desc {
        font-family: 'Roboto',sans-serif;
      }
          a { color: #1E407C}
          a:visited { text-decoration: none; color:#1E407C; }
          a:hover { text-decoration: none; color:#001E44; }
          a:focus { text-decoration: none; color:#001E44; }
          a:hover, a:active { text-decoration: none; color:#001E44 }

          img { color: #1E407C}
          img:visited { text-decoration: none; color:#1E407C; }
          img:hover { text-decoration: none; color:#001E44; }
          img:focus { text-decoration: none; color:#001E44; }
          img:hover, a:active { text-decoration: none; color:#001E44 }
      
      .title .desc:hover{
        color: #1E407C;
      }
      .top-title {
        font-size: 1.5em;
        font-weight: 700;
        line-height: 3.6875rem;
        margin: 0 0 0 0;
        padding-bottom: 0px;
        position: left;
        text-align: left;
      }
      /* Add styles for other elements as needed */
    `;
  }

  constructor() {
    super();
    this.month = 'Sept';
    this.day = '25';
  }

  render() {
    return html`
      <div class="card-container">
        <div class="top-title">
        
        </div>
        <div class = "inner-container">
        <div class="images">
          <a href="https://hr.psu.edu/news/2024-benefits-open-enrollment-information-now-available">
            <img src="https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-09/BOEInformation_HRFeature.jpg?h=09bc788e&itok=ZDBRn6_B" alt="picture :D" width="386" height="171">
          </a>
        </div>
        <div class="mid-wrapper">
          <div class="date-card">
            <div class="month-label">
              <label class="month"><slot>${this.month}</slot></label>
            </div>
            <div class="day-label">
              <label class="day"><slot>${this.day}</slot></label>
            </div>
          </div>
          <div class="title">
            <label class="desc"><a style="text-decoration:none" href="https://hr.psu.edu/news/2024-benefits-open-enrollment-information-now-available">2024 Benefits Open Enrollment information now available
</label></a>
          </div>
        </div>
        <div class="short-desc">
          <div property="schema:text" class="desc-text"></div>
          <p>Penn State's 2024 Benefits Open Enrollment starts, Monday, Nov. 6, and runs through 5 p.m. EST on Friday, Nov. 17. Information on health-care plan designs — which remain the same for 2024 — is available on a dedicated 2024 Benefits Open Enrollment section of the Penn State Human Resources website.</p>
        </div>
        </div>
      </div>
    `;
  }
}

customElements.define('polaris-chip', PolarisChip);