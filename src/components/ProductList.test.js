import React from 'react';
import { shallow, mount } from 'enzyme';
import { ProductList } from 'components/ProductList';


const prop1 = {
  productList: [
    { name: 'Product name', full_description: 'This is description 1', _id: 1, image: 'image1' },
    { name: 'Product name', full_description: 'This is description 1', _id: 2, image: 'image2' },
  ], 
};

const prop2 = {
  productList: [],
};

it('renders without crashing', () => {
  shallow(<ProductList />);
});

const wrapperOne = mount(<ProductList {...prop1} />);
const wrapperTwo = mount(<ProductList {...prop2} />);

expect(wrapperOne.find('#product-list')).toExist();
expect(wrapperOne.find('#no-products')).not.toExist();

expect(wrapperOne.find('img')).toExist();

expect(wrapperTwo.find('#product-list')).not.toExist();
expect(wrapperTwo.find('#no-products')).toExist();