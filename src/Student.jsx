/* propTypes= a mechanism that ensures thatv the passed values
is of the correct datatype.
age:propTypes.number
*/
import PropTypes from 'prop-types'
function Student(props){
  return (
    <div className="std">
      <p>Name: {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student: {props.isStudent ? "Yes":"No"}</p>
    </div>

  );
}
Student.propTypes={
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,

}
Student.defaultProps={
  name:guest,
  age:0,
  isStudent:false,
}
export default Student