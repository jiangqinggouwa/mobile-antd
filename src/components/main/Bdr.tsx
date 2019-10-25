import * as React from 'react'
import { Grid } from 'antd-mobile'
export default class Bdr extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const data1 = Array.from(new Array(9)).map(() => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
          }));
        return(
            <div>
                <Grid 
                 data={data1}
                 columnNum={3}
                 itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }}
                 />
            </div>
        )
    }
}