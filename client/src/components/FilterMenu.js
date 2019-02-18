import React from 'react';
import {CLASS_LOG, TYPE_CPU, TYPE_MISC} from '../constants/AppConstants';
import Filter from './Filter';
import {Sticky, Menu, Dropdown, Icon} from 'semantic-ui-react';

const FilterMenu = ({ctx, ref}) => {
  return (
    <Sticky context={ref}>
      <Menu className='small-mar-top' size='mini'>
        <Menu.Item name='class'
                   onClick={() => ctx.parseClass(CLASS_LOG)}>
          Load Class
        </Menu.Item>
        <Menu.Item name='codeView'
                   onClick={ctx.toggleCodeView}>
          Code View
        </Menu.Item>


        <Menu.Menu position='right'>
          <Menu.Item name='filter-misc'>
            <Filter type={TYPE_MISC} filter={ctx.filter.show}
                    action={ctx.doFilter(TYPE_MISC)}/>
          </Menu.Item>

          <Menu.Item name='filter-cpu'>
            <Filter type={TYPE_CPU} filter={ctx.filter.cpu}
                    action={ctx.doFilter(TYPE_CPU)}/>
          </Menu.Item>

          <Dropdown item icon='filter' simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name='dropdown' />
                <span className='text'>New</span>

                <Dropdown.Menu>
                  <Dropdown.Item>Document</Dropdown.Item>
                  <Dropdown.Item>Image</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item>Edit Permissions</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>


    </Sticky>
  );
};

export default FilterMenu;
