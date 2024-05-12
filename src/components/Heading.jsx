

const Heading = ({className, title,text,tag}) => {
    return (
        <div className={`max-w-[50rem] mx-auto mb-12 lg:mb-20 ${className}`}>
            {tag && <h5 className="h5 text-center  text-n-3">{tag}</h5>}
            {title && <h2 className="h2">{title}</h2>}
            {text && <p className="body-2 text-n-4 mt-4 text-center">{text}</p>}
        </div>
    );
};

export default Heading;