const InfoBadge = (props) => {
  return (
    <div className={props.styles}>
      <img src={props.imgSrc} alt={props.imgSrc} />
      <span>{props.span}</span>
    </div>
  );
};

export default InfoBadge;
