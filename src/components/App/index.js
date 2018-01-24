// @flow

import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react';
import classnames from 'classnames';

import thyme from './Thyme.svg';

function AppLink(name, path, currentPath) {
  return (
    <Link
      className={classnames('item', { active: currentPath === path })}
      to={path}
    >
      {name}
    </Link>
  );
}

type AppType = {
  location: RouterLocation,
  children: any
}

function App({ location, children }: AppType) {
  return (
    <div className="App">
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <Image size="mini" src={thyme} alt="Thyme" style={{ width: 24, marginRight: '1.5em' }} />
            Thyme
          </Menu.Item>
          {AppLink('Timesheet', '/', location.pathname)}
          {AppLink('Reports', '/reports', location.pathname)}
          {AppLink('Projects', '/projects', location.pathname)}
          {AppLink('Settings', '/settings', location.pathname)}
        </Container>
      </Menu>
      <Container fluid style={{ marginTop: '5em' }}>{children}</Container>
    </div>
  );
}

export default withRouter(App);
