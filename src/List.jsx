import PropTypes from 'prop-types'
function List(props){
  // const fruits=["apple","banana","orange","mango"]
  // return(fruits);
  // output : applebananaorangemango
  // const fruits=["apple","banana","orange","mango"]
  // const listItems=fruits.map(fruit => <li>{fruit}</li>)
  // return(<ol>{listItems}</ol>);

  // const fruits =[{ id:1,name:"apple",calories:94},
  //                 {id:2,name:"orange",calories:64},
  //                 {id:3,name:"banana",calories:70},
  //                 {id:4,name:"mango",calories:190}]
// fruits.sort((a,b)=>a.name.localeCompare(b.name))
// fruits.sort((a,b)=>b.name.localeCompare(a.name))
// fruits.sort((a,b)=>a.calories-b.calories)
// fruits.sort((a,b)=>b.calories-a.calories)
const category=props.category;
const itemList=props.item;
                  
const listItems=itemList.map(item=> <li key={item.id}>
                                  {item.name} :&nbsp;
                                  <b >{item.calories}</b>
                                  </li>)
  return (
    <>
    <h3 className="List-category"> {category}</h3>
    <ol className="List-items">{listItems}</ol>
    </>
  );
  
}
List.PropTypes={
  category:PropTypes.string,
  items:PropTypes.arrayOf(PropTypes.shape({ id:PropTypes.number,
    name:PropTypes.string,
    calories:PropTypes.number

  }))
}
List.defaultProps={
  category:"Category",
  items:[],
}
export default List