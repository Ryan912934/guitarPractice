import { useState } from "react";
import Select from "react-select"


export function Stats() {

  const options = [
    { value: 7, label: '1 Week' },
    { value: 28, label: '1 Month' },
    { value: 7 * 4 * 3, label: '3 Months' }
  ]

  const [timePeriod, setTimePeriod] = useState<number>();


  return <div>
    <Select value={timePeriod} options={options as any} onChange={(e)=>{setTimePeriod(e?.valueOf())}}/>


  </div>
}
