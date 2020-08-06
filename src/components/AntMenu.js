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
    }
  }

  getNestedData = (data) => {
    if(data && data.length) {
      const row = data.map((each, index) => {
    		return (
          <SubMenu key={each.HASH} onTitleClick={() => this.subMenuClick(each)} title={each.name}>
            {this.state[`level${each.fn}`] && this.state[`level${each.fn}`].length 
              ? this.getNestedData(this.state[`level${each.fn}`]) : ''
            }
          </SubMenu>
    		)
      });

      return row;
    }

    return null;
  }

  subMenuClick = (data) => {
  	// hit api based on data... 
  	// if data than set array otherwise set empty array.
    const stateName = `level${data.fn}`;
    this.setState({
      [stateName]: data.fn === "2" ? [] : mockData2.root.data, // do not put data.fn ===2 condition, this is for static data only
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
