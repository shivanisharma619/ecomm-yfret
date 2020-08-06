import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Menu, Switch, Divider } from 'antd';
const { SubMenu } = Menu;

export function Menus() {


  const [levels, setLevels] = useState({
  	data: [
      { id: 'item', key: 'item1', label: 'Menu 1', api: 'level2', children: false },
      { id: 'sub-menu', key: 'sub-1', label: 'SubMenu 1', api: 'level2', children: true },
    ],

    level2: [],
    level3: [],
  })


  const [level2, setLevel2] = useState([]);

  const subMenuClick = (data) => {
  	console.log('m clicked');
    setLevels({
    	...levels,
      [data.api]: [
	      { id: 'item', key: 'item1', label: 'Menu 2', api: 'level3', children: false },
	      { id: 'sub-menu', key: 'sub-1', label: 'SubMenu 2', api: 'level3', children: true },
      ],
    });
  }

  const getNestedData = (data) => {
    if(data && data.length) {
      const row = data.map(each => {
      	if (each.id === 'item') {
          return <Menu.Item key={each.key}>{each.label}</Menu.Item>
      	}

      	if (each.id === "sub-menu" && each.children) {
      		return (
            <SubMenu key={each.api} onTitleClick={() => subMenuClick(each)} title={each.label}>
              {levels[each.api] ? getNestedData(levels[each.api]) : ''}    
            </SubMenu>
      		)
      	}

      	return null;
      });

      return row;
    }

    return null;
  }

  return (
  	<div>
      <Menu mode="horizontal" triggerSubMenuAction="click">
      <SubMenu key="sub1-2" title="Main Menu">
        {getNestedData(levels.data)}
      </SubMenu>
      </Menu>
  	</div>
  );
};