
export const Dislike = ( {textBtn} ) => {
    const handleClick = () => {
        alert('SHINE! 💔')
    }
  return (
    <>
    <button onClick={handleClick} type="button"><img src="src\assets\img\dislike.png" alt="" />{textBtn}</button>
    </>
  )
}
