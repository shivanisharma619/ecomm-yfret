import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Menu, Switch, Divider } from 'antd';
import { mockData, mockData2, mockData3 } from './mockData';

const { SubMenu } = Menu;
let menus;
export class AntMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	masterArray: mockData.root.data,
    }
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
    console.log('each', each);
    // 
    let dataFromApi = [];

    if (each.level === "1") {
    	dataFromApi = mockData2.root.data;
    } else if (each.level === "2") {
    	dataFromApi = mockData3.root.data;
    }
    const stateName = `level${each.level}`;
    this.setState({
      [stateName]: each.level === "3" ? [] : dataFromApi, // do not put data.fn ===2 condition, this is for static data only
    }, () => {
    	console.log('state', this.state);
    });


  }

  render() {
  	const { masterArray } = this.state;
    return (
	  	<div>
	      <Menu mode="horizontal" triggerSubMenuAction="click">
	      <SubMenu key="0" title="Main Menu">
	        {this.getNestedData(masterArray)}
	      </SubMenu>
	      </Menu>
	  	</div>            
    );
  }
}
