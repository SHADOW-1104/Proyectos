export const Like = ( {textBtn} ) => {

  const handleClick = () => [
    alert('YOROSHIKU NE ❤!!!')
  ]
   
  return (
    // <ComponenteBoton />
    <button onClick={handleClick} type="button"> <img src="src\assets\img\like.png" alt="botonSimple" />{textBtn}</button>
  )
}
