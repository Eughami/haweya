import React from 'react'

class Homepage extends React.Component{

  handleClick = (i) =>{
    switch(i){
      case 'first':
        this.props.history.push('/letter')
        break
      case 'second':
        this.props.history.push('/images')
        break
      case 'third':
        this.props.history.push('/video')
        break
      default:
        break
    }
  }
  render(){
    return(
      <div className='Welcome__page__container'>
        
        <div className='welcome__page__buttons' onClick={() => this.handleClick('first')}>Letter</div>
        <div className='welcome__page__buttons' onClick={() => this.handleClick('second')}>Images</div>
        <div className='welcome__page__buttons' onClick={() => this.handleClick('third')}>Video</div>
      </div>
    )
  }
}

export default Homepage