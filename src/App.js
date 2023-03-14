import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Item from "./components/Item";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import { logRoles } from "@testing-library/react";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";


class App extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        orders: [],
        currentItems:[],
        items: [
          {
            id: 1,
            title: 'Нож БАСКо',
            img: 'hunter1.jpg' ,
            desc: 'Охотничий нож, длина: 60 мм, сталь: 9ХС',
            category: 'knife',
            price: '69,99'
          },
          {
            id: 2,
            title: 'Нож БАСКо',
            img: 'hunter8.jpg' ,
            desc: 'Охотничий нож, длина: 90 мм, сталь: 9ХС',
            category: 'knife',
            price: '39,99'
          },
          {
            id: 3,
            title: 'Нож БАСКо',
            img: 'hunter2.jpg' ,
            desc: 'Охотничий нож, длина: 70 мм, сталь: 9ХС',
            category: 'knife',
            price: '39,99'
          },
          {
            id: 4,
            title: 'Нож БАСКо ',
            img: 'hunter3.jpg' ,
            desc: 'Охотничий нож, длина: 80 мм, сталь: 9ХС',
            category: 'knife',
            price: '49,99'
          },
          {
            id: 5,
            title: 'Нож разделочный ',
            img: 'nozh1.jpg' ,
            desc: 'Охотничий нож, длина: 80 мм, сталь: 9ХС',
            category: 'knife',
            price: '59,99'
          },
          {
            id: 6,
            title: 'Нож Финский  ',
            img: 'finka.jpg' ,
            desc: 'Офицерский нож, длина: 70 мм, сталь: Дамаск',
            category: 'knife',
            price: '89,99'
          },
          {
            id: 7,
            title: 'Нож Bear Grylls',
            img: 'gerber-bear.jpg' ,
            desc: 'Охотничий нож, длина: 60 мм, сталь: 9ХС',
            category: 'knife',
            price: '39,99'
          },
          {
            id: 8,
            title: 'Нож Cкладной ',
            img: 'nozh6.jpg' ,
            desc: 'Охотничий нож, длина: 50 мм, сталь: 9ХС',
            category: 'knife',
            price: '29,99'
          },
          {
            id: 9,
            title: 'Рюкзак ml250  ',
            img: 'rukz12.jpg' ,
            desc: 'Рюкзак туристический,40л',
            category: 'bags',
            price: '99,99'
          },
          {
            id: 10,
            title: 'Рюкзак activity  ',
            img: 'rukz3.jpg' ,
            desc: 'Рюкзак туристический,40л',
            category: 'bags',
            price: '49,99'
          },
          {
            id: 11,
            title: 'Рюкзак activity',
            img: 'rukz4.jpg' ,
            desc: 'Рюкзак туристический,40л',
            category: 'bags',
            price: '49,99'
          },
          {
            id: 12,
            title: 'Рюкзак ml400 ',
            img: 'rukz23.jpg' ,
            desc: 'Рюкзак туристический,40л',
            category: 'bags',
            price: '69,99'
          },
          {
            id: 13,
            title: 'Рюкзак ml400 ',
            img: 'rukz16.jpg' ,
            desc: 'Рюкзак туристический,40л',
            category: 'bags',
            price: '149,99'
          },
          {
            id: 14,
            title: 'Рюкзак ml400 ',
            img: 'rukz22.jpg' ,
            desc: 'Рюкзак туристический,40л',
            category: 'bags',
            price: '149,99'
          },
          {
            id: 15,
            title: 'Рюкзак ml400 ',
            img: 'rukz19.jpg' ,
            desc: 'Рюкзак туристический,40л',
            category: 'bags',
            price: '149,99'
          },
          {
            id: 16,
            title: 'Рюкзак ml400 ',
            img: 'rukz20.jpg' ,
            desc: 'Рюкзак туристический,40л',
            category: 'bags',
            price: '149,99'
          },
          {
            id: 17,
            title: 'Палатка m1 ',
            img: 'pal1.jpg' ,
            desc: '2-человека,цвет хакки',
            category: 'palatki',
            price: '249,99'
          },
          {
            id: 18,
            title: 'Палатка m2',
            img: 'pal7.jpg' ,
            desc: '2-человека,цвет хакки',
            category: 'palatki',
            price: '249,99'
          },
          {
            id: 19,
            title: 'Палатка m3',
            img: 'pal3.jpg' ,
            desc: '2-человека,цвет хакки',
            category: 'palatki',
            price: '249,99'
          },
          {
            id: 20,
            title: 'Палатка m4 ',
            img: 'pal4.jpg' ,
            desc: '2-человека,цвет хакки',
            category: 'palatki',
            price: '249,99'
          },
          {
            id: 21,
            title: 'Берцы  ',
            img: 'garsing8.jpg' ,
            desc: 'Garsing ru254',
            category: 'boots',
            price: '149,99'
          },
          {
            id: 22,
            title: 'Берцы  ',
            img: 'garsing2.jpg' ,
            desc: 'Garsing ru254',
            category: 'boots',
            price: '149,99'
          },
          {
            id: 23,
            title: 'Берцы  ',
            img: 'garsing5.jpg' ,
            desc: 'Garsingru254',
            category: 'boots',
            price: '149,99'
          },
          {
            id: 24,
            title: 'Берцы  ',
            img: 'garsing7.jpg' ,
            desc: 'Garsingru254',
            category: 'boots',
            price: '149,99'
          },
          {
            id: 25,
            title: 'Берцы  ',
            img: 'garsing12.jpg' ,
            desc: 'Garsing ru254',
            category: 'boots',
            price: '149,99'
          },
          {
            id: 26,
            title: 'Берцы  ',
            img: 'garsing9.jpg' ,
            desc: 'Garsing ru254',
            category: 'boots',
            price: '149,99'
          },
          {
            id: 27,
            title: 'Берцы  ',
            img: 'garsing10.jpg' ,
            desc: 'Garsingru254',
            category: 'boots',
            price: '149,99'
          },
          {
            id: 28,
            title: 'Берцы  ',
            img: 'garsing11.jpg' ,
            desc: 'Garsing ru254',
            category: 'boots',
            price: '149,99'
          },
          {
            id: 29,
            title: 'Бинокль  ',
            img: 'glass1.jpg' ,
            desc: 'Увеличение X30',
            category: 'glass',
            price: '149,99'
          },
          {
            id: 30,
            title: 'Бинокль  ',
            img: 'glass2.jpg' ,
            desc: 'Увеличение X30',
            category: 'glass',
            price: '149,99'
          },
          {
            id: 31,
            title: 'Бинокль ',
            img: 'glass3.jpg' ,
            desc: 'Увеличение X30',
            category: 'glass',
            price: '149,99'
          },
          {
            id: 32,
            title: 'Бинокль ',
            img: 'glass7.jpg' ,
            desc: 'Увеличение X30',
            category: 'glass',
            price: '149,99'
          },
          {
            id: 33,
            title: 'Камуфляж Горка',
            img: 'kama1.jpg' ,
            desc: 'Камуфляж военный',
            category: 'dazzle',
            price: '39,99'
          },
          {
            id: 34,
            title: 'Камуфляж пиксель',
            img: 'kama3.jpg' ,
            desc: 'Камуфляж военный',
            category: 'dazzle',
            price: '39,99'
          },
          {
            id: 35,
            title: 'Zippo',
            img: 'zippo8.jpg' ,
            desc: 'Бензиновая зажигалка',
            category: 'zippo',
            price: '49,99'
          },
          {
            id: 36,
            title: 'Zippo ',
            img: 'zippo6.jpg' ,
            desc: 'Бензиновая зажигалка',
            category: 'zippo',
            price: '49,99'
          },
        ]
       
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this) 
      //взаимодействие с состояниями//
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory = this.chooseCategory.bind(this)
    }
  
  render () {
  return (
    <div className="wrapper">
    <Header orders={this.state.orders} onDelete={this.deleteOrder} />
    <Categories chooseCategory={this.chooseCategory}/>
    <Items items={this.state.currentItems} onAdd={this.addToOrder} />
    <Footer />
   </div>
  )
}

chooseCategory(category) {
  if(category === 'all') {
    this.setState ({currentItems:this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
  this.setState({orders:this.state.orders.filter(el => el.id !==id)})

}


addToOrder(item) { //Добавление в корзину//
  let isInArray = false                 // Запрет на добавление 1 товара 2 раза и более//
  this.state.orders.forEach(el => { 
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)
 this.setState({ orders: [...this.state.orders, item] }, ()=> {
  console.log(this.state.orders)
 })

  }
}
  
export default App;
