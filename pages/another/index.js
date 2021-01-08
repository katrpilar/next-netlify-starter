export const config = { amp: true }
import { useAmp } from 'next/amp'

function another() {
  const date = new Date()
  const isAmp = useAmp()


  return (
    <div id="customAmp">
       {isAmp ? (
         <>
         
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

export default another;