import Document, { Html, Head, Main, NextScript } from "next/document"
let configObj = {
  "vars" : {
    "gtag_id": "G-G6S490GS84",
    "config" : {
      "G-G6S490GS84": { "groups": "default" }
    }
  },
  "triggers": {
    "pageview": {
      "on": "visible",
      "request": "event",
      "vars": {
            "event_name": "view_item",
            "event_category": "engagement",
            "event_label": "",
            "value": "",
            "method": "Google"
          },
      "extraUrlParams": {
        "pr1id": "322144",
        "pr1nm": "azyka.com",
        "pr1pr": "1995",
        "pr1va": "Com",
        "pr1br": "Invented",
        "pr1qt": 1,
        "pr1ps": 1,
        "pr1ca": "industries/dating-relationship-business-names"
      }
    }
  }
};

// "extraUrlParams": {
//   "ec": "engagement",
//   "ea": "view_item",
//   "pr1id": "322144",
//   "pr1nm": "azyka.com",
//   "pr1pr": "1995",
//   "pr1va": "Com",
//   "pr1br": "Invented",
//   "pr1qt": 1,
//   "pr1ps": 1
// }

// SAMPLE trigger
// "button": {
//   "selector": "#the-button",
//   "on": "click",
//   "vars": {
//     "event_name": "login",
//     "method": "Google"
//   }
// }

class MyDocument extends Document {
  

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
render() {
  return (
    <Html lang={this.props.lang || "en"}>
      <Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `[google analytics tracking code here]`
          }}
        /> */}
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
<amp-analytics type="gtag" data-credentials="include">
<script type="application/json"
dangerouslySetInnerHTML={{
  __html: `${configObj}`}}
/>
</amp-analytics>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

}

export default MyDocument