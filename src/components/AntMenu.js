import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Menu, Switch, Divider } from 'antd';
import { mockData, mockData2 } from './mockData';

const { SubMenu } = Menu;
export class AntMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	masterArray: mockData.root.data,
    	level: 1,
    }
  }

  componentDidMount() {
    let { masterArray } = this.state;
    masterArray = masterArray.map(each => {
    	each.level = 1;
    	console.log('each', each);
    	return each;
    });

    this.setState({
    	masterArray,
    });
  }

  getNestedData = (data) => {
    if(data && data.length) {
      const row = data.map((each, index) => {
    		return (
          <SubMenu key={each.HASH} onTitleClick={() => this.subMenuClick(each)} title={each.name}>
            {this.state[`level${each.level}`] && this.state[`level${each.level}`].length 
              ? this.getNestedData(this.state[`level${each.level}`]) : ''
            }
          </SubMenu>
    		)
      });

      return row;
    }

    return null;
  }

  subMenuClick = (each) => {
  	// hit api based on each... 
  	// if data than set array otherwise set empty array.
  	let { level } = this.state;
  	level = level + 1;
    const stateName = `level${each.level}`;
    let dataFromApi = mockData2.root.data;

    dataFromApi = dataFromApi.map(each => {
    	each.level = level;
    	return each;
    });

    this.setState({
    	level,
      [stateName]: level == 3 ? [] : dataFromApi, // do not put data.fn ===2 condition, this is for static data only
    });


  }

  render() {
  	const { masterArray } = this.state;
    return (
	  	<div>
	      <Menu mode="horizontal" triggerSubMenuAction="click">
	      <SubMenu key="sub1-2" title="Main Menu">
	        {this.getNestedData(masterArray)}
	      </SubMenu>
	      </Menu>
	  	</div>            
    );
  }
}
