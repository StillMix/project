import './activity.css'
import ActivityCard from '../activityCard/activityCard';

function Activity() {

  const initialCards = [{
    name: 'Всероссийская олимпиада по химии',
    data: '12.02.21',
    id: '1',

},

{
  name: 'Всероссийская олимпиада по химии',
  data: '12.02.21',
  id: '2',


},

{
  name: 'Всероссийская олимпиада по химии',
  data: '12.02.21',
  id: '3',


},

{
  name: 'Всероссийская олимпиада по химии',
  data: '12.02.21',
  id: '4',


},

{
  name: 'Всероссийская олимпиада по химии',
  data: '12.02.21',
  id: '5',


},

{
  name: 'Всероссийская олимпиада по химии',
  data: '12.02.21',
  id: '6',


}

];

  return (
     <>
        <div className="activity">
        <div className="activity__container">
        <div className="activity__link-container">
        {
          initialCards.map((i)=>{
            return <ActivityCard init={initialCards} id={i.id} data={i.data} name={i.name} />
          })
        }
        </div>
        </div>
        </div>
     </>
  );
}

export default Activity;