export const config = { amp: true }
import { useAmp } from 'next/amp'

function MyAmpPage() {
  const date = new Date()
  const isAmp = useAmp()
  let configObj = {
    "vars" : {
      "gtag_id": "UA-186911794-1",
      "config" : {
        "UA-186911794-1": { "groups": "default" }
      }
    },
    "triggers": {
      "productView": {
        "selector": "#customAmp",
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
      },
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