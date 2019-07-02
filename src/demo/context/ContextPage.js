/**
 * create at 06/28/19
 */
import React, { Component } from 'react'

class ContextComponent extends Component{
  render(){
    const user = {permalink: 'aaa'}, avatarSize = {}

    return (
      <div>
        <Page user={user} avatarSize={avatarSize}/>
        <PageLayout user={user} avatarSize={avatarSize}/>
        <NavigationBar user={user} avatarSize={avatarSize}/>
        <Link href={user.permalink}>
          <Avatar user={user} avatarSize={avatarSize}/>
        </Link>
      </div>
    )
  }
}

class Page extends Component{
  render(){
    return (
      <div>
        page.
      </div>
    )
  }
}
class PageLayout extends Component{
  render(){
    return (
      <div>
        PageLayout.
      </div>
    )
  }
}
class NavigationBar extends Component{
  render(){
    return (
      <div>
        NavigationBar.
      </div>
    )
  }
}
class Link extends Component{
  render(){
    return (
      <div>
        Link.
        {this.props.children}
      </div>
    )
  }
}
class Avatar extends Component{
  render(){
    return (
      <div>
        Avatar.
      </div>
    )
  }
}

export {
  ContextComponent,
}