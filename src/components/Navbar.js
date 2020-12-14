import React from 'react';
import { Menu, Row } from 'antd';
import {
  MailTwoTone,
  HeartTwoTone,
  ProfileTwoTone,
  HomeTwoTone,
} from '@ant-design/icons';
class NavBar extends React.Component {
  state = {
    current: 'letter',
  };
  componentDidMount() {
    console.log('Navbar mounted');

    const menuKey = this.props.props.location.pathname.slice(1);
    this.setState({ current: menuKey });
  }

  handleMenuClick = (e) => {
    const newRoute = e.key === 'home' ? '' : e.key;
    this.props.props.history.push(`/${newRoute}`);
  };
  render() {
    const { current } = this.state;
    console.log('Selected keys : ', current);
    return (
      <Row justify="space-around" align="middle">
        <Menu
          onClick={this.handleMenuClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item
            key="home"
            icon={
              <HomeTwoTone twoToneColor={current === '' ? '#eb2f96' : ''} />
            }
          />
          <Menu.Item
            key="letter"
            icon={
              <MailTwoTone
                twoToneColor={current === 'letter' ? '#eb2f96' : ''}
              />
            }
          >
            Letter
          </Menu.Item>
          <Menu.Item
            key="images"
            icon={
              <HeartTwoTone
                twoToneColor={current === 'images' ? '#eb2f96' : ''}
              />
            }
          >
            Images
          </Menu.Item>
          <Menu.Item
            key="boobilist"
            icon={
              <ProfileTwoTone
                twoToneColor={current === 'boobilist' ? '#eb2f96' : ''}
              />
            }
          >
            Boo List
          </Menu.Item>
        </Menu>
      </Row>
    );
  }
}

export default NavBar;
