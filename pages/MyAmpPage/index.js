export const config = { amp: true }
import { useAmp } from 'next/amp'

function MyAmpPage() {
  const date = new Date()
  const isAmp = useAmp()
  // "productView": {
  //   "selector": "#customAmp",
  //   "on": "visible",
  //   "request": "event",
  //   "vars": {
  //         "event_name": "view_item",
  //         "event_category": "engagement",
  //         "event_label": "",
  //         "value": "",
  //         "method": "Google"
  //       },
  //   "extraUrlParams": {
  //     "pr1id": "322144",
  //     "pr1nm": "azyka.com",
  //     "pr1pr": "1995",
  //     "pr1va": "Com",
  //     "pr1br": "Invented",
  //     "pr1qt": 1,
  //     "pr1ps": 1,
  //     "pr1ca": "industries/dating-relationship-business-names"
  //   }
  // },
  let configObj = {
    "vars" : {
      "gtag_id": "UA-186911794-1",
      "config" : {
        "UA-186911794-1": { "groups": "default" }
      }
    },
    "triggers": {
      "testView": {
        "selector": "#customAmp",
        "on": "visible",
        "request": "event",
        "vars": {
              "event_name": "ename",
              "event_category": "ecategory",
              "event_label": "elabel",
              "value": "0",
              "method": "Google"
            }
      }
    },
    "productView": {
      "selector": "#customAmp",
      "on": "visible",
      "request": "event",
      "extraUrlParams": {
        "ec": "engagement",
        "ea": "view_item",
        "pr1id": "322144",
        "pr1nm": "azyka.com",
        "pr1pr": "1995",
        "pr1va": "Com",
        "pr1br": "Invented",
        "pr1qt": 1,
        "pr1ps": 1,
        "pr1ca": "industries/dating-relationship-business-names"
      }
    },
    "productListView": {
      "selector": "#customAmp",
      "on": "visible",
      "request": "event",
      "vars": {
            "event_name": "view_item_list",
            "event_category": "engagement",
            "value": "0",
            "method": "Google"
          },
      "extraUrlParams": {
        "il1pi1id": "80539",
        "il1pi1nm": "kaalm.com",
        "il1pi1pr": "1225",
        "il1pi1va": "Com",
        "il1pi1br": "Invented",
        "il1pi1qt": 1,
        "il1pi1ps": 1,
        "il1pi1ca": "industries/organization-company-names"
      }
    }
  };

  return (
    <div id="customAmp">
       {isAmp ? (
         <>
         <amp-analytics type="gtag" data-credentials="include">
<script type="application/json"
dangerouslySetInnerHTML={{
  __html: JSON.stringify(configObj)}}
/>
</amp-analytics>
         <amp-timeago
        width="0"
        height="15"
        datetime={date.toJSON()}
        layout="responsive"
      >
        .
      </amp-timeago>
      </>
        
      ) : (<p>Some time: {date.toJSON()}</p>)    }  
    </div>
  )
}

export default MyAmpPage