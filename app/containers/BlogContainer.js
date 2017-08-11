import React, {Component} from 'react';

import BlogEntry from '../components/BlogEntry';

import BlogActions from '../actions/BlogActions';
import BlogStore from '../stores/BlogStore';

class BlogContainer extends Component {

  constructor(){
    super();
    this.state = {
      posts: []
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount(){
    BlogStore.addChangeListener(this.onChange);
  }

  componentDidMount(){
    BlogActions.getPosts();
  }

  componentWillUnmount(){
    BlogStore.removeChangeListener(this.onChange);
  }

  onChange(){
    this.setState({
      posts: BlogStore.getPosts()
    });
  }

  render(){
    console.log(this.state);
    return(
      <div className = "baseContainer">
        {
          this.state.posts.map((post,id) => (
            <BlogEntry key={id} {...post}/>
          ))
        }
      </div>
    );
  }
}

export default BlogContainer;
