import * as React from 'react'
import {　Carousel　}　from　'antd-mobile'
export default class Banner extends React.Component<any,any>{
    constructor(props){
        super(props);
        this.state={
            data:['1','2','3'],
            imgHeight:'176'
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render(){
        return(
            <Carousel
            autoplay={false}
            >
                {this.state.data.map(val => (
                    <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
            </Carousel>
        )
    }
}