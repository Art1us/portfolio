

export default function Service({img, name}) {
  return (
    <div className="service">
      <img src={img} alt="" />
      <p className='service__name'>{name}</p>
    </div>
  );
}
