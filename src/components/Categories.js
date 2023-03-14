import React, { Component } from 'react'

export class categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Categories: [
                {
                    key: 'all',
                    name:'Снаряжение'
                },
                {
                    key: 'knife',
                    name:'Ножи'
                },
            
                {
                    key: 'bags',
                    name:'Рюкзаки'
                },
                {
                    key: 'palatki',
                    name:'Палатки'
                },
                {
                    key: 'boots',
                    name:'Ботинки'
                },
                {
                    key: 'zippo',
                    name:'зажигалки'
                },
                {
                    key: 'dazzle',
                    name:'Камуфляж'
                },
                {
                    key: 'glass',
                    name:'Бинокль'
                },
            ]
        
            
        }
    }
  render() {
    return (
      <div className='Categories'>
        {this.state.Categories.map(el => (
            <div key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default categories