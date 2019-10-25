import { TabBar } from 'antd-mobile';
import * as React from 'react'
import '../../assets/styles/iconfont.css'
export default class Header extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<span className="iconfont iconhome"></span>}
            // selectedIcon={<div style={{
            //   width: '22px',
            //   height: '22px',
            //   background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            // />
            // }
            // selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >       
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont iconleimupinleifenleileibie2"></span>}
            title="分类"
            key="Koubei"
            // badge={'new'}
            data-seed="logId1"
          >  
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icongouwuche"></span>}
            title="购物车"
            key="Friend"
            dot
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont iconuser"></span>}
            title="个人中心"
            key="my"
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

